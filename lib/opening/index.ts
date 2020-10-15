import { Transform } from '../class/transform';
import { AbilityOpening, AbilityThreshold } from '../types';
import { ABILITY_OPENING_TRANSFORM } from './transform';

export class OpeningContent extends Transform {
  strength?: AbilityThreshold;

  constructor(data: AbilityOpening) {
    super(data.type, ABILITY_OPENING_TRANSFORM);
    this.strength = data.strength;
  }

  computeStrength(level = 5): number | undefined {
    return this.compute(this.strength, level, 1);
  }
}

export class Opening {
  unisonable: boolean;
  opening: OpeningContent;

  constructor(param1 = false, param2?: AbilityOpening) {
    this.unisonable = param1;
    this.opening = new OpeningContent(param2 as AbilityOpening);
  }
}
