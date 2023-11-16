"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.damageTypeColor = exports.DamageType = void 0;
var DamageType;
(function (DamageType) {
    DamageType[DamageType["NONE"] = 0] = "NONE";
    DamageType[DamageType["Slashing"] = 1] = "Slashing";
    DamageType[DamageType["Piercing"] = 2] = "Piercing";
    DamageType[DamageType["Bludgeoning"] = 3] = "Bludgeoning";
    DamageType[DamageType["Fire"] = 4] = "Fire";
    DamageType[DamageType["Cold"] = 5] = "Cold";
    DamageType[DamageType["Lightning"] = 6] = "Lightning";
    DamageType[DamageType["Thunder"] = 7] = "Thunder";
    DamageType[DamageType["Acid"] = 8] = "Acid";
    DamageType[DamageType["Poison"] = 9] = "Poison";
    DamageType[DamageType["Radiant"] = 10] = "Radiant";
    DamageType[DamageType["Necrotic"] = 11] = "Necrotic";
    DamageType[DamageType["Force"] = 12] = "Force";
    DamageType[DamageType["Psychic"] = 13] = "Psychic";
    // Special Types
    DamageType[DamageType["Healing"] = 14] = "Healing";
    DamageType[DamageType["Physical"] = 15] = "Physical";
})(DamageType || (exports.DamageType = DamageType = {}));
exports.damageTypeColor = {
    [DamageType.NONE]: '#fff',
    [DamageType.Slashing]: '#8c8c8c',
    [DamageType.Piercing]: '#8c8c8c',
    [DamageType.Bludgeoning]: '#8c8c8c',
    [DamageType.Physical]: '#8c8c8c',
    [DamageType.Fire]: '#ee5500',
    [DamageType.Cold]: '#3399cc',
    [DamageType.Lightning]: '#3366cc',
    [DamageType.Thunder]: '#8844bb',
    [DamageType.Acid]: '#80b000',
    [DamageType.Poison]: '#44bb00',
    [DamageType.Radiant]: '#ccaa00',
    [DamageType.Necrotic]: '#40b050',
    [DamageType.Force]: '#cc3333',
    [DamageType.Psychic]: '#cc77aa',
    [DamageType.Healing]: '#30bbbb',
};
