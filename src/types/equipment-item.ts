import { GrantableEffect } from './grantable-effect';

export enum EquipmentItemType {
    NONE,

    Amulets,
    Footwear,
    Cloaks,
    Clothing,
    Handwear,
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
    description: string;
    quote: string;
    type: EquipmentItemType;
    proficiency: EquipmentItemProficiency;
    baseArmorClass?: number;
    bonusArmorClass?: number;
    enchantment?: number;
    rarity: ItemRarity;
    weightKg: number;
    weightLb: number;
    price: number;
    uid: string;
    effects: GrantableEffect[];
    source: string;
    notes: string[];
}
