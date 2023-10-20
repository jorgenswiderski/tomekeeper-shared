import {
    ActionEffect,
    Characteristic,
    GrantableEffect,
    Proficiency,
} from './grantable-effect';

export enum CharacterPlannerStep {
    PRIMARY_CLASS = 'PRIMARY_CLASS',
    SET_RACE = 'SET_RACE',
    SET_BACKGROUND = 'SET_BACKGROUND',
    SET_ABILITY_SCORES = 'SET_ABILITY_SCORES',
    LEVEL_UP = 'LEVEL_UP',
    MULTICLASS_PROXY = 'MULTICLASS_PROXY',
    SECONDARY_CLASS = 'SECONDARY_CLASS',
    CHOOSE_SUBRACE = 'CHOOSE_SUBRACE',
    CHOOSE_SUBCLASS = 'CHOOSE_SUBCLASS',
    SUBCLASS_FEATURE = 'SUBCLASS_FEATURE',
    FEAT = 'FEAT',
    FEAT_SUBCHOICE = 'FEAT_SUBCHOICE',
    FEAT_ABILITY_SCORES = 'FEAT_ABILITY_SCORES',
    LEARN_CANTRIPS = 'LEARN_CANTRIPS',
    LEARN_SPELLS = 'LEARN_SPELLS',
    REMOVE_LEVEL = 'REMOVE_LEVEL',
    MANAGE_LEVELS = 'MANAGE_LEVELS',
    REVISE_LEVEL = 'REVISE_LEVEL',
}

export type ICharacterChoice = {
    type: CharacterPlannerStep;
    options: ICharacterOption[];
    count?: number;
};

export interface ICharacterOption {
    name: string;
    description?: string;
    image?: string;
    type?: CharacterPlannerStep;
    grants?: (GrantableEffect | Characteristic | ActionEffect | Proficiency)[];
    choices?: ICharacterChoice[];
}
