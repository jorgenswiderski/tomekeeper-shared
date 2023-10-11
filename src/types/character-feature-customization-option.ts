import { GrantableEffect } from './grantable-effect';

export enum CharacterPlannerStep {
    SET_CLASS = 'SET_CLASS',
    SET_RACE = 'SET_RACE',
    SET_BACKGROUND = 'SET_BACKGROUND',
    SET_ABILITY_SCORES = 'SET_ABILITY_SCORES',
    LEVEL_UP = 'LEVEL_UP',
    MULTICLASS = 'MULTICLASS',
    CHOOSE_SUBRACE = 'CHOOSE_SUBRACE',
    CHOOSE_SUBCLASS = 'CHOOSE_SUBCLASS',
}

export interface ICharacterFeatureCustomizationOption {
    name: string;
    description?: string;
    image?: string;
    choiceType?: CharacterPlannerStep;
    choices?: ICharacterFeatureCustomizationOption[][];
    grants?: GrantableEffect[];
}
