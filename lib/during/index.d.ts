import { ContentMap } from '../common/content';
import { TriggerPuller } from '../common/trigger';
import { InstantTrigger } from '../instant/trigger';
import { Precondition } from '../precondition';
import { AbilityDuringTrigger, AbilityPrecondition } from '../types';
import { DuringTrigger } from './trigger';
export declare class During {
    unisonable: boolean;
    triggerKind: DuringTrigger;
    precondition: Precondition;
    pullerKind?: TriggerPuller;
    content: ContentMap;
    constructor(param1?: boolean, param2?: AbilityPrecondition, param3?: AbilityDuringTrigger);
    match(param1: During): boolean;
    eqTriggerKind(param1: DuringTrigger): boolean;
    getPullerKind(trigger?: DuringTrigger): TriggerPuller | undefined;
    equalPullerKind(param1?: TriggerPuller): boolean;
    convertMasterValue(param1: InstantTrigger): InstantTrigger;
}
