export declare type Ability = {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: AbilityTrigger;
};
export declare type AbilityTrigger = {
    type: string;
    precondition?: AbilityPrecondition;
    instantTrigger?: AbilityInstantTrigger;
    instantContent?: AbilityInstantContent;
    duringTrigger?: AbilityDuringTrigger;
    duringContent?: AbilityDuringContent;
    opening?: AbilityOpening;
};
export declare type AbilityPrecondition = {
    type: string;
    triggerPuller?: AbilityTriggerPuller;
    threshold?: AbilityThreshold;
    characterGroups?: Array<string>;
};
export declare type AbilityInstantTrigger = {
    type: string;
    triggerPuller?: AbilityTriggerPuller;
    threshold?: AbilityThreshold;
    triggerLimit?: number;
    characterGroups?: Array<string>;
};
export declare type AbilityInstantContent = {
    type: string;
    target?: AbilityTriggerPuller;
    strength?: AbilityThreshold;
    frame?: AbilityThreshold;
    maxAccumulation?: number;
    flipLimit?: number;
    characterGroups?: Array<string>;
};
export declare type AbilityDuringTrigger = {
    type: string;
    triggerPuller?: AbilityTriggerPuller;
    threshold?: AbilityThreshold;
    triggerLimit?: number;
};
export declare type AbilityDuringContent = {
    type: string;
    target?: AbilityTriggerPuller;
    strength?: AbilityThreshold;
    characterGroups?: Array<string>;
};
export declare type AbilityOpening = {
    type: string;
    strength?: AbilityThreshold;
};
export declare type AbilityThreshold = {
    power1: number;
    firstMax: number;
};
export declare type AbilityTriggerPuller = {
    type: string;
    characterGroups?: Array<string>;
};
