export enum GrantableEffectType {
    ACTION = 'ACTION',
    CHARACTERISTIC = 'CHARACTERISTIC',
    PROFICIENCY = 'PROFICIENCY',
}

export interface GrantableEffect {
    name: string;
    description?: string;
    hidden?: boolean;
    type: GrantableEffectType;
}

export enum ProficiencyTypes {
    SKILL_ACROBATICS = 'ACROBATICS',
    SKILL_ANIMAL_HANDLING = 'ANIMAL HANDLING',
    SKILL_ARCANA = 'ARCANA',
    SKILL_ATHLETICS = 'ATHLETICS',
    SKILL_DECEPTION = 'DECEPTION',
    SKILL_HISTORY = 'HISTORY',
    SKILL_INSIGHT = 'INSIGHT',
    SKILL_INTIMIDATION = 'INTIMIDATION',
    SKILL_MEDICINE = 'MEDICINE',
    SKILL_PERFORMANCE = 'PERFORMANCE',
    SKILL_PERSUASION = 'PERSUASION',
    SKILL_RELIGION = 'RELIGION',
    SKILL_SLEIGHT_OF_HAND = 'SLEIGHT OF HAND',
    SKILL_STEALTH = 'STEALTH',
    SKILL_SURVIVAL = 'SURVIVAL',
}

export interface Proficiency extends GrantableEffect {
    type: GrantableEffectType.PROFICIENCY;
    proficiency: ProficiencyTypes;
}

export enum CharacteristicEffect {}

export interface Characteristic extends GrantableEffect {
    type: GrantableEffectType.CHARACTERISTIC;
    effects?: CharacteristicEffect[];
}
