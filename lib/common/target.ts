import { Transform } from '../class/transform';
import { AbilityTriggerPuller } from '../types';

export const ABILITY_TRIGGER_TARGET_TRANSFORM = {
  Myself: {
    AbilityTargetKind: 'Myself'
  },
  ExceptMyself: {
    AbilityTargetKind: 'ExceptMyself'
  },
  Leader: {
    AbilityTargetKind: 'Member'
  },
  Second: {
    AbilityTargetKind: 'Member'
  },
  Third: {
    AbilityTargetKind: 'Member'
  },
  Party: {
    AbilityTargetKind: 'Party'
  },
  UnisonParty: {
    AbilityTargetKind: 'UnisonParty'
  },
  TriggerPuller: {
    AbilityTargetKind: 'TriggerPuller'
  },
  Multiball: {
    AbilityTargetKind: 'Multiball'
  },
  MinHpAbsolute: {
    AbilityTargetKind: 'MinHpAbsolute'
  },
  MinHpRelative: {
    AbilityTargetKind: 'MinHpRelative'
  },
  MinHpAbsoluteExceptMyself: {
    AbilityTargetKind: 'MinHpAbsoluteExceptMyself'
  },
  MinHpRelativeExceptMyself: {
    AbilityTargetKind: 'MinHpRelativeExceptMyself'
  }
};

export class Target extends Transform {
  characterGroups?: Array<string>;

  constructor(data: AbilityTriggerPuller) {
    super(data.type, ABILITY_TRIGGER_TARGET_TRANSFORM);
    this.characterGroups = data.characterGroups;
  }
}
