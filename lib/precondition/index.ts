import { Transform } from '../class/transform';
import { TriggerPuller } from '../common/trigger';
import { AbilityPrecondition, AbilityThreshold } from '../types';
import { ABILITY_PRECONDITION_TRANSFORM } from './transform';

export class Precondition extends Transform {
  triggerPuller?: TriggerPuller;
  threshold?: AbilityThreshold;
  characterGroups?: Array<string>;

  constructor(data: AbilityPrecondition) {
    super(data.type, ABILITY_PRECONDITION_TRANSFORM);
    if (data.triggerPuller) {
      this.triggerPuller = new TriggerPuller(data.triggerPuller);
    }
    this.threshold = data.threshold;
    this.characterGroups = data.characterGroups;
  }

  computeThreshold(level = 5): number | undefined {
    return this.compute(this.threshold, level);
  }
}
