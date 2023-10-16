import { GrantableEffect } from './grantable-effect';

export enum CharacterPlannerStep {
    SET_CLASS = 'SET_CLASS',
    SET_RACE = 'SET_RACE',
    SET_BACKGROUND = 'SET_BACKGROUND',
    SET_ABILITY_SCORES = 'SET_ABILITY_SCORES',
    LEVEL_UP = 'LEVEL_UP',
    MULTICLASS_ROOT = 'MULTICLASS_ROOT',
    MULTICLASS = 'MULTICLASS',
    CHOOSE_SUBRACE = 'CHOOSE_SUBRACE',
    CHOOSE_SUBCLASS = 'CHOOSE_SUBCLASS',
    SUBCLASS_FEATURE = 'SUBCLASS_FEATURE',
    FEAT = 'FEAT',
    FEAT_SUBCHOICE = 'FEAT_SUBCHOICE',
    FEAT_ABILITY_SCORES = 'FEAT_ABILITY_SCORES',
}

export type ICharacterChoice = {
    type: CharacterPlannerStep;
    options: ICharacterOption[];
};

export interface ICharacterOption {
    name: string;
    description?: string;
    image?: string;
    type?: CharacterPlannerStep;
    grants?: GrantableEffect[];
    choices?: ICharacterChoice[];
}
