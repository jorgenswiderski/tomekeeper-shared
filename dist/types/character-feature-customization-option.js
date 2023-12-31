"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterPlannerStep = void 0;
// explicitly set the values, otherwise removing a step could break all the saved builds
var CharacterPlannerStep;
(function (CharacterPlannerStep) {
    CharacterPlannerStep[CharacterPlannerStep["NONE"] = 0] = "NONE";
    CharacterPlannerStep[CharacterPlannerStep["PRIMARY_CLASS"] = 1] = "PRIMARY_CLASS";
    CharacterPlannerStep[CharacterPlannerStep["SET_RACE"] = 2] = "SET_RACE";
    CharacterPlannerStep[CharacterPlannerStep["SET_BACKGROUND"] = 3] = "SET_BACKGROUND";
    CharacterPlannerStep[CharacterPlannerStep["SET_ABILITY_SCORES"] = 4] = "SET_ABILITY_SCORES";
    CharacterPlannerStep[CharacterPlannerStep["LEVEL_UP"] = 5] = "LEVEL_UP";
    CharacterPlannerStep[CharacterPlannerStep["MULTICLASS_PROXY"] = 6] = "MULTICLASS_PROXY";
    CharacterPlannerStep[CharacterPlannerStep["SECONDARY_CLASS"] = 7] = "SECONDARY_CLASS";
    CharacterPlannerStep[CharacterPlannerStep["CHOOSE_SUBRACE"] = 8] = "CHOOSE_SUBRACE";
    CharacterPlannerStep[CharacterPlannerStep["CHOOSE_SUBCLASS"] = 9] = "CHOOSE_SUBCLASS";
    CharacterPlannerStep[CharacterPlannerStep["SUBCLASS_FEATURE"] = 10] = "SUBCLASS_FEATURE";
    CharacterPlannerStep[CharacterPlannerStep["FEAT"] = 11] = "FEAT";
    CharacterPlannerStep[CharacterPlannerStep["FEAT_SUBCHOICE"] = 12] = "FEAT_SUBCHOICE";
    CharacterPlannerStep[CharacterPlannerStep["FEAT_ABILITY_SCORES"] = 13] = "FEAT_ABILITY_SCORES";
    CharacterPlannerStep[CharacterPlannerStep["LEARN_CANTRIPS"] = 14] = "LEARN_CANTRIPS";
    CharacterPlannerStep[CharacterPlannerStep["LEARN_SPELLS"] = 15] = "LEARN_SPELLS";
    CharacterPlannerStep[CharacterPlannerStep["REMOVE_LEVEL"] = 16] = "REMOVE_LEVEL";
    CharacterPlannerStep[CharacterPlannerStep["MANAGE_LEVELS"] = 17] = "MANAGE_LEVELS";
    CharacterPlannerStep[CharacterPlannerStep["REVISE_LEVEL"] = 18] = "REVISE_LEVEL";
    // STOP_LEVEL_MANAGEMENT = 19,
    CharacterPlannerStep[CharacterPlannerStep["CHANGE_PRIMARY_CLASS"] = 20] = "CHANGE_PRIMARY_CLASS";
    CharacterPlannerStep[CharacterPlannerStep["EQUIP_ITEM"] = 21] = "EQUIP_ITEM";
    CharacterPlannerStep[CharacterPlannerStep["CLASS_FEATURE"] = 22] = "CLASS_FEATURE";
    CharacterPlannerStep[CharacterPlannerStep["CLASS_FEATURE_SUBCHOICE"] = 23] = "CLASS_FEATURE_SUBCHOICE";
    CharacterPlannerStep[CharacterPlannerStep["CLASS_FEATURE_LEARN_SPELL"] = 24] = "CLASS_FEATURE_LEARN_SPELL";
    CharacterPlannerStep[CharacterPlannerStep["WARLOCK_PACT_BOON"] = 25] = "WARLOCK_PACT_BOON";
    CharacterPlannerStep[CharacterPlannerStep["WARLOCK_DEEPENED_PACT"] = 26] = "WARLOCK_DEEPENED_PACT";
})(CharacterPlannerStep || (exports.CharacterPlannerStep = CharacterPlannerStep = {}));
