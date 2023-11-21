export interface StaticallyReferenceable {
    id: number;
    toJSON: () => StaticReferenceHandle;
}
export declare enum StaticReferenceIdentifier {
    Action = "a",
    Background = "b",
    Characteristic = "c",
    EquipmentItem = "e",
    Spell = "s",
    WeaponItem = "w"
}
export interface StaticReferenceHandle {
    ref: string;
}
