import { IAction } from './action';
export declare enum GrantableEffectType {
    NONE = 0,
    ACTION = 1,
    CHARACTERISTIC = 2,
    PROFICIENCY = 3
}
export interface GrantableEffect {
    name: string;
    description?: string;
    hidden?: boolean;
    type: GrantableEffectType;
    image?: string;
    grants?: GrantableEffect[];
}
export declare enum ProficiencyTypes {
    SKILL_ACROBATICS = "ACROBATICS",
    SKILL_ANIMAL_HANDLING = "ANIMAL HANDLING",
    SKILL_ARCANA = "ARCANA",
    SKILL_ATHLETICS = "ATHLETICS",
    SKILL_DECEPTION = "DECEPTION",
    SKILL_HISTORY = "HISTORY",
    SKILL_INSIGHT = "INSIGHT",
    SKILL_INTIMIDATION = "INTIMIDATION",
    SKILL_MEDICINE = "MEDICINE",
    SKILL_PERFORMANCE = "PERFORMANCE",
    SKILL_PERSUASION = "PERSUASION",
    SKILL_RELIGION = "RELIGION",
    SKILL_SLEIGHT_OF_HAND = "SLEIGHT OF HAND",
    SKILL_STEALTH = "STEALTH",
    SKILL_SURVIVAL = "SURVIVAL"
}
export interface Proficiency extends GrantableEffect {
    type: GrantableEffectType.PROFICIENCY;
    proficiency: ProficiencyTypes;
}
export declare enum CharacteristicType {
    EFFECT_NONE = 0,
    ABILITY_BASE = 1,
    ABILITY_RACIAL = 2,
    ABILITY_FEAT = 3
}
export interface ICharacteristic extends GrantableEffect {
    type: GrantableEffectType.CHARACTERISTIC;
    subtype?: CharacteristicType;
    values?: any;
    id: number;
}
export declare enum ActionEffectType {
    ACTION_NONE = 0,
    CLASS_ACTION = 1,
    RACIAL_ACTION = 2,
    SPELL_ACTION = 3
}
export interface IActionEffect extends GrantableEffect {
    type: GrantableEffectType.ACTION;
    subtype: ActionEffectType;
    id: number;
    action: IAction;
}
