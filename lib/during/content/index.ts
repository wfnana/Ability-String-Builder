import { Transform } from '../../class/transform';
import { Target } from '../../common/target';
import { AbilityDuringContent, AbilityThreshold } from '../../types';
import { ABILITY_DURING_CONTENT_TRANSFORM } from './transform';

export class DuringContent extends Transform {
  target?: Target;
  strength?: AbilityThreshold;
  characterGroups?: Array<string>;

  constructor(data: AbilityDuringContent) {
    super(data.type, ABILITY_DURING_CONTENT_TRANSFORM);
    if (data.target) {
      this.target = new Target(data.target);
    }
    this.strength = data.strength;
    this.characterGroups = data.characterGroups;
  }

  computeStrength(level = 5): number | undefined {
    return this.compute(this.strength, level);
  }
}
