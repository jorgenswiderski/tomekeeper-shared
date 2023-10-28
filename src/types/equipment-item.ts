import { DamageType } from './damage';
import { GrantableEffect } from './grantable-effect';

export enum EquipmentItemType {
    NONE,

    Amulets,
    Boots,
    Cloaks,
    Clothing,
    Gloves,
    'Heavy Armour',
    Helmets,
    'Light Armour',
    'Medium Armour',
    Rings,
    Shields,

    Battleaxes,
    Clubs,
    Daggers,
    Darts,
    Flails,
    Glaives,
    Greataxes,
    Greatclubs,
    Greatswords,
    Halberds,
    Handaxes,
    'Hand Crossbows',
    'Heavy Crossbows',
    Javelins,
    'Light Crossbows',
    'Light Hammers',
    Longbows,
    Longswords,
    Maces,
    Mauls,
    Morningstars,
    Pikes,
    Quarterstaves,
    Rapiers,
    Scimitars,
    Shortbows,
    Shortswords,
    Sickles,
    Slings,
    Spears,
    Tridents,
    Warhammers,
    'War Picks',
}

export enum EquipmentSlot {
    Head,
    Body,
    Hands,
    Feet,

    Back,
    Amulet,
    Ring1,
    Ring2,

    MeleeMainhand,
    MeleeOffhand,
    RangedMainhand,
    RangedOffhand,
}

export const equipmentSlotTypes: Record<EquipmentSlot, EquipmentItemType[]> = {
    [EquipmentSlot.Head]: [EquipmentItemType.Helmets],
    [EquipmentSlot.Body]: [
        EquipmentItemType.Clothing,
        EquipmentItemType['Light Armour'],
        EquipmentItemType['Medium Armour'],
        EquipmentItemType['Heavy Armour'],
    ],
    [EquipmentSlot.Hands]: [EquipmentItemType.Gloves],
    [EquipmentSlot.MeleeMainhand]: [
        EquipmentItemType.Battleaxes,
        EquipmentItemType.Clubs,
        EquipmentItemType.Daggers,
        // EquipmentItemType.Darts,
        EquipmentItemType.Flails,
        EquipmentItemType.Glaives,
        EquipmentItemType.Greataxes,
        EquipmentItemType.Greatclubs,
        EquipmentItemType.Greatswords,
        EquipmentItemType.Halberds,
        EquipmentItemType.Handaxes,
        EquipmentItemType.Javelins,
        EquipmentItemType.Maces,
        EquipmentItemType.Mauls,
        EquipmentItemType.Morningstars,
        EquipmentItemType.Pikes,
        EquipmentItemType.Quarterstaves,
        EquipmentItemType.Rapiers,
        EquipmentItemType.Scimitars,
        EquipmentItemType.Shortswords,
        EquipmentItemType.Sickles,
        EquipmentItemType.Spears,
        EquipmentItemType.Tridents,
        EquipmentItemType.Warhammers,
        EquipmentItemType['War Picks'],
    ],
    [EquipmentSlot.MeleeOffhand]: [
        EquipmentItemType.Shields,

        EquipmentItemType.Battleaxes,
        EquipmentItemType.Clubs,
        EquipmentItemType.Daggers,
        // EquipmentItemType.Darts,
        EquipmentItemType.Flails,
        EquipmentItemType.Glaives,
        EquipmentItemType.Greataxes,
        EquipmentItemType.Greatclubs,
        EquipmentItemType.Greatswords,
        EquipmentItemType.Halberds,
        EquipmentItemType.Handaxes,
        EquipmentItemType.Javelins,
        EquipmentItemType.Maces,
        EquipmentItemType.Mauls,
        EquipmentItemType.Morningstars,
        EquipmentItemType.Pikes,
        EquipmentItemType.Quarterstaves,
        EquipmentItemType.Rapiers,
        EquipmentItemType.Scimitars,
        EquipmentItemType.Shortswords,
        EquipmentItemType.Sickles,
        EquipmentItemType.Spears,
        EquipmentItemType.Tridents,
        EquipmentItemType.Warhammers,
        EquipmentItemType['War Picks'],
    ],
    [EquipmentSlot.RangedMainhand]: [
        EquipmentItemType['Light Crossbows'],
        EquipmentItemType['Hand Crossbows'],
        EquipmentItemType['Heavy Crossbows'],
        EquipmentItemType.Longbows,
        EquipmentItemType.Shortbows,
        // EquipmentItemType.Slings,
    ],
    [EquipmentSlot.RangedOffhand]: [EquipmentItemType['Hand Crossbows']],
    [EquipmentSlot.Back]: [EquipmentItemType.Cloaks],
    [EquipmentSlot.Feet]: [EquipmentItemType.Boots],
    [EquipmentSlot.Amulet]: [EquipmentItemType.Amulets],
    [EquipmentSlot.Ring1]: [EquipmentItemType.Rings],
    [EquipmentSlot.Ring2]: [EquipmentItemType.Rings],
};

export enum EquipmentItemProficiency {
    NONE,
    'Light Armour',
    'Medium Armour',
    'Heavy Armour',
    Shields,
}

export enum ItemRarity {
    NONE,
    common,
    uncommon,
    rare,
    'very rare',
    legendary,
    story,
}

export interface IEquipmentItem {
    name: string;
    image: string;
    icon: string;
    description?: string;
    quote: string;
    type: EquipmentItemType;
    proficiency: EquipmentItemProficiency;
    baseArmorClass?: number;
    bonusArmorClass?: number;
    enchantment?: number;
    rarity: ItemRarity;
    weightKg?: number;
    weightLb?: number;
    price?: number;
    uid?: string;
    effects: GrantableEffect[];
    source?: string;
    notes: string[];
    id: number;
}

export enum WeaponCategory {
    NONE,
    martial = 1,
    Martial = 1,
    simple = 2,
    Simple = 2,
}

export enum WeaponRangeType {
    NONE,
    melee,
    ranged,
}

export enum WeaponHandedness {
    NONE,
    'one-handed',
    versatile,
    'two-handed',
}

export enum WeaponRange {
    melee,
    normal,
    short,
    special,
}

export interface IWeaponItem extends IEquipmentItem {
    category: WeaponCategory;
    rangeType: WeaponRangeType;
    handedness: WeaponHandedness;
    damage: string;
    damageType: DamageType;
    damageVersatile?: string;
    extraDamage?: string;
    extraDamage2?: string;
    range: WeaponRange;
    finesse: boolean;
    heavy: boolean;
    light: boolean;
    reach: boolean;
    thrown: boolean;
    cantDualWield: boolean;
    dippable: boolean;
    // weaponActions: IActionEffect[];
    // special: IActionEffect[];
}
