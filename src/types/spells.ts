export interface ISpell {
    name: string;
    image: string;
    level: number;
    school: SpellSchool;
    ritual: boolean;
    classes: string[];
    // races: string[];
    summary: string;
    description: string;
    actionType: ActionType;
    concentration: boolean;
    noSpellSlot: boolean;
}

export enum SpellSchool {
    NONE,
    Abjuration,
    Conjuration,
    Divination,
    Enchantment,
    Evocation,
    Illusion,
    Necromancy,
    Transmutation,
    'Class Action',
}

export enum ActionType {
    NONE,
    action,
    bonus,
    reaction,
    both,
}
