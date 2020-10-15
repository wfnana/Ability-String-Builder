import { Transform } from '../../class/transform';
import { TriggerPuller } from '../../common/trigger';
import { AbilityInstantTrigger, AbilityThreshold } from '../../types';
import { ABILITY_INSTANT_TRIGGER_TRANSFORM } from './transform';

export class InstantTrigger extends Transform {
  triggerPuller?: TriggerPuller;
  threshold?: AbilityThreshold;
  triggerLimit?: number;
  characterGroups?: Array<string>;
  cooltime?: number;

  constructor(data: AbilityInstantTrigger) {
    super(data.type, ABILITY_INSTANT_TRIGGER_TRANSFORM);
    if (data.triggerPuller) {
      this.triggerPuller = new TriggerPuller(data.triggerPuller);
    }
    this.threshold = data.threshold;
    this.triggerLimit = data.triggerLimit;
    this.characterGroups = data.characterGroups;
    this.cooltime = data.cooltime;
  }

  computeThreshold(level = 5): number | undefined {
    return this.compute(this.threshold, level);
  }
}
