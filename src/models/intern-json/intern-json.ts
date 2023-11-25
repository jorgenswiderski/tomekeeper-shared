import baseX from 'base-x';
import { InternOption } from './types';

const base64 = baseX(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-=',
);

type JsonValue = string | number | boolean | null | JsonArray | JsonObject;

interface JsonArray extends Array<JsonValue> {}

interface JsonObject {
    [key: string]: JsonValue;
}

interface InternedJsonObject {
    o: JsonObject;
    v: Record<string, string>;
    k: Record<string, string>;
}

export class InternJson {
    protected static internStrings(
        data: JsonObject,
        option: InternOption = InternOption.VALUES,
    ): {
        value: JsonObject;
        map: Record<string, string>;
    } {
        const stringCounts = new Map<string, number>();

        function countStrings(objectToCount: JsonValue) {
            if (Array.isArray(objectToCount)) {
                objectToCount.forEach(countStrings);
            } else if (
                typeof objectToCount === 'object' &&
                objectToCount !== null
            ) {
                if (option === InternOption.KEYS) {
                    Object.keys(objectToCount).forEach((key) => {
                        if (typeof key === 'string') {
                            stringCounts.set(
                                key,
                                (stringCounts.get(key) || 0) + 1,
                            );
                        }
                    });
                }

                Object.values(objectToCount).forEach(countStrings);
            } else if (
                option === InternOption.VALUES &&
                typeof objectToCount === 'string'
            ) {
                stringCounts.set(
                    objectToCount,
                    (stringCounts.get(objectToCount) || 0) + 1,
                );
            }
        }

        countStrings(data);

        const sortedStrings = Array.from(stringCounts.entries())
            .filter(
                ([value, count]) =>
                    count * value.length > 7 + value.length + count,
            )
            .sort((a, b) => (b[0].length - 1) * b[1] - (a[0].length - 1) * a[1])
            .map(([str]) => str);

        const stringMap = new Map<string, string>();
        const usedIdentifiers = new Set(sortedStrings);
        let idCount = 1;

        function generateIdentifier() {
            let id = '';

            do {
                const buffer = Buffer.alloc(4); // Use a 4-byte buffer for larger range, up to 256^4 identifiers
                buffer.writeUInt32BE(idCount, 0); // Write idCount as a 4-byte integer
                id = base64.encode(buffer).replace(/^0+/, '');
                idCount += 1;
            } while (usedIdentifiers.has(id));

            usedIdentifiers.add(id);

            return id;
        }

        sortedStrings.forEach((str) => {
            const identifier = generateIdentifier();
            stringMap.set(str, identifier);
        });

        function internStringsInObj(obj: JsonValue): JsonValue {
            if (Array.isArray(obj)) {
                return obj.map(internStringsInObj);
            }

            if (typeof obj === 'object' && obj !== null) {
                const newObj: Record<string, JsonValue> = {};

                // eslint-disable-next-line no-restricted-syntax
                for (const [key, value] of Object.entries(obj)) {
                    const newKey =
                        option === InternOption.KEYS && stringMap.has(key)
                            ? stringMap.get(key)!
                            : key;

                    const newValue = internStringsInObj(value);
                    newObj[newKey] = newValue;
                }

                return newObj;
            }

            if (
                option === InternOption.VALUES &&
                typeof obj === 'string' &&
                stringMap.has(obj)
            ) {
                return stringMap.get(obj)!;
            }

            return obj;
        }

        const internedObj = internStringsInObj(data) as JsonObject;

        return { value: internedObj, map: Object.fromEntries(stringMap) };
    }

    protected static reverseInternStrings(
        data: JsonObject,
        stringMap: Record<string, string>,
        option: InternOption = InternOption.VALUES,
    ): JsonObject {
        const reverseMap = new Map(
            Object.entries(stringMap).map(([key, value]) => [value, key]),
        );

        function reverseInternInObj(obj: JsonValue): JsonValue {
            if (Array.isArray(obj)) {
                return obj.map(reverseInternInObj);
            }

            if (typeof obj === 'object' && obj !== null) {
                const newObj: Record<string, JsonValue> = {};

                // eslint-disable-next-line no-restricted-syntax
                for (const [key, value] of Object.entries(obj)) {
                    const newKey =
                        option === InternOption.KEYS && reverseMap.has(key)
                            ? reverseMap.get(key)!
                            : key;

                    const newValue = reverseInternInObj(value);
                    newObj[newKey] = newValue;
                }

                return newObj;
            }

            if (
                option === InternOption.VALUES &&
                typeof obj === 'string' &&
                reverseMap.has(obj)
            ) {
                return reverseMap.get(obj)!;
            }

            return obj;
        }

        return reverseInternInObj(data) as JsonObject;
    }

    static intern(data: JsonObject): InternedJsonObject {
        const copy = JSON.parse(JSON.stringify(data));

        const internedValues = InternJson.internStrings(
            copy,
            InternOption.VALUES,
        );

        const internedKeys = InternJson.internStrings(
            internedValues.value,
            InternOption.KEYS,
        );

        return {
            o: internedKeys.value,
            v: internedValues.map,
            k: internedKeys.map,
        };
    }

    static reverseIntern(data: InternedJsonObject): JsonObject {
        const { o: interned, v: valueMap, k: keyMap } = data;

        const reversedKeys = this.reverseInternStrings(
            interned,
            keyMap,
            InternOption.KEYS,
        );

        const reversedValues = this.reverseInternStrings(
            reversedKeys,
            valueMap,
            InternOption.VALUES,
        );

        return reversedValues;
    }
}
