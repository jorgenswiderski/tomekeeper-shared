import { AbilityScore } from './ability';
import { DamageType } from './damage';
export declare enum ActionAreaOfEffectType {
    NONE = 0,
    radius = 1,
    cone = 2,
    cube = 3,
    line = 4,
    sphere = 5
}
export declare enum ActionAreaShape {
    NONE = 0,
    Radius = 1,
    Cone = 2,
    Cube = 3,
    Line = 4
}
export declare enum ActionRechargeFrequency {
    NONE = 0,
    'Until Long Rest' = 1,
    'Long Rest' = 1,
    'Short Rest' = 2,
    'Per Battle' = 3,
    'Per Combat' = 3,
    'Per Turn' = 4
}
export declare enum ActionAreaCategory {
    NONE = 0,
    cloud = 1,
    surface = 2,
    area = 3
}
export declare enum ActionRangeType {
    NONE = 0,
    ranged = 1,
    melee = 2,
    self = 3,
    weapon = 4
}
export interface ActionCost {
    resource: ActionResource;
    amount: number;
    behavior?: ActionCostBehavior;
}
export interface IActionBase {
    name: string;
    damage?: string;
    damageType?: DamageType;
    extraDamage?: string;
    extraDamageType?: DamageType;
    image: string;
    level: number;
    school: ActionSchool;
    summary: string;
    description: string;
    ritual: boolean;
    concentration: boolean;
    id: number;
    attackRoll?: boolean;
    range?: ActionRangeType;
    rangeM?: number;
    rangeFt?: number;
    aoe?: ActionAreaOfEffectType;
    aoeM?: number;
    aoeFt?: number;
    condition?: string;
    conditionDuration?: number;
    conditionSave?: AbilityScore;
    areaName?: string;
    areaCategory?: ActionAreaCategory;
    areaShape?: ActionAreaShape;
    areaRangeM?: number;
    areaRangeFt?: number;
    areaDuration?: number;
    areaTurnStartDamage?: string;
    areaTurnStartDamageType?: DamageType;
    areaTurnStartDamageSave?: AbilityScore;
    areaTurnStartDamageSaveEffect?: ActionDamageSaveEffect;
    areaTurnEndDamage?: string;
    areaTurnEndDamageType?: DamageType;
    areaTurnEndDamageSave?: AbilityScore;
    areaTurnEndDamageSaveEffect?: ActionDamageSaveEffect;
    recharge?: ActionRechargeFrequency;
    costs: ActionCost[];
}
export declare enum ActionCostBehavior {
    NONE = 0,
    onUse = 1,
    onHit = 2
}
export declare enum ActionResource {
    NONE = 0,
    action = 1,
    bonus = 2,
    reaction = 3,
    movement = 4,
    movementHalf = 5,
    arcaneRecovery = 6,
    bardicInspiration = 7,
    channelDivinity = 8,
    channelOath = 9,
    fungalInfestation = 10,
    ki = 11,
    spellSlot1 = 12,
    spellSlot2 = 13,
    spellSlot3 = 14,
    spellSlot4 = 15,
    spellSlot5 = 16,
    spellSlot6 = 17,
    layOnHands = 18,
    naturalRecovery = 19,
    rage = 20,
    sorceryPoints = 21,
    superiorityDice = 22,
    warPriest = 23,
    wildShape = 24,
    tidesOfChaos = 25,
    luckPoints = 26,
    eyestalkAction = 27
}
export declare const ActionResourceFromString: Record<string, ActionResource>;
export interface IAction extends IActionBase {
    condition2?: string;
    condition2Duration?: number;
    condition2Save?: AbilityScore;
}
export interface ISpell extends IActionBase {
    classes: string[];
    damageSave?: AbilityScore;
    damageSaveEffect?: ActionDamageSaveEffect;
    damagePer?: string;
    higherLevels?: string;
    variants?: ISpell[];
}
export declare enum ActionSchool {
    NONE = 0,
    Abjuration = 1,
    Conjuration = 2,
    Divination = 3,
    Enchantment = 4,
    Evocation = 5,
    Illusion = 6,
    Necromancy = 7,
    Transmutation = 8,
    'Class Action' = 9
}
export declare enum ActionDamageSaveEffect {
    half = 0,
    negate = 1
}
