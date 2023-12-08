import { AbilityScore } from './ability';
import { DamageType } from './damage';

export enum ActionAreaOfEffectType {
    NONE,
    radius,
    cone,
    cube,
    line,
    sphere,
}

export enum ActionAreaShape {
    NONE,
    Radius,
    Cone,
    Cube,
    Line,
}

export enum ActionRechargeFrequency {
    NONE,
    'Until Long Rest' = 1, // some borked pages I can't be bothered to fix
    'Long Rest' = 1,
    'Short Rest' = 2,
    'Per Battle' = 3, // undocumented
    'Per Combat' = 3,
    'Per Turn' = 4,
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
    melee, // 3m
    self,
    weapon, // weapon range (may exceed 3m)
}

export interface ActionCost {
    resource: ActionResource;
    amount: number;
    behavior?: ActionCostBehavior;
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
    // notes?: string;
    recharge?: ActionRechargeFrequency;
    costs: ActionCost[];
}

export enum ActionCostBehavior {
    NONE,
    onUse,
    onHit,
}

export enum ActionResource {
    NONE,
    action,
    bonus,
    reaction,
    movement,
    movementHalf, // half cost movement
    arcaneRecovery,
    bardicInspiration,
    channelDivinity,
    channelOath,
    fungalInfestation,
    ki,
    spellSlot1,
    spellSlot2,
    spellSlot3,
    spellSlot4,
    spellSlot5,
    spellSlot6,
    layOnHands,
    naturalRecovery,
    rage,
    sorceryPoints,
    superiorityDice,
    warPriest,
    wildShape,
    tidesOfChaos,
    luckPoints,

    // unused stuff to suppress warnings
    eyestalkAction,
}

// https://bg3.wiki/wiki/Template:Resource#Quick_Reference
const ActionResourceCostNames: Record<ActionResource, string[]> = {
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

export const ActionResourceFromString: Record<string, ActionResource> = {};

Object.entries(ActionResourceCostNames).forEach(([resource, aliases]) => {
    aliases.forEach((alias) => {
        ActionResourceFromString[alias] = parseInt(resource, 10);
    });
});

export interface IAction extends IActionBase {
    condition2?: string;
    condition2Duration?: number;
    condition2Save?: AbilityScore;
}

export interface ISpell extends IActionBase {
    classes: string[];
    // races: string[];
    damageSave?: AbilityScore;
    damageSaveEffect?: ActionDamageSaveEffect;
    damagePer?: string;
    higherLevels?: string;
    variants?: ISpell[];
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
