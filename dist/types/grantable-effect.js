"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionEffectType = exports.CharacteristicType = exports.ProficiencyTypes = exports.GrantableEffectType = void 0;
var GrantableEffectType;
(function (GrantableEffectType) {
    GrantableEffectType[GrantableEffectType["NONE"] = 0] = "NONE";
    GrantableEffectType[GrantableEffectType["ACTION"] = 1] = "ACTION";
    GrantableEffectType[GrantableEffectType["CHARACTERISTIC"] = 2] = "CHARACTERISTIC";
    GrantableEffectType[GrantableEffectType["PROFICIENCY"] = 3] = "PROFICIENCY";
})(GrantableEffectType || (exports.GrantableEffectType = GrantableEffectType = {}));
var ProficiencyTypes;
(function (ProficiencyTypes) {
    ProficiencyTypes["SKILL_ACROBATICS"] = "ACROBATICS";
    ProficiencyTypes["SKILL_ANIMAL_HANDLING"] = "ANIMAL HANDLING";
    ProficiencyTypes["SKILL_ARCANA"] = "ARCANA";
    ProficiencyTypes["SKILL_ATHLETICS"] = "ATHLETICS";
    ProficiencyTypes["SKILL_DECEPTION"] = "DECEPTION";
    ProficiencyTypes["SKILL_HISTORY"] = "HISTORY";
    ProficiencyTypes["SKILL_INSIGHT"] = "INSIGHT";
    ProficiencyTypes["SKILL_INTIMIDATION"] = "INTIMIDATION";
    ProficiencyTypes["SKILL_MEDICINE"] = "MEDICINE";
    ProficiencyTypes["SKILL_PERFORMANCE"] = "PERFORMANCE";
    ProficiencyTypes["SKILL_PERSUASION"] = "PERSUASION";
    ProficiencyTypes["SKILL_RELIGION"] = "RELIGION";
    ProficiencyTypes["SKILL_SLEIGHT_OF_HAND"] = "SLEIGHT OF HAND";
    ProficiencyTypes["SKILL_STEALTH"] = "STEALTH";
    ProficiencyTypes["SKILL_SURVIVAL"] = "SURVIVAL";
})(ProficiencyTypes || (exports.ProficiencyTypes = ProficiencyTypes = {}));
var CharacteristicType;
(function (CharacteristicType) {
    CharacteristicType[CharacteristicType["EFFECT_NONE"] = 0] = "EFFECT_NONE";
    CharacteristicType[CharacteristicType["ABILITY_BASE"] = 1] = "ABILITY_BASE";
    CharacteristicType[CharacteristicType["ABILITY_RACIAL"] = 2] = "ABILITY_RACIAL";
    CharacteristicType[CharacteristicType["ABILITY_FEAT"] = 3] = "ABILITY_FEAT";
})(CharacteristicType || (exports.CharacteristicType = CharacteristicType = {}));
var ActionEffectType;
(function (ActionEffectType) {
    ActionEffectType[ActionEffectType["ACTION_NONE"] = 0] = "ACTION_NONE";
    ActionEffectType[ActionEffectType["CLASS_ACTION"] = 1] = "CLASS_ACTION";
    ActionEffectType[ActionEffectType["RACIAL_ACTION"] = 2] = "RACIAL_ACTION";
    ActionEffectType[ActionEffectType["SPELL_ACTION"] = 3] = "SPELL_ACTION";
})(ActionEffectType || (exports.ActionEffectType = ActionEffectType = {}));
