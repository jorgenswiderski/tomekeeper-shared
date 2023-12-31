export enum DamageType {
    NONE,
    Slashing,
    Piercing,
    Bludgeoning,
    Fire,
    Cold,
    Lightning,
    Thunder,
    Acid,
    Poison,
    Radiant,
    Necrotic,
    Force,
    Psychic,

    // Special Types
    Healing,
    Physical,
}

export const damageTypeColor: Record<DamageType, string> = {
    [DamageType.NONE]: '#fff',
    [DamageType.Slashing]: '#8c8c8c',
    [DamageType.Piercing]: '#8c8c8c',
    [DamageType.Bludgeoning]: '#8c8c8c',
    [DamageType.Physical]: '#8c8c8c',
    [DamageType.Fire]: '#ee5500',
    [DamageType.Cold]: '#3399cc',
    [DamageType.Lightning]: '#3366cc',
    [DamageType.Thunder]: '#8844bb',
    [DamageType.Acid]: '#80b000',
    [DamageType.Poison]: '#44bb00',
    [DamageType.Radiant]: '#ccaa00',
    [DamageType.Necrotic]: '#40b050',
    [DamageType.Force]: '#cc3333',
    [DamageType.Psychic]: '#cc77aa',
    [DamageType.Healing]: '#30bbbb',
};
