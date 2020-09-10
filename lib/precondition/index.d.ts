import { Transform } from '../class/transform';
import { TriggerPuller } from '../common/trigger';
import { AbilityPrecondition, AbilityThreshold } from '../types';
export declare class Precondition extends Transform {
    triggerPuller?: TriggerPuller;
    threshold?: AbilityThreshold;
    characterGroups?: Array<string>;
    constructor(data: AbilityPrecondition);
    computeThreshold(level?: number): number | undefined;
}
