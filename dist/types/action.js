"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionDamageSaveEffect = exports.ActionSchool = exports.ActionResourceFromString = exports.ActionResource = exports.ActionCostBehavior = exports.ActionRangeType = exports.ActionAreaCategory = exports.ActionRechargeFrequency = exports.ActionAreaShape = exports.ActionAreaOfEffectType = void 0;
var ActionAreaOfEffectType;
(function (ActionAreaOfEffectType) {
    ActionAreaOfEffectType[ActionAreaOfEffectType["NONE"] = 0] = "NONE";
    ActionAreaOfEffectType[ActionAreaOfEffectType["radius"] = 1] = "radius";
    ActionAreaOfEffectType[ActionAreaOfEffectType["cone"] = 2] = "cone";
    ActionAreaOfEffectType[ActionAreaOfEffectType["cube"] = 3] = "cube";
    ActionAreaOfEffectType[ActionAreaOfEffectType["line"] = 4] = "line";
    ActionAreaOfEffectType[ActionAreaOfEffectType["sphere"] = 5] = "sphere";
})(ActionAreaOfEffectType || (exports.ActionAreaOfEffectType = ActionAreaOfEffectType = {}));
var ActionAreaShape;
(function (ActionAreaShape) {
    ActionAreaShape[ActionAreaShape["NONE"] = 0] = "NONE";
    ActionAreaShape[ActionAreaShape["Radius"] = 1] = "Radius";
    ActionAreaShape[ActionAreaShape["Cone"] = 2] = "Cone";
    ActionAreaShape[ActionAreaShape["Cube"] = 3] = "Cube";
    ActionAreaShape[ActionAreaShape["Line"] = 4] = "Line";
})(ActionAreaShape || (exports.ActionAreaShape = ActionAreaShape = {}));
var ActionRechargeFrequency;
(function (ActionRechargeFrequency) {
    ActionRechargeFrequency[ActionRechargeFrequency["NONE"] = 0] = "NONE";
    ActionRechargeFrequency[ActionRechargeFrequency["Until Long Rest"] = 1] = "Until Long Rest";
    ActionRechargeFrequency[ActionRechargeFrequency["Long Rest"] = 1] = "Long Rest";
    ActionRechargeFrequency[ActionRechargeFrequency["Short Rest"] = 2] = "Short Rest";
    ActionRechargeFrequency[ActionRechargeFrequency["Per Battle"] = 3] = "Per Battle";
    ActionRechargeFrequency[ActionRechargeFrequency["Per Combat"] = 3] = "Per Combat";
    ActionRechargeFrequency[ActionRechargeFrequency["Per Turn"] = 4] = "Per Turn";
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
    ActionRangeType[ActionRangeType["weapon"] = 4] = "weapon";
})(ActionRangeType || (exports.ActionRangeType = ActionRangeType = {}));
var ActionCostBehavior;
(function (ActionCostBehavior) {
    ActionCostBehavior[ActionCostBehavior["NONE"] = 0] = "NONE";
    ActionCostBehavior[ActionCostBehavior["onUse"] = 1] = "onUse";
    ActionCostBehavior[ActionCostBehavior["onHit"] = 2] = "onHit";
})(ActionCostBehavior || (exports.ActionCostBehavior = ActionCostBehavior = {}));
var ActionResource;
(function (ActionResource) {
    ActionResource[ActionResource["NONE"] = 0] = "NONE";
    ActionResource[ActionResource["action"] = 1] = "action";
    ActionResource[ActionResource["bonus"] = 2] = "bonus";
    ActionResource[ActionResource["reaction"] = 3] = "reaction";
    ActionResource[ActionResource["movement"] = 4] = "movement";
    ActionResource[ActionResource["movementHalf"] = 5] = "movementHalf";
    ActionResource[ActionResource["arcaneRecovery"] = 6] = "arcaneRecovery";
    ActionResource[ActionResource["bardicInspiration"] = 7] = "bardicInspiration";
    ActionResource[ActionResource["channelDivinity"] = 8] = "channelDivinity";
    ActionResource[ActionResource["channelOath"] = 9] = "channelOath";
    ActionResource[ActionResource["fungalInfestation"] = 10] = "fungalInfestation";
    ActionResource[ActionResource["ki"] = 11] = "ki";
    ActionResource[ActionResource["spellSlot1"] = 12] = "spellSlot1";
    ActionResource[ActionResource["spellSlot2"] = 13] = "spellSlot2";
    ActionResource[ActionResource["spellSlot3"] = 14] = "spellSlot3";
    ActionResource[ActionResource["spellSlot4"] = 15] = "spellSlot4";
    ActionResource[ActionResource["spellSlot5"] = 16] = "spellSlot5";
    ActionResource[ActionResource["spellSlot6"] = 17] = "spellSlot6";
    ActionResource[ActionResource["layOnHands"] = 18] = "layOnHands";
    ActionResource[ActionResource["naturalRecovery"] = 19] = "naturalRecovery";
    ActionResource[ActionResource["rage"] = 20] = "rage";
    ActionResource[ActionResource["sorceryPoints"] = 21] = "sorceryPoints";
    ActionResource[ActionResource["superiorityDice"] = 22] = "superiorityDice";
    ActionResource[ActionResource["warPriest"] = 23] = "warPriest";
    ActionResource[ActionResource["wildShape"] = 24] = "wildShape";
    ActionResource[ActionResource["tidesOfChaos"] = 25] = "tidesOfChaos";
    ActionResource[ActionResource["luckPoints"] = 26] = "luckPoints";
    // unused stuff to suppress warnings
    ActionResource[ActionResource["eyestalkAction"] = 27] = "eyestalkAction";
})(ActionResource || (exports.ActionResource = ActionResource = {}));
// https://bg3.wiki/wiki/Template:Resource#Quick_Reference
const ActionResourceCostNames = {
    [ActionResource.NONE]: [],
    [ActionResource.action]: ['action'],
    [ActionResource.bonus]: ['bonus'],
    [ActionResource.reaction]: ['reaction'],
    [ActionResource.movement]: ['movement'],
    [ActionResource.movementHalf]: ['half movement'],
    [ActionResource.arcaneRecovery]: ['ar', 'arcrec', 'arcane recovery'],
    [ActionResource.bardicInspiration]: ['bi', 'bardin', 'bardic inspiration'],
    [ActionResource.channelDivinity]: ['cd', 'chadiv', 'channel divinity'],
    [ActionResource.channelOath]: ['co', 'chaoat', 'channel oath'],
    [ActionResource.fungalInfestation]: ['fi', 'fnginf'],
    [ActionResource.ki]: ['ki'],
    [ActionResource.spellSlot1]: ['l1', 's1', 'spell1', 'level1'],
    [ActionResource.spellSlot2]: ['l2', 's2', 'spell2', 'level2'],
    [ActionResource.spellSlot3]: ['l3', 's3', 'spell3', 'level3'],
    [ActionResource.spellSlot4]: ['l4', 's4', 'spell4', 'level4'],
    [ActionResource.spellSlot5]: ['l5', 's5', 'spell5', 'level5'],
    [ActionResource.spellSlot6]: ['l6', 's6', 'spell6', 'level6'],
    [ActionResource.layOnHands]: ['lh', 'layonh', 'lay on hands'],
    [ActionResource.naturalRecovery]: ['nr', 'natrec', 'natural recovery'],
    [ActionResource.rage]: ['rg', 'rage'],
    [ActionResource.sorceryPoints]: ['sp', 'srcpnt', 'sorcery'],
    [ActionResource.superiorityDice]: ['sd', 'supdie', 'superiority die'],
    [ActionResource.warPriest]: ['wp', 'warpri', 'war priest'],
    [ActionResource.wildShape]: ['ws', 'wldshp', 'wild shape'],
    [ActionResource.tidesOfChaos]: ['toc', 'tides of chaos'],
    [ActionResource.luckPoints]: ['lp', 'lukpnt', 'luck point'],
    // unused stuff to suppress warnings
    [ActionResource.eyestalkAction]: ['eyestalkaction'],
};
exports.ActionResourceFromString = {};
Object.entries(ActionResourceCostNames).forEach(([resource, aliases]) => {
    aliases.forEach((alias) => {
        exports.ActionResourceFromString[alias] = parseInt(resource, 10);
    });
});
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
