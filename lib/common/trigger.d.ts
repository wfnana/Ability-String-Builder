import { Transform } from '../class/transform';
import { AbilityTriggerPuller } from '../types';
export declare const ABILITY_TRIGGER_PULLER_TRANSFORM: {
    Myself: {
        AbilityTriggerPullerKind: string;
    };
    OneOfExceptMyself: {
        AbilityTriggerPullerKind: string;
    };
    Leader: {
        AbilityTriggerPullerKind: string;
    };
    Second: {
        AbilityTriggerPullerKind: string;
    };
    Third: {
        AbilityTriggerPullerKind: string;
    };
    OneOfParty: {
        AbilityTriggerPullerKind: string;
    };
    TotalOfExceptMyself: {
        AbilityTriggerPullerKind: string;
    };
    TotalOfParty: {
        AbilityTriggerPullerKind: string;
    };
};
export declare class TriggerPuller extends Transform {
    characterGroups?: Array<string>;
    constructor(data: AbilityTriggerPuller);
}
