import { ContentMap } from '../common/content';
import { TriggerPuller } from '../common/trigger';
import { equal } from '../compare';
import { Precondition } from '../precondition';
import { AbilityInstantTrigger, AbilityPrecondition } from '../types';
import { InstantTrigger } from './trigger';

export class Instant {
  unisonable: boolean;
  triggerKind: InstantTrigger;
  precondition: Precondition;
  pullerKind?: TriggerPuller;
  content: ContentMap;

  constructor(
    param1 = false,
    param2?: AbilityPrecondition,
    param3?: AbilityInstantTrigger
  ) {
    this.unisonable = param1;
    this.precondition = new Precondition(param2 as AbilityPrecondition);
    this.triggerKind = this.convertMasterValue(
      new InstantTrigger(param3 as AbilityInstantTrigger)
    );
    this.pullerKind = this.getPullerKind(this.triggerKind);
    this.content = new ContentMap();
  }

  match(param1: Instant): boolean {
    const eqUnisonable = this.unisonable === param1.unisonable;
    const eqTriggerKind = this.eqTriggerKind(param1.triggerKind);
    const eqPrecondition = equal(this.precondition, param1.precondition);
    if (eqUnisonable && eqTriggerKind && eqPrecondition) {
      return this.equalPullerKind(param1.pullerKind);
    }
    return false;
  }

  eqTriggerKind(param1: InstantTrigger): boolean {
    const triggerKind = this.triggerKind;
    const eqType = triggerKind.type === param1.type;
    const eqPuller = equal(triggerKind.triggerPuller, param1.triggerPuller);
    const eqThreshold = equal(triggerKind.threshold, param1.threshold);
    return eqType && eqPuller && eqThreshold;
  }

  getPullerKind(trigger?: InstantTrigger): TriggerPuller | undefined {
    if (trigger) {
      const kind = trigger.convert('InstantBattleAbilityTriggerKind');
      switch (kind) {
        case 'Count':
          return undefined;
        case 'CharacterCount':
          return trigger.triggerPuller;
        case 'Combo':
          return undefined;
        case 'HpLow':
          return trigger.triggerPuller;
        case 'HealHigh':
          return trigger.triggerPuller;
        case 'ElapsedTime':
          return undefined;
        case 'Condition':
          return trigger.triggerPuller;
        case 'EnemyCondition':
          return undefined;
        default:
          return undefined;
      }
    }
    return undefined;
  }

  equalPullerKind(param1?: TriggerPuller): boolean {
    const kind = this.pullerKind?.convert('AbilityTriggerPullerKind');
    const param1kind = param1?.convert('AbilityTriggerPullerKind');
    return kind === param1kind;
  }

  convertMasterValue(param1: InstantTrigger): InstantTrigger {
    return param1;
  }
}
