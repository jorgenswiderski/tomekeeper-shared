import { CompressableRecord, CompressableRecordHandle, CompressableRecordIdentifier } from './types';
export declare class RecordCompressor {
    static classes: Map<CompressableRecordIdentifier, {
        Class: new (...args: any[]) => any;
    }>;
    static registerClass<T extends CompressableRecord>(Class: new (...args: any[]) => T, identifier: CompressableRecordIdentifier): (...args: any[]) => CompressableRecordHandle;
    static parseValue(identifier: CompressableRecordIdentifier, ...args: any[]): Promise<any>;
    static parseAllValues(obj: any): Promise<any>;
    static createReferenceFactory: (identifier: CompressableRecordIdentifier) => (...data: any[]) => CompressableRecordHandle;
}
