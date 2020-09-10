import { Transform } from '../class/transform';
import { AbilityTriggerPuller } from '../types';

export const ABILITY_TRIGGER_PULLER_TRANSFORM = {
  Myself: {
    AbilityTriggerPullerKind: 'Myself'
  },
  OneOfExceptMyself: {
    AbilityTriggerPullerKind: 'OneOfExceptMyself'
  },
  Leader: {
    AbilityTriggerPullerKind: 'Member'
  },
  Second: {
    AbilityTriggerPullerKind: 'Member'
  },
  Third: {
    AbilityTriggerPullerKind: 'Member'
  },
  OneOfParty: {
    AbilityTriggerPullerKind: 'OneOfParty'
  },
  TotalOfExceptMyself: {
    AbilityTriggerPullerKind: 'TotalOfExceptMyself'
  },
  TotalOfParty: {
    AbilityTriggerPullerKind: 'TotalOfParty'
  }
};

export class TriggerPuller extends Transform {
  characterGroups?: Array<string>;

  constructor(data: AbilityTriggerPuller) {
    super(data.type, ABILITY_TRIGGER_PULLER_TRANSFORM);
    this.characterGroups = data.characterGroups;
  }
}
