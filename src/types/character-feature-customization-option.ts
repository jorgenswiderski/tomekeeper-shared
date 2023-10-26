import { StaticallyReferenceable } from '../models/static-reference/types';
import {
    IActionEffect,
    Characteristic,
    GrantableEffect,
    Proficiency,
} from './grantable-effect';

export enum CharacterPlannerStep {
    NONE,
    PRIMARY_CLASS,
    SET_RACE,
    SET_BACKGROUND,
    SET_ABILITY_SCORES,
    LEVEL_UP,
    MULTICLASS_PROXY,
    SECONDARY_CLASS,
    CHOOSE_SUBRACE,
    CHOOSE_SUBCLASS,
    SUBCLASS_FEATURE,
    FEAT,
    FEAT_SUBCHOICE,
    FEAT_ABILITY_SCORES,
    LEARN_CANTRIPS,
    LEARN_SPELLS,
    REMOVE_LEVEL,
    MANAGE_LEVELS,
    REVISE_LEVEL,
    STOP_LEVEL_MANAGEMENT,
    CHANGE_PRIMARY_CLASS,
    EQUIP_ITEM,
}

export type ICharacterChoiceWithStubs = {
    type: CharacterPlannerStep;
    options: ICharacterOptionWithStubs[];
    count?: number;
};

export type ICharacterChoice = {
    type: CharacterPlannerStep;
    options: ICharacterOption[];
    count?: number;
};

interface ICharacterOptionBase {
    name: string;
    description?: string;
    image?: string;
    type?: CharacterPlannerStep;
}

export interface ICharacterOption extends ICharacterOptionBase {
    grants?: (GrantableEffect | Characteristic | IActionEffect | Proficiency)[];
    choices?: ICharacterChoice[];
}

export interface ICharacterOptionWithStubs extends ICharacterOptionBase {
    grants?: (
        | GrantableEffect
        | Characteristic
        | IActionEffect
        | Proficiency
        | StaticallyReferenceable
    )[];
    choices?: ICharacterChoiceWithStubs[];
}
