import { AbilityScore } from './ability';
import { DamageType } from './damage';

export enum ActionAreaOfEffectType {
    NONE,
    radius,
    cone,
    cube,
    line,
}

export enum ActionAreaShape {
    NONE,
    Radius,
    Cone,
    Cube,
}

export enum ActionRechargeFrequency {
    NONE,
    LongRest,
    ShortRest,
    PerCombat,
}

export enum ActionAreaCategory {
    NONE,
    cloud,
    surface,
    area,
}

export enum ActionRangeType {
    NONE,
    ranged,
    melee,
    self,
}

export interface IActionBase {
    name: string;

    damage?: string; // FIXME, these aren't parsed properly for Action
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
    notes?: string;
    recharge?: ActionRechargeFrequency;
    cost?: ActionResource;
}

export enum ActionResource {
    NONE,
    action,
    bonus,
    both,
    reaction,
    freeaction,
    arcrec,
    barins,
    chadiv,
    chaoat,
    fnginf,
    layonh,
    natrec,
    rage,
    supdie,
    toc,
    warpri,
    wldshp,
    ki,
}

export interface IAction extends IActionBase {
    condition2?: string;
    condition2Duration?: number;
    condition2Save?: AbilityScore;
}

export interface ISpell extends IActionBase {
    classes: string[];
    // races: string[];
    noSpellSlot: boolean;
    damageSave?: AbilityScore;
    damageSaveEffect?: ActionDamageSaveEffect;
    damagePer?: string;
    higherLevels?: string;
    variants?: ISpell[];
    isVariant: boolean;
}

export enum ActionSchool {
    NONE,
    Abjuration,
    Conjuration,
    Divination,
    Enchantment,
    Evocation,
    Illusion,
    Necromancy,
    Transmutation,
    'Class Action',
}

export enum ActionDamageSaveEffect {
    half,
    negate,
}
