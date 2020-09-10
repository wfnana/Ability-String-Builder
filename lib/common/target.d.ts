import { Transform } from '../class/transform';
import { AbilityTriggerPuller } from '../types';
export declare const ABILITY_TRIGGER_TARGET_TRANSFORM: {
    Myself: {
        AbilityTargetKind: string;
    };
    ExceptMyself: {
        AbilityTargetKind: string;
    };
    Leader: {
        AbilityTargetKind: string;
    };
    Second: {
        AbilityTargetKind: string;
    };
    Third: {
        AbilityTargetKind: string;
    };
    Party: {
        AbilityTargetKind: string;
    };
    UnisonParty: {
        AbilityTargetKind: string;
    };
    TriggerPuller: {
        AbilityTargetKind: string;
    };
    Multiball: {
        AbilityTargetKind: string;
    };
    MinHpAbsolute: {
        AbilityTargetKind: string;
    };
    MinHpRelative: {
        AbilityTargetKind: string;
    };
    MinHpAbsoluteExceptMyself: {
        AbilityTargetKind: string;
    };
    MinHpRelativeExceptMyself: {
        AbilityTargetKind: string;
    };
};
export declare class Target extends Transform {
    characterGroups?: Array<string>;
    constructor(data: AbilityTriggerPuller);
}
