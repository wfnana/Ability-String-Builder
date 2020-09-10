import { Transform } from '../../class/transform';
import { TriggerPuller } from '../../common/trigger';
import { AbilityDuringTrigger, AbilityThreshold } from '../../types';
export declare class DuringTrigger extends Transform {
    triggerPuller?: TriggerPuller;
    threshold?: AbilityThreshold;
    triggerLimit?: number;
    constructor(data: AbilityDuringTrigger);
    computeThreshold(level?: number): number | undefined;
}
