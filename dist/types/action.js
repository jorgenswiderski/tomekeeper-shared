"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionDamageSaveEffect = exports.ActionSchool = exports.ActionResource = exports.ActionRangeType = exports.ActionAreaCategory = exports.ActionRechargeFrequency = exports.ActionAreaShape = exports.ActionAreaOfEffectType = void 0;
var ActionAreaOfEffectType;
(function (ActionAreaOfEffectType) {
    ActionAreaOfEffectType[ActionAreaOfEffectType["NONE"] = 0] = "NONE";
    ActionAreaOfEffectType[ActionAreaOfEffectType["radius"] = 1] = "radius";
    ActionAreaOfEffectType[ActionAreaOfEffectType["cone"] = 2] = "cone";
    ActionAreaOfEffectType[ActionAreaOfEffectType["cube"] = 3] = "cube";
    ActionAreaOfEffectType[ActionAreaOfEffectType["line"] = 4] = "line";
})(ActionAreaOfEffectType || (exports.ActionAreaOfEffectType = ActionAreaOfEffectType = {}));
var ActionAreaShape;
(function (ActionAreaShape) {
    ActionAreaShape[ActionAreaShape["NONE"] = 0] = "NONE";
    ActionAreaShape[ActionAreaShape["Radius"] = 1] = "Radius";
    ActionAreaShape[ActionAreaShape["Cone"] = 2] = "Cone";
    ActionAreaShape[ActionAreaShape["Cube"] = 3] = "Cube";
})(ActionAreaShape || (exports.ActionAreaShape = ActionAreaShape = {}));
var ActionRechargeFrequency;
(function (ActionRechargeFrequency) {
    ActionRechargeFrequency[ActionRechargeFrequency["NONE"] = 0] = "NONE";
    ActionRechargeFrequency[ActionRechargeFrequency["LongRest"] = 1] = "LongRest";
    ActionRechargeFrequency[ActionRechargeFrequency["ShortRest"] = 2] = "ShortRest";
    ActionRechargeFrequency[ActionRechargeFrequency["PerCombat"] = 3] = "PerCombat";
})(ActionRechargeFrequency || (exports.ActionRechargeFrequency = ActionRechargeFrequency = {}));
var ActionAreaCategory;
(function (ActionAreaCategory) {
    ActionAreaCategory[ActionAreaCategory["NONE"] = 0] = "NONE";
    ActionAreaCategory[ActionAreaCategory["cloud"] = 1] = "cloud";
    ActionAreaCategory[ActionAreaCategory["surface"] = 2] = "surface";
    ActionAreaCategory[ActionAreaCategory["area"] = 3] = "area";
})(ActionAreaCategory || (exports.ActionAreaCategory = ActionAreaCategory = {}));
var ActionRangeType;
(function (ActionRangeType) {
    ActionRangeType[ActionRangeType["NONE"] = 0] = "NONE";
    ActionRangeType[ActionRangeType["ranged"] = 1] = "ranged";
    ActionRangeType[ActionRangeType["melee"] = 2] = "melee";
    ActionRangeType[ActionRangeType["self"] = 3] = "self";
})(ActionRangeType || (exports.ActionRangeType = ActionRangeType = {}));
var ActionResource;
(function (ActionResource) {
    ActionResource[ActionResource["NONE"] = 0] = "NONE";
    ActionResource[ActionResource["action"] = 1] = "action";
    ActionResource[ActionResource["bonus"] = 2] = "bonus";
    ActionResource[ActionResource["both"] = 3] = "both";
    ActionResource[ActionResource["reaction"] = 4] = "reaction";
    ActionResource[ActionResource["freeaction"] = 5] = "freeaction";
    ActionResource[ActionResource["arcrec"] = 6] = "arcrec";
    ActionResource[ActionResource["barins"] = 7] = "barins";
    ActionResource[ActionResource["chadiv"] = 8] = "chadiv";
    ActionResource[ActionResource["chaoat"] = 9] = "chaoat";
    ActionResource[ActionResource["fnginf"] = 10] = "fnginf";
    ActionResource[ActionResource["layonh"] = 11] = "layonh";
    ActionResource[ActionResource["natrec"] = 12] = "natrec";
    ActionResource[ActionResource["rage"] = 13] = "rage";
    ActionResource[ActionResource["supdie"] = 14] = "supdie";
    ActionResource[ActionResource["toc"] = 15] = "toc";
    ActionResource[ActionResource["warpri"] = 16] = "warpri";
    ActionResource[ActionResource["wldshp"] = 17] = "wldshp";
    ActionResource[ActionResource["ki"] = 18] = "ki";
})(ActionResource || (exports.ActionResource = ActionResource = {}));
var ActionSchool;
(function (ActionSchool) {
    ActionSchool[ActionSchool["NONE"] = 0] = "NONE";
    ActionSchool[ActionSchool["Abjuration"] = 1] = "Abjuration";
    ActionSchool[ActionSchool["Conjuration"] = 2] = "Conjuration";
    ActionSchool[ActionSchool["Divination"] = 3] = "Divination";
    ActionSchool[ActionSchool["Enchantment"] = 4] = "Enchantment";
    ActionSchool[ActionSchool["Evocation"] = 5] = "Evocation";
    ActionSchool[ActionSchool["Illusion"] = 6] = "Illusion";
    ActionSchool[ActionSchool["Necromancy"] = 7] = "Necromancy";
    ActionSchool[ActionSchool["Transmutation"] = 8] = "Transmutation";
    ActionSchool[ActionSchool["Class Action"] = 9] = "Class Action";
})(ActionSchool || (exports.ActionSchool = ActionSchool = {}));
var ActionDamageSaveEffect;
(function (ActionDamageSaveEffect) {
    ActionDamageSaveEffect[ActionDamageSaveEffect["half"] = 0] = "half";
    ActionDamageSaveEffect[ActionDamageSaveEffect["negate"] = 1] = "negate";
})(ActionDamageSaveEffect || (exports.ActionDamageSaveEffect = ActionDamageSaveEffect = {}));
