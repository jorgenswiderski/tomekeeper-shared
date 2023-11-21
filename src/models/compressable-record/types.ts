export interface CompressableRecord {
    toJSON: () => CompressableRecordHandle;
}

export enum CompressableRecordIdentifier {
    Action,
    EquipmentItem,
    Spell,
}

export type CompressableRecordHandle = any[];
