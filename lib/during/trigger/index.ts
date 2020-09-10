import { Transform } from '../../class/transform';
import { TriggerPuller } from '../../common/trigger';
import { AbilityDuringTrigger, AbilityThreshold } from '../../types';
import { ABILITY_DURING_TRIGGER_TRANSFORM } from './transform';

export class DuringTrigger extends Transform {
  triggerPuller?: TriggerPuller;
  threshold?: AbilityThreshold;
  triggerLimit?: number;

  constructor(data: AbilityDuringTrigger) {
    super(data.type, ABILITY_DURING_TRIGGER_TRANSFORM);
    if (data.triggerPuller) {
      this.triggerPuller = new TriggerPuller(data.triggerPuller);
    }
    this.threshold = data.threshold;
    this.triggerLimit = data.triggerLimit;
  }

  computeThreshold(level = 5): number | undefined {
    return this.compute(this.threshold, level);
  }
}
