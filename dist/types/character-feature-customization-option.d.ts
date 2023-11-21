import { StaticallyReferenceable } from '../models/static-reference/types';
import { IActionEffect, ICharacteristic, GrantableEffect, Proficiency } from './grantable-effect';
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
    STOP_LEVEL_MANAGEMENT = 19,
    CHANGE_PRIMARY_CLASS = 20,
    EQUIP_ITEM = 21,
    CLASS_FEATURE = 22,
    CLASS_FEATURE_SUBCHOICE = 23
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
}
export interface ICharacterOption extends ICharacterOptionBase {
    grants?: (GrantableEffect | ICharacteristic | IActionEffect | Proficiency)[];
    choices?: ICharacterChoice[];
}
export interface ICharacterOptionWithStubs extends ICharacterOptionBase {
    grants?: (GrantableEffect | ICharacteristic | IActionEffect | Proficiency | StaticallyReferenceable)[];
    choices?: ICharacterChoiceWithStubs[];
}
export {};
