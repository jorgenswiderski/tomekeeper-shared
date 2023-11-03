import { AbilityScore } from './ability';
import { DamageType } from './damage';
export declare enum ActionAreaOfEffectType {
    NONE = 0,
    radius = 1,
    cone = 2,
    cube = 3,
    line = 4
}
export declare enum ActionAreaShape {
    NONE = 0,
    Radius = 1,
    Cone = 2,
    Cube = 3
}
export declare enum ActionRechargeFrequency {
    NONE = 0,
    LongRest = 1,
    ShortRest = 2,
    PerCombat = 3
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
    self = 3
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
    cost?: ActionResource;
}
export declare enum ActionResource {
    NONE = 0,
    action = 1,
    bonus = 2,
    both = 3,
    reaction = 4,
    freeaction = 5,
    arcrec = 6,
    barins = 7,
    chadiv = 8,
    chaoat = 9,
    fnginf = 10,
    layonh = 11,
    natrec = 12,
    rage = 13,
    supdie = 14,
    toc = 15,
    warpri = 16,
    wldshp = 17,
    ki = 18
}
export interface IAction extends IActionBase {
    condition2?: string;
    condition2Duration?: number;
    condition2Save?: AbilityScore;
}
export interface ISpell extends IActionBase {
    classes: string[];
    noSpellSlot: boolean;
    damageSave?: AbilityScore;
    damageSaveEffect?: ActionDamageSaveEffect;
    damagePer?: string;
    higherLevels?: string;
    variants?: ISpell[];
    isVariant: boolean;
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
