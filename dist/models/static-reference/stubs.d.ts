import { IAction, ISpell } from '../../types/action';
import { IActionEffect } from '../../types/grantable-effect';
import { CompressableRecord } from '../compressable-record/types';
import { StaticallyReferenceable } from './types';
interface SpellStub extends CompressableRecord {
}
export type SpellStubConstructor = new (action: ISpell, choiceId: string) => SpellStub;
interface ActionStub extends CompressableRecord {
}
export type ActionStubConstructor = new (action: IAction, choiceId: string) => ActionStub;
interface ActionEffectStub extends StaticallyReferenceable {
}
export type ActionEffectStubConstructor = new (effect: IActionEffect) => ActionEffectStub;
export {};
