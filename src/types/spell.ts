import { AbilityScore } from './ability';
import {
    ActionAreaCategory,
    ActionAreaOfEffectType,
    ActionAreaShape,
    ActionRangeType,
    ActionRechargeFrequency,
    ActionType,
} from './action';
import { DamageType } from './equipment-item';

export interface ISpell {
    name: string;
    image: string;
    level: number;
    school: SpellSchool;
    ritual: boolean;
    classes: string[];
    // races: string[];
    summary: string;
    description: string;
    actionType: ActionType;
    concentration: boolean;
    noSpellSlot: boolean;
    id: number;
    attackRoll?: boolean;
    damage?: string;
    damageType?: DamageType;
    extraDamage?: string;
    extraDamageType?: DamageType;
    damageSave?: AbilityScore;
    damageSaveEffect?: SpellDamageSaveEffect;
    damagePer?: string;
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
    areaTurnStartDamageSaveEffect?: SpellDamageSaveEffect;
    areaTurnEndDamage?: string;
    higherLevels?: string;
    variants?: string[];
    notes?: string;
    recharge?: ActionRechargeFrequency;
}

export enum SpellSchool {
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

export enum SpellDamageSaveEffect {
    half,
    negate,
}
