export enum CharacterEvents {
    SET_CLASS,
    SET_RACE,
    SET_BACKGROUND,
    SET_ABILITY_SCORES,
    LEVEL_UP,
    MULTICLASS,
    CHOOSE_SUBRACE = 'CHOOSE_SUBRACE',
    CHOOSE_SUBCLASS = 'CHOOSE_SUBCLASS',
}

export interface ICharacterFeatureCustomizationOption {
    name: string;
    description?: string;
    choices?: ICharacterFeatureCustomizationOption[][];
    image?: string;
    choiceType?: CharacterEvents;
}
