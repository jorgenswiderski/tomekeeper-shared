import { StaticallyReferenceable } from '../models/static-reference/types';
import { IActionEffect, IPassive, GrantableEffect, Proficiency } from './grantable-effect';
export declare enum CharacterPlannerStep {
    NONE = 0,
    PRIMARY_CLASS = 1,
    SET_RACE = 2,
    SET_BACKGROUND = 3,
    SET_ABILITY_SCORES = 4,
    LEVEL_UP = 5,
    MULTICLASS_PROXY = 6,
    SECONDARY_CLASS = 7,
    CHOOSE_SUBRACE = 8,
    CHOOSE_SUBCLASS = 9,
    SUBCLASS_FEATURE = 10,
    FEAT = 11,
    FEAT_SUBCHOICE = 12,
    FEAT_ABILITY_SCORES = 13,
    LEARN_CANTRIPS = 14,
    LEARN_SPELLS = 15,
    REMOVE_LEVEL = 16,
    MANAGE_LEVELS = 17,
    REVISE_LEVEL = 18,
    CHANGE_PRIMARY_CLASS = 20,
    EQUIP_ITEM = 21,
    CLASS_FEATURE = 22,
    CLASS_FEATURE_SUBCHOICE = 23,
    CLASS_FEATURE_LEARN_SPELL = 24,
    WARLOCK_PACT_BOON = 25,
    WARLOCK_DEEPENED_PACT = 26
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
    forcedOptions?: ICharacterOption[];
};
interface ICharacterOptionBase {
    name: string;
    description?: string;
    image?: string;
    type?: CharacterPlannerStep;
    id?: number;
}
export interface ICharacterOption extends ICharacterOptionBase {
    grants?: (GrantableEffect | IPassive | IActionEffect | Proficiency)[];
    choices?: ICharacterChoice[];
}
export interface ICharacterOptionWithStubs extends ICharacterOptionBase {
    grants?: (GrantableEffect | IPassive | IActionEffect | Proficiency | StaticallyReferenceable)[];
    choices?: ICharacterChoiceWithStubs[];
}
export {};
