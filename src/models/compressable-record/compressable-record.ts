import {
    CompressableRecord,
    CompressableRecordHandle,
    CompressableRecordIdentifier,
} from './types';

export class RecordCompressor {
    static classes: Map<
        CompressableRecordIdentifier,
        {
            Class: new (...args: any[]) => any;
        }
    > = new Map();

    static registerClass<T extends CompressableRecord>(
        Class: new (...args: any[]) => T,
        identifier: CompressableRecordIdentifier,
    ): (...args: any[]) => CompressableRecordHandle {
        if (RecordCompressor.classes.has(identifier)) {
            const registeredClass = RecordCompressor.classes.get(identifier)!;

            // Sometimes the class may get registered again when the app hot reloads, so let's handle that gracefully.
            if (registeredClass.Class.name === Class.name) {
                return RecordCompressor.createReferenceFactory(identifier);
            }

            throw new Error(
                `Reference conflict between ${registeredClass.Class.name} and ${Class.name}`,
            );
        }

        RecordCompressor.classes.set(identifier, {
            Class,
        });

        return RecordCompressor.createReferenceFactory(identifier);
    }

    static async parseValue(
        identifier: CompressableRecordIdentifier,
        ...args: any[]
    ): Promise<any> {
        const info = RecordCompressor.classes.get(identifier);

        if (!info) {
            throw new Error(
                `Compressor with identifier ${identifier} is not defined`,
            );
        }

        if ((info.Class as any).decompress) {
            return (info.Class as any).decompress(...args);
        }

        return new info.Class(...args);
    }

    static async parseAllValues(obj: any): Promise<any> {
        if (Array.isArray(obj)) {
            if (obj[0] === '#' && typeof obj[1] === 'number') {
                return RecordCompressor.parseValue(obj[1], ...obj.slice(2));
            }

            return Promise.all(
                obj.map((value) => RecordCompressor.parseAllValues(value)),
            );
        }

        if (
            typeof obj === 'object' &&
            obj !== null &&
            obj.constructor === Object
        ) {
            return Object.fromEntries(
                await Promise.all(
                    Object.entries(obj).map(async ([key, val]) => [
                        key,
                        await RecordCompressor.parseAllValues(val),
                    ]),
                ),
            );
        }

        return obj;
    }

    static createReferenceFactory =
        (identifier: CompressableRecordIdentifier) =>
        (...data: any[]): CompressableRecordHandle => [
            '#',
            identifier,
            ...data,
        ];
}
