import { Transform } from '../../class/transform';
import { TriggerPuller } from '../../common/trigger';
import { AbilityInstantTrigger, AbilityThreshold } from '../../types';
export declare class InstantTrigger extends Transform {
    triggerPuller?: TriggerPuller;
    threshold?: AbilityThreshold;
    triggerLimit?: number;
    characterGroups?: Array<string>;
    constructor(data: AbilityInstantTrigger);
    computeThreshold(level?: number): number | undefined;
}
