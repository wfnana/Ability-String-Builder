import { Transform } from '../../class/transform';
import { Target } from '../../common/target';
import { AbilityDuringContent, AbilityThreshold } from '../../types';
export declare class DuringContent extends Transform {
    target?: Target;
    strength?: AbilityThreshold;
    characterGroups?: Array<string>;
    constructor(data: AbilityDuringContent);
    computeStrength(level?: number): number | undefined;
}
