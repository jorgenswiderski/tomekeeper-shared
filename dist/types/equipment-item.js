"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponRange = exports.WeaponHandedness = exports.WeaponRangeType = exports.WeaponCategory = exports.ItemRarity = exports.EquipmentItemProficiency = exports.equipmentSlotTypes = exports.EquipmentSlot = exports.EquipmentItemType = void 0;
var EquipmentItemType;
(function (EquipmentItemType) {
    EquipmentItemType[EquipmentItemType["NONE"] = 0] = "NONE";
    EquipmentItemType[EquipmentItemType["Amulets"] = 1] = "Amulets";
    EquipmentItemType[EquipmentItemType["Boots"] = 2] = "Boots";
    EquipmentItemType[EquipmentItemType["Cloaks"] = 3] = "Cloaks";
    EquipmentItemType[EquipmentItemType["Clothing"] = 4] = "Clothing";
    EquipmentItemType[EquipmentItemType["Gloves"] = 5] = "Gloves";
    EquipmentItemType[EquipmentItemType["Heavy Armour"] = 6] = "Heavy Armour";
    EquipmentItemType[EquipmentItemType["Helmets"] = 7] = "Helmets";
    EquipmentItemType[EquipmentItemType["Light Armour"] = 8] = "Light Armour";
    EquipmentItemType[EquipmentItemType["Medium Armour"] = 9] = "Medium Armour";
    EquipmentItemType[EquipmentItemType["Rings"] = 10] = "Rings";
    EquipmentItemType[EquipmentItemType["Shields"] = 11] = "Shields";
    EquipmentItemType[EquipmentItemType["Battleaxes"] = 12] = "Battleaxes";
    EquipmentItemType[EquipmentItemType["Clubs"] = 13] = "Clubs";
    EquipmentItemType[EquipmentItemType["Daggers"] = 14] = "Daggers";
    EquipmentItemType[EquipmentItemType["Darts"] = 15] = "Darts";
    EquipmentItemType[EquipmentItemType["Flails"] = 16] = "Flails";
    EquipmentItemType[EquipmentItemType["Glaives"] = 17] = "Glaives";
    EquipmentItemType[EquipmentItemType["Greataxes"] = 18] = "Greataxes";
    EquipmentItemType[EquipmentItemType["Greatclubs"] = 19] = "Greatclubs";
    EquipmentItemType[EquipmentItemType["Greatswords"] = 20] = "Greatswords";
    EquipmentItemType[EquipmentItemType["Halberds"] = 21] = "Halberds";
    EquipmentItemType[EquipmentItemType["Handaxes"] = 22] = "Handaxes";
    EquipmentItemType[EquipmentItemType["Hand Crossbows"] = 23] = "Hand Crossbows";
    EquipmentItemType[EquipmentItemType["Heavy Crossbows"] = 24] = "Heavy Crossbows";
    EquipmentItemType[EquipmentItemType["Javelins"] = 25] = "Javelins";
    EquipmentItemType[EquipmentItemType["Light Crossbows"] = 26] = "Light Crossbows";
    EquipmentItemType[EquipmentItemType["Light Hammers"] = 27] = "Light Hammers";
    EquipmentItemType[EquipmentItemType["Longbows"] = 28] = "Longbows";
    EquipmentItemType[EquipmentItemType["Longswords"] = 29] = "Longswords";
    EquipmentItemType[EquipmentItemType["Maces"] = 30] = "Maces";
    EquipmentItemType[EquipmentItemType["Mauls"] = 31] = "Mauls";
    EquipmentItemType[EquipmentItemType["Morningstars"] = 32] = "Morningstars";
    EquipmentItemType[EquipmentItemType["Pikes"] = 33] = "Pikes";
    EquipmentItemType[EquipmentItemType["Quarterstaves"] = 34] = "Quarterstaves";
    EquipmentItemType[EquipmentItemType["Rapiers"] = 35] = "Rapiers";
    EquipmentItemType[EquipmentItemType["Scimitars"] = 36] = "Scimitars";
    EquipmentItemType[EquipmentItemType["Shortbows"] = 37] = "Shortbows";
    EquipmentItemType[EquipmentItemType["Shortswords"] = 38] = "Shortswords";
    EquipmentItemType[EquipmentItemType["Sickles"] = 39] = "Sickles";
    EquipmentItemType[EquipmentItemType["Slings"] = 40] = "Slings";
    EquipmentItemType[EquipmentItemType["Spears"] = 41] = "Spears";
    EquipmentItemType[EquipmentItemType["Tridents"] = 42] = "Tridents";
    EquipmentItemType[EquipmentItemType["Warhammers"] = 43] = "Warhammers";
    EquipmentItemType[EquipmentItemType["War Picks"] = 44] = "War Picks";
})(EquipmentItemType || (exports.EquipmentItemType = EquipmentItemType = {}));
var EquipmentSlot;
(function (EquipmentSlot) {
    EquipmentSlot[EquipmentSlot["Head"] = 0] = "Head";
    EquipmentSlot[EquipmentSlot["Body"] = 1] = "Body";
    EquipmentSlot[EquipmentSlot["Hands"] = 2] = "Hands";
    EquipmentSlot[EquipmentSlot["Feet"] = 3] = "Feet";
    EquipmentSlot[EquipmentSlot["Back"] = 4] = "Back";
    EquipmentSlot[EquipmentSlot["Amulet"] = 5] = "Amulet";
    EquipmentSlot[EquipmentSlot["Ring1"] = 6] = "Ring1";
    EquipmentSlot[EquipmentSlot["Ring2"] = 7] = "Ring2";
    EquipmentSlot[EquipmentSlot["MeleeMainhand"] = 8] = "MeleeMainhand";
    EquipmentSlot[EquipmentSlot["MeleeOffhand"] = 9] = "MeleeOffhand";
    EquipmentSlot[EquipmentSlot["RangedMainhand"] = 10] = "RangedMainhand";
    EquipmentSlot[EquipmentSlot["RangedOffhand"] = 11] = "RangedOffhand";
})(EquipmentSlot || (exports.EquipmentSlot = EquipmentSlot = {}));
exports.equipmentSlotTypes = {
    [EquipmentSlot.Head]: [EquipmentItemType.Helmets],
    [EquipmentSlot.Body]: [
        EquipmentItemType.Clothing,
        EquipmentItemType['Light Armour'],
        EquipmentItemType['Medium Armour'],
        EquipmentItemType['Heavy Armour'],
    ],
    [EquipmentSlot.Hands]: [EquipmentItemType.Gloves],
    [EquipmentSlot.MeleeMainhand]: [
        EquipmentItemType.Battleaxes,
        EquipmentItemType.Clubs,
        EquipmentItemType.Daggers,
        // EquipmentItemType.Darts,
        EquipmentItemType.Flails,
        EquipmentItemType.Glaives,
        EquipmentItemType.Greataxes,
        EquipmentItemType.Greatclubs,
        EquipmentItemType.Greatswords,
        EquipmentItemType.Halberds,
        EquipmentItemType.Handaxes,
        EquipmentItemType.Javelins,
        EquipmentItemType.Maces,
        EquipmentItemType.Mauls,
        EquipmentItemType.Morningstars,
        EquipmentItemType.Pikes,
        EquipmentItemType.Quarterstaves,
        EquipmentItemType.Rapiers,
        EquipmentItemType.Scimitars,
        EquipmentItemType.Shortswords,
        EquipmentItemType.Sickles,
        EquipmentItemType.Spears,
        EquipmentItemType.Tridents,
        EquipmentItemType.Warhammers,
        EquipmentItemType['War Picks'],
    ],
    [EquipmentSlot.MeleeOffhand]: [
        EquipmentItemType.Shields,
        EquipmentItemType.Battleaxes,
        EquipmentItemType.Clubs,
        EquipmentItemType.Daggers,
        // EquipmentItemType.Darts,
        EquipmentItemType.Flails,
        EquipmentItemType.Glaives,
        EquipmentItemType.Greataxes,
        EquipmentItemType.Greatclubs,
        EquipmentItemType.Greatswords,
        EquipmentItemType.Halberds,
        EquipmentItemType.Handaxes,
        EquipmentItemType.Javelins,
        EquipmentItemType.Maces,
        EquipmentItemType.Mauls,
        EquipmentItemType.Morningstars,
        EquipmentItemType.Pikes,
        EquipmentItemType.Quarterstaves,
        EquipmentItemType.Rapiers,
        EquipmentItemType.Scimitars,
        EquipmentItemType.Shortswords,
        EquipmentItemType.Sickles,
        EquipmentItemType.Spears,
        EquipmentItemType.Tridents,
        EquipmentItemType.Warhammers,
        EquipmentItemType['War Picks'],
    ],
    [EquipmentSlot.RangedMainhand]: [
        EquipmentItemType['Light Crossbows'],
        EquipmentItemType['Hand Crossbows'],
        EquipmentItemType['Heavy Crossbows'],
        EquipmentItemType.Longbows,
        EquipmentItemType.Shortbows,
        // EquipmentItemType.Slings,
    ],
    [EquipmentSlot.RangedOffhand]: [EquipmentItemType['Hand Crossbows']],
    [EquipmentSlot.Back]: [EquipmentItemType.Cloaks],
    [EquipmentSlot.Feet]: [EquipmentItemType.Boots],
    [EquipmentSlot.Amulet]: [EquipmentItemType.Amulets],
    [EquipmentSlot.Ring1]: [EquipmentItemType.Rings],
    [EquipmentSlot.Ring2]: [EquipmentItemType.Rings],
};
var EquipmentItemProficiency;
(function (EquipmentItemProficiency) {
    EquipmentItemProficiency[EquipmentItemProficiency["NONE"] = 0] = "NONE";
    EquipmentItemProficiency[EquipmentItemProficiency["Light Armour"] = 1] = "Light Armour";
    EquipmentItemProficiency[EquipmentItemProficiency["Medium Armour"] = 2] = "Medium Armour";
    EquipmentItemProficiency[EquipmentItemProficiency["Heavy Armour"] = 3] = "Heavy Armour";
    EquipmentItemProficiency[EquipmentItemProficiency["Shields"] = 4] = "Shields";
})(EquipmentItemProficiency || (exports.EquipmentItemProficiency = EquipmentItemProficiency = {}));
var ItemRarity;
(function (ItemRarity) {
    ItemRarity[ItemRarity["NONE"] = 0] = "NONE";
    ItemRarity[ItemRarity["common"] = 1] = "common";
    ItemRarity[ItemRarity["uncommon"] = 2] = "uncommon";
    ItemRarity[ItemRarity["rare"] = 3] = "rare";
    ItemRarity[ItemRarity["very rare"] = 4] = "very rare";
    ItemRarity[ItemRarity["legendary"] = 5] = "legendary";
    ItemRarity[ItemRarity["story"] = 6] = "story";
})(ItemRarity || (exports.ItemRarity = ItemRarity = {}));
var WeaponCategory;
(function (WeaponCategory) {
    WeaponCategory[WeaponCategory["NONE"] = 0] = "NONE";
    WeaponCategory[WeaponCategory["martial"] = 1] = "martial";
    WeaponCategory[WeaponCategory["Martial"] = 1] = "Martial";
    WeaponCategory[WeaponCategory["simple"] = 2] = "simple";
    WeaponCategory[WeaponCategory["Simple"] = 2] = "Simple";
})(WeaponCategory || (exports.WeaponCategory = WeaponCategory = {}));
var WeaponRangeType;
(function (WeaponRangeType) {
    WeaponRangeType[WeaponRangeType["NONE"] = 0] = "NONE";
    WeaponRangeType[WeaponRangeType["melee"] = 1] = "melee";
    WeaponRangeType[WeaponRangeType["ranged"] = 2] = "ranged";
})(WeaponRangeType || (exports.WeaponRangeType = WeaponRangeType = {}));
var WeaponHandedness;
(function (WeaponHandedness) {
    WeaponHandedness[WeaponHandedness["NONE"] = 0] = "NONE";
    WeaponHandedness[WeaponHandedness["one-handed"] = 1] = "one-handed";
    WeaponHandedness[WeaponHandedness["versatile"] = 2] = "versatile";
    WeaponHandedness[WeaponHandedness["two-handed"] = 3] = "two-handed";
})(WeaponHandedness || (exports.WeaponHandedness = WeaponHandedness = {}));
var WeaponRange;
(function (WeaponRange) {
    WeaponRange[WeaponRange["melee"] = 0] = "melee";
    WeaponRange[WeaponRange["normal"] = 1] = "normal";
    WeaponRange[WeaponRange["short"] = 2] = "short";
    WeaponRange[WeaponRange["special"] = 3] = "special";
})(WeaponRange || (exports.WeaponRange = WeaponRange = {}));
