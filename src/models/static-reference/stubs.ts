import { IAction, ISpell } from '../../types/action';
import { IActionEffect } from '../../types/grantable-effect';
import { StaticallyReferenceable } from './types';

// For classes that are implemented both on the back and front end for static
// referencing, define the class interface as well as its constructor signature
// so we can have the typescript compiler enforce that the signature and
// interface of both implementations match.

interface SpellStub extends StaticallyReferenceable {}
export type SpellStubConstructor = new (action: ISpell) => SpellStub;

interface ActionStub extends StaticallyReferenceable {}
export type ActionStubConstructor = new (action: IAction) => ActionStub;

interface ActionEffectStub extends StaticallyReferenceable {}
export type ActionEffectStubConstructor = new (
    effect: IActionEffect,
) => ActionEffectStub;
