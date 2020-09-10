import { ContentMap } from '../common/content';
import { TriggerPuller } from '../common/trigger';
import { equal } from '../compare';
import { InstantTrigger } from '../instant/trigger';
import { Precondition } from '../precondition';
import { AbilityDuringTrigger, AbilityPrecondition } from '../types';
import { DuringTrigger } from './trigger';

export class During {
  unisonable: boolean;
  triggerKind: DuringTrigger;
  precondition: Precondition;
  pullerKind?: TriggerPuller;
  content: ContentMap;

  constructor(
    param1 = false,
    param2?: AbilityPrecondition,
    param3?: AbilityDuringTrigger
  ) {
    this.unisonable = param1;
    this.precondition = new Precondition(param2 as AbilityPrecondition);
    this.triggerKind = this.convertMasterValue(
      new DuringTrigger(param3 as AbilityDuringTrigger)
    );
    this.pullerKind = this.getPullerKind(this.triggerKind);
    this.content = new ContentMap();
  }

  match(param1: During): boolean {
    const eqUnisonable = this.unisonable === param1.unisonable;
    const eqTriggerKind = this.eqTriggerKind(param1.triggerKind);
    const eqPrecondition = equal(this.precondition, param1.precondition);
    if (eqUnisonable && eqTriggerKind && eqPrecondition) {
      return this.equalPullerKind(param1.pullerKind);
    }
    return false;
  }

  eqTriggerKind(param1: DuringTrigger): boolean {
    const triggerKind = this.triggerKind;
    const eqType = triggerKind.type === param1.type;
    const eqPuller = equal(triggerKind.triggerPuller, param1.triggerPuller);
    const eqThreshold = equal(triggerKind.threshold, param1.threshold);
    const eqLimit = triggerKind.triggerLimit === param1.triggerLimit;
    return eqType && eqPuller && eqThreshold && eqLimit;
  }

  getPullerKind(trigger?: DuringTrigger): TriggerPuller | undefined {
    if (trigger) {
      const kind = trigger.convert('DuringAbilityTriggerKind');
      switch (kind) {
        case 'Character':
          return trigger.triggerPuller;
        case 'Battle':
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
