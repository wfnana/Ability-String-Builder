export type Ability = {
  id: number;
  stringId: string;
  unisonable: boolean;
  statueGroupId: string;
  trigger: AbilityTrigger;
};

export type AbilityTrigger = {
  type: string;
  precondition?: AbilityPrecondition;
  instantTrigger?: AbilityInstantTrigger;
  instantContent?: AbilityInstantContent;
  duringTrigger?: AbilityDuringTrigger;
  duringContent?: AbilityDuringContent;
  opening?: AbilityOpening;
};

export type AbilityPrecondition = {
  type: string;
  triggerPuller?: AbilityTriggerPuller;
  threshold?: AbilityThreshold;
  characterGroups?: Array<string>;
};

export type AbilityInstantTrigger = {
  type: string;
  triggerPuller?: AbilityTriggerPuller;
  threshold?: AbilityThreshold;
  triggerLimit?: number;
  characterGroups?: Array<string>;
};

export type AbilityInstantContent = {
  type: string;
  target?: AbilityTriggerPuller;
  strength?: AbilityThreshold;
  frame?: AbilityThreshold;
  maxAccumulation?: number;
  flipLimit?: number;
  characterGroups?: Array<string>;
};

export type AbilityDuringTrigger = {
  type: string;
  triggerPuller?: AbilityTriggerPuller;
  threshold?: AbilityThreshold;
  triggerLimit?: number;
};

export type AbilityDuringContent = {
  type: string;
  target?: AbilityTriggerPuller;
  strength?: AbilityThreshold;
  characterGroups?: Array<string>;
};

export type AbilityOpening = {
  type: string;
  strength?: AbilityThreshold;
};

export type AbilityThreshold = {
  power1: number;
  firstMax: number;
};

export type AbilityTriggerPuller = {
  type: string;
  characterGroups?: Array<string>;
};
