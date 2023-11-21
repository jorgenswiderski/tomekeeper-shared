import { IAction, ISpell } from '../../types/action';
import { ICharacteristic } from '../../types/grantable-effect';
import { CompressableRecord } from '../compressable-record/types';
import { StaticallyReferenceable } from './types';
interface SpellStub extends CompressableRecord {
}
export type SpellStubConstructor = new (action: ISpell, choiceId: string) => SpellStub;
interface ActionStub extends CompressableRecord {
}
export type ActionStubConstructor = new (action: IAction, choiceId: string) => ActionStub;
interface SpellEffectStub extends StaticallyReferenceable {
}
export type SpellEffectStubConstructor = new (action: ISpell) => SpellEffectStub;
interface ActionEffectStub extends StaticallyReferenceable {
}
export type ActionEffectStubConstructor = new (action: IAction) => ActionEffectStub;
interface CharacteristicStub extends StaticallyReferenceable {
}
export type CharacteristicStubConstructor = new (characteristic: ICharacteristic) => CharacteristicStub;
export {};
