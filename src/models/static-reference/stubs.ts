import { IAction, ISpell } from '../../types/action';
import { IActionEffect } from '../../types/grantable-effect';
import { CompressableRecord } from '../compressable-record/types';
import { StaticallyReferenceable } from './types';

// For classes that are implemented both on the back and front end for static
// referencing, define the class interface as well as its constructor signature
// so we can have the typescript compiler enforce that the signature and
// interface of both implementations match.

interface SpellStub extends CompressableRecord {}
export type SpellStubConstructor = new (
    action: ISpell,
    choiceId: string,
) => SpellStub;

interface ActionStub extends CompressableRecord {}
export type ActionStubConstructor = new (
    action: IAction,
    choiceId: string,
) => ActionStub;

interface ActionEffectStub extends StaticallyReferenceable {}
export type ActionEffectStubConstructor = new (
    effect: IActionEffect,
) => ActionEffectStub;
