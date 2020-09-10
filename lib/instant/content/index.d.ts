import { Transform } from '../../class/transform';
import { Target } from '../../common/target';
import { AbilityInstantContent, AbilityThreshold } from '../../types';
export declare class InstantContent extends Transform {
    target?: Target;
    strength?: AbilityThreshold;
    frame?: AbilityThreshold;
    flipLimit?: number;
    characterGroups?: Array<string>;
    constructor(data: AbilityInstantContent);
    computeStrength(level?: number): number | undefined;
    computeFrame(level?: number): number | undefined;
}
