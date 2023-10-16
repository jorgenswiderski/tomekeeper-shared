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
    NONE = 'NONE',
    ABJURATION = 'ABJURATION',
    CONJURATION = 'CONJURATION',
    DIVINATION = 'DIVINATION',
    ENCHANTMENT = 'ENCHANTMENT',
    EVOCATION = 'EVOCATION',
    ILLUSION = 'ILLUSION',
    NECROMANCY = 'NECROMANCY',
    TRANSMUTATION = 'TRANSMUTATION',
}

export enum ActionType {
    NONE,
    ACTION = 'ACTION',
    BONUS = 'BONUS',
    REACTION = 'REACTION',
    BOTH = 'BOTH',
}
