import { ContentMap } from '../common/content';
import { TriggerPuller } from '../common/trigger';
import { Precondition } from '../precondition';
import { AbilityInstantTrigger, AbilityPrecondition } from '../types';
import { InstantTrigger } from './trigger';
export declare class Instant {
    unisonable: boolean;
    triggerKind: InstantTrigger;
    precondition: Precondition;
    pullerKind?: TriggerPuller;
    content: ContentMap;
    constructor(param1?: boolean, param2?: AbilityPrecondition, param3?: AbilityInstantTrigger);
    match(param1: Instant): boolean;
    eqTriggerKind(param1: InstantTrigger): boolean;
    getPullerKind(trigger?: InstantTrigger): TriggerPuller | undefined;
    equalPullerKind(param1?: TriggerPuller): boolean;
    convertMasterValue(param1: InstantTrigger): InstantTrigger;
}
