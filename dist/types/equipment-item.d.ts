import { DamageType } from './damage';
import { GrantableEffect } from './grantable-effect';
export declare enum EquipmentItemType {
    NONE = 0,
    Amulets = 1,
    Boots = 2,
    Cloaks = 3,
    Clothing = 4,
    Gloves = 5,
    'Heavy Armour' = 6,
    Helmets = 7,
    'Light Armour' = 8,
    'Medium Armour' = 9,
    Rings = 10,
    Shields = 11,
    Battleaxes = 12,
    Clubs = 13,
    Daggers = 14,
    Darts = 15,
    Flails = 16,
    Glaives = 17,
    Greataxes = 18,
    Greatclubs = 19,
    Greatswords = 20,
    Halberds = 21,
    Handaxes = 22,
    'Hand Crossbows' = 23,
    'Heavy Crossbows' = 24,
    Javelins = 25,
    'Light Crossbows' = 26,
    'Light Hammers' = 27,
    Longbows = 28,
    Longswords = 29,
    Maces = 30,
    Mauls = 31,
    Morningstars = 32,
    Pikes = 33,
    Quarterstaves = 34,
    Rapiers = 35,
    Scimitars = 36,
    Shortbows = 37,
    Shortswords = 38,
    Sickles = 39,
    Slings = 40,
    Spears = 41,
    Tridents = 42,
    Warhammers = 43,
    'War Picks' = 44
}
export declare enum EquipmentSlot {
    Head = 0,
    Body = 1,
    Hands = 2,
    Feet = 3,
    Back = 4,
    Amulet = 5,
    Ring1 = 6,
    Ring2 = 7,
    MeleeMainhand = 8,
    MeleeOffhand = 9,
    RangedMainhand = 10,
    RangedOffhand = 11
}
export declare const equipmentSlotLabels: Record<EquipmentSlot, string>;
export declare const equipmentSlotTypes: Record<EquipmentSlot, EquipmentItemType[]>;
export declare enum EquipmentItemProficiency {
    NONE = 0,
    'Light Armour' = 1,
    'Medium Armour' = 2,
    'Heavy Armour' = 3,
    Shields = 4
}
export declare enum ItemRarity {
    NONE = 0,
    common = 1,
    uncommon = 2,
    rare = 3,
    'very rare' = 4,
    legendary = 5,
    story = 6
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
    id: number;
}
export declare enum WeaponCategory {
    NONE = 0,
    martial = 1,
    Martial = 1,
    simple = 2,
    Simple = 2
}
export declare enum WeaponRangeType {
    NONE = 0,
    melee = 1,
    ranged = 2
}
export declare enum WeaponHandedness {
    NONE = 0,
    'one-handed' = 1,
    versatile = 2,
    'two-handed' = 3
}
export declare enum WeaponRange {
    melee = 0,
    normal = 1,
    short = 2,
    special = 3
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
}
