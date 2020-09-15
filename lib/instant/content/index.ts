import { Transform } from '../../class/transform';
import { Target } from '../../common/target';
import { AbilityInstantContent, AbilityThreshold } from '../../types';
import { ABILITY_INSTANT_CONTENT_TRANSFORM } from './transform';

export class InstantContent extends Transform {
  target?: Target;
  strength?: AbilityThreshold;
  frame?: AbilityThreshold;
  flipLimit?: number;
  maxAccumulation?: number;
  characterGroups?: Array<string>;

  constructor(data: AbilityInstantContent) {
    super(data.type, ABILITY_INSTANT_CONTENT_TRANSFORM);
    if (data.target) {
      this.target = new Target(data.target);
    }
    this.strength = data.strength;
    this.frame = data.frame;
    this.flipLimit = data.flipLimit;
    this.maxAccumulation = data.maxAccumulation;
    this.characterGroups = data.characterGroups;
  }

  computeStrength(level = 5): number | undefined {
    return this.compute(this.strength, level);
  }

  computeFrame(level = 5): number | undefined {
    return this.compute(this.frame, level);
  }
}
