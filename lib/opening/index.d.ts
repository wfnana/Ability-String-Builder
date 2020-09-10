import { Transform } from '../class/transform';
import { AbilityOpening, AbilityThreshold } from '../types';
export declare class OpeningContent extends Transform {
    strength?: AbilityThreshold;
    constructor(data: AbilityOpening);
    computeStrength(level?: number): number | undefined;
}
export declare class Opening {
    unisonable: boolean;
    opening: OpeningContent;
    constructor(param1?: boolean, param2?: AbilityOpening);
}
