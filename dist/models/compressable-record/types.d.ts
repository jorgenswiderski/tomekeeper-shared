export interface CompressableRecord {
    toJSON: () => CompressableRecordHandle;
}
export declare enum CompressableRecordIdentifier {
    Action = 0,
    EquipmentItem = 1,
    Spell = 2
}
export type CompressableRecordHandle = any[];
