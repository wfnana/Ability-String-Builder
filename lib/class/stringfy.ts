import { CharacterGroup } from '../common/character-group';
import { Content } from '../common/content';
import { Target } from '../common/target';
import { TriggerPuller } from '../common/trigger';
import { DuringContent } from '../during/content';
import { DuringTrigger } from '../during/trigger';
import { InstantContent } from '../instant/content';
import { InstantTrigger } from '../instant/trigger';
import { Opening } from '../opening';
import { Precondition } from '../precondition';
import { Container } from './container';

export class Stringfy {
  container: Container;
  level: 1 | 2 | 3 | 4 | 5;

  constructor(strings: Container, level: 1 | 2 | 3 | 4 | 5 = 5) {
    this.container = strings;
    this.level = level;
  }

  stringfyVarietyTrigger(
    param1: string,
    threshold: number,
    limit: number | undefined,
    _param4: boolean
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_variety',
      {
        varietyKind: this.stringfyVarietyKind(param1),
        count: threshold,
        once: limit === 1
      }
    );
    return str + conj;
  }

  stringfyVarietyKind(param1: string): string {
    switch (param1) {
      case 'Element':
        return this.getUiString('ability_description_variety_element');
      case 'Race':
        return this.getUiString('ability_description_variety_race');
      case 'Speciality':
        return this.getUiString('ability_description_variety_speciality');
      default:
        return '';
    }
  }

  stringfyUnisonable(param1: boolean): string {
    if (!param1) {
      return this.getUiString('ability_description_not_unisonable_full');
    }
    return '';
  }

  stringfyUnisonMyselfTrigger(
    group: Array<string>,
    target: Target | undefined
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit();
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_unison_myself',
      {
        constraint: this.stringfyCharacterGroups(group, false),
        omittable: this.isTriggerPullerOmittable('Myself', target, false)
      }
    );
    return str + conj;
  }

  stringfyTriggerPuller(param1: TriggerPuller, param2: boolean): string {
    const param1kind = param1.convert('AbilityTriggerPullerKind');
    switch (param1kind) {
      case 'Myself':
        return this.getUiString('ability_description_target_myself');
      case 'OneOfExceptMyself':
        if (param1.characterGroups) {
          return this.getWithConstraint(
            'ability_description_target_one_of_others_constraint',
            param1.characterGroups,
            false
          );
        } else {
          return this.getUiString(
            'ability_description_target_one_of_others_all'
          );
        }
      case 'OneOfParty':
        if (param1.characterGroups) {
          return this.getWithConstraint(
            'ability_description_target_one_of_ally_constraint',
            param1.characterGroups,
            false
          );
        } else {
          return this.getUiString('ability_description_target_one_of_ally_all');
        }
      case 'TotalOfExceptMyself':
        if (param1.characterGroups) {
          return this.getWithConstraint(
            'ability_description_target_total_of_others_constraint',
            param1.characterGroups,
            false
          );
        } else {
          return this.getUiString(
            'ability_description_target_total_of_others_all'
          );
        }
      case 'TotalOfParty':
        if (param1.characterGroups) {
          return this.getWithConstraint(
            param2
              ? 'ability_description_target_total_of_ally_constraint_during'
              : 'ability_description_target_total_of_ally_constraint_instant',
            param1.characterGroups,
            false
          );
        } else {
          return this.getUiString(
            param2
              ? 'ability_description_target_total_of_ally_all_during'
              : 'ability_description_target_total_of_ally_all_instant'
          );
        }
      case 'Member':
        // self implementation
        switch (param1.type) {
          case 'Leader':
            return this.getUiString('ability_description_target_leader');
          case 'Second':
            return this.getWithIndex('ability_description_target_member_at', 2);
          case 'Third':
            return this.getWithIndex('ability_description_target_member_at', 3);
          default:
            return '';
        }
      default:
        return '';
    }
  }

  stringfyThirdCharacterTrigger(group: Array<string>): string {
    const conj = this.stringfyConjuctionTriggerLimit();
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_third_character',
      {
        constraint: this.stringfyCharacterGroups(group, false)
      }
    );
    return str + conj;
  }

  stringfyStrengthTimes(num?: number): string {
    return this.container.getUiStringWithContext('ability_description_times', {
      strength: num
    });
  }

  stringfyStrengthPercentUpDownForTrigger(
    num: number | undefined,
    _param2: boolean
  ): string {
    return this.stringfyPercentUpDown(num);
  }

  stringfyStrengthPercentUpDown(num?: number): string {
    return this.stringfyPercentUpDown(num);
  }

  stringfyStrengthPercentForTrigger(
    num: number | undefined,
    _param2: boolean
  ): string {
    return this.stringfyPercentNormal(num);
  }

  stringfyStrengthPercent(num?: number): string {
    return this.stringfyPercentNormal(num);
  }

  stringfySecondDuring(second: number | undefined): string {
    return this.getWithSecond('ability_description_for_second', second);
  }

  stringfySecondCharacterTrigger(group: Array<string>): string {
    const conj = this.stringfyConjuctionTriggerLimit();
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_second_character',
      {
        constraint: this.stringfyCharacterGroups(group, false)
      }
    );
    return str + conj;
  }

  stringfySecond(second: number | undefined): string {
    return Number(Number(Number(second) / 60).toFixed(2)).toString();
  }

  stringfyPrefixTriggerLimit(
    limit: number | undefined,
    param2: boolean
  ): string {
    if (limit) {
      if (limit === 1) {
        if (param2) {
          return '';
        }
        return this.getUiString(
          'ability_description_instant_trigger_limit_once'
        );
      }
      return this.getWithCount(
        'ability_description_instant_trigger_limit_n_times',
        limit
      );
    }
    return '';
  }

  stringfyPreconditionAndDuringTrigger(
    precondition: Precondition,
    trigger: DuringTrigger,
    target: Target | undefined
  ): string {
    const pre = this.stringfyPrecondition(precondition, target);
    const tri = this.stringfyDuringTrigger(trigger, false, target);
    return pre + tri;
  }

  stringfyPrecondition(
    precondition: Precondition,
    target: Target | undefined
  ): string {
    const param1kind = precondition.convert('AbilityPreconditionKind');
    switch (param1kind) {
      case 'Initial':
        return this.stringfyInstantTriggerInitial(
          0,
          precondition,
          true,
          target
        );
      case 'During':
        return this.stringfyDuringTrigger(precondition, true, target);
      default:
        return '';
    }
  }

  stringfyPercentUpDown(num?: number): string {
    if (num) {
      if (num >= 0) {
        return this.container.getUiStringWithContext(
          'ability_description_percent_up',
          { percent: this.stringfyPercent(num) }
        );
      } else {
        return this.container.getUiStringWithContext(
          'ability_description_percent_down',
          { percent: this.stringfyPercent(num * -1) }
        );
      }
    }
    return '';
  }

  stringfyPercentNormal(num?: number): string {
    return this.container.getUiStringWithContext(
      'ability_description_percent',
      { percent: this.stringfyPercent(num) }
    );
  }

  stringfyPercent(num?: number): string {
    if (num) {
      const correction = Number(Number(num * 100).toFixed(12));
      return correction.toString();
    }
    return '';
  }

  stringfyParameterReference(param1: string): string {
    if (param1.includes('MaxHp')) {
      return this.getUiString('ability_description_prameter_reference_max_hp');
    }
    if (param1.includes('CurrentHp')) {
      return this.getUiString(
        'ability_description_prameter_reference_current_hp'
      );
    }
    if (param1.includes('Attack')) {
      return this.getUiString('ability_description_prameter_reference_attack');
    }
    return '';
  }

  stringfyOpening(param1: Opening): string {
    let str = '';
    const unisonable = !param1.unisonable
      ? this.getUiString('ability_description_not_unisonable_full')
      : '';
    const param1kind = param1.opening.convert('OpeningAbilityKind');
    switch (param1kind) {
      case 'MyselfExpBoost':
        str = this.getWithPercent(
          'ability_description_opening_kind_myself_exp_boost',
          param1.opening.computeStrength(this.level)
        );
        break;
      case 'AllyExpBoost':
        str = this.getWithPercent(
          'ability_description_opening_kind_ally_exp_boost',
          param1.opening.computeStrength(this.level)
        );
        break;
      case 'ManaBoost':
        str = this.getWithPercent(
          'ability_description_opening_kind_mana_boost',
          param1.opening.computeStrength(this.level)
        );
        break;
    }
    return unisonable + str;
  }

  stringfyMyselfTrigger(
    group: Array<string>,
    target: Target | undefined
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit();
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_myself',
      {
        constraint: this.stringfyCharacterGroups(group, false),
        omittable: this.isTriggerPullerOmittable('Myself', target, false)
      }
    );
    return str + conj;
  }

  stringfyMemberTrigger(
    group: Array<string>,
    threshold: number,
    limit: number | undefined,
    _param4: boolean
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_member',
      {
        constraint: this.stringfyCharacterGroups(group, false),
        count: threshold,
        once: limit === 1
      }
    );
    return str + conj;
  }

  stringfyMaxStrengthPercent(
    partial: string,
    limit: number | undefined,
    param3: boolean,
    threshold: number | undefined
  ): string {
    if (limit) {
      if (limit === 1) {
        if (!param3) {
          return (
            this.getUiString('ability_description_instant_trigger_limit_once') +
            partial
          );
        }
        return (
          partial +
          this.container.getUiStringWithContext(
            'ability_description_instant_max_strength',
            {
              max_strength: this.stringfyStrengthPercentUpDown(
                Number(threshold) * limit
              )
            }
          )
        );
      }
      return (
        partial +
        this.container.getUiStringWithContext(
          'ability_description_instant_max_strength',
          {
            max_strength: this.stringfyStrengthPercentUpDown(
              Number(threshold) * limit
            )
          }
        )
      );
    }
    return this.stringfyPrefixTriggerLimit(limit, param3) + partial;
  }

  stringfyMaxStrengthCount(
    partial: string,
    limit: number | undefined,
    param3: boolean,
    threshold: number | undefined
  ): string {
    if (limit) {
      if (limit === 1) {
        if (!param3) {
          return (
            this.getUiString('ability_description_instant_trigger_limit_once') +
            partial
          );
        }
        return (
          partial +
          this.container.getUiStringWithContext(
            'ability_description_instant_max_strength',
            {
              max_strength: Number(threshold) * limit
            }
          )
        );
      }
      return (
        partial +
        this.container.getUiStringWithContext(
          'ability_description_instant_max_strength',
          {
            max_strength: Number(threshold) * limit
          }
        )
      );
    }
    return this.stringfyPrefixTriggerLimit(limit, param3) + partial;
  }

  stringfyMaxAccumulationPercent(
    param1: string,
    param2: number | undefined,
    param3: number | undefined
  ): string {
    if (param2 === 1) {
      return param1;
    }
    return (
      param1 +
      this.container.getUiStringWithContext(
        'ability_description_instant_max_accumulation',
        {
          max_strength: this.stringfyStrengthPercentUpDown(
            Number(param3) * Number(param2)
          )
        }
      )
    );
  }

  stringfyMaxAccumulationCount(
    param1: string,
    param2: number | undefined,
    param3: number | undefined
  ): string {
    if (param2 === 1) {
      return param1;
    }
    return String(Number(param3) * Number(param2));
  }

  stringfyLeaderCharacterTrigger(group: Array<string>): string {
    const conj = this.stringfyConjuctionTriggerLimit();
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_leader_character',
      {
        constraint: this.stringfyCharacterGroups(group, false)
      }
    );
    return str + conj;
  }

  stringfyLeaderTrigger(target: Target | undefined): string {
    const conj = this.stringfyConjuctionTriggerLimit(1);
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_leader',
      {
        omittable: Boolean(
          this.isTriggerPullerOmittable('Myself', target, false)
        )
      }
    );
    return str + conj;
  }

  // TODO: stringfyInstantTriggerOneOfEnemyCondition
  stringfyInstantTriggerOneOfEnemyCondition(): string {
    return '';
  }

  // TODO: stringfyInstantTriggerOneOfEnemyCharacterCount
  stringfyInstantTriggerOneOfEnemyCharacterCount(): string {
    return '';
  }

  stringfyInstantTriggerInitial(
    param1: number,
    param2: InstantTrigger | Precondition,
    param3: boolean,
    param4: Target | undefined
  ): string {
    const param2kind = param2.convert('InitialAbilityTriggerKind');
    let characterGroups = param2.triggerPuller?.characterGroups ?? [];
    let limit: undefined | number;
    let threshold: undefined | number;

    if (param2 instanceof Precondition) {
      characterGroups = param2.characterGroups ?? [];
      threshold = param2.computeThreshold(this.level);
    }
    if (param2 instanceof InstantTrigger) {
      characterGroups = param2.characterGroups ?? [];
      limit = param2.triggerLimit;
      threshold = param2.computeThreshold(this.level);
    }

    switch (param2kind) {
      case 'Always':
        return this.stringfyAlways(param1);
      case 'Member':
        return this.stringfyMemberTrigger(
          characterGroups,
          threshold as number,
          limit,
          param3
        );
      case 'MySelf':
        return this.stringfyMyselfTrigger(characterGroups, param4);
      case 'UnisonMyself':
        return this.stringfyUnisonMyselfTrigger(characterGroups, param4);
      case 'LeaderCharacter':
        return this.stringfyLeaderCharacterTrigger(characterGroups);
      case 'SecondCharacter':
        return this.stringfySecondCharacterTrigger(characterGroups);
      case 'ThirdCharacter':
        return this.stringfyThirdCharacterTrigger(characterGroups);
      case 'Variety':
        return this.stringfyVarietyTrigger(
          param2.convert('PartyCharacterVarietyKind'),
          threshold as number,
          limit,
          param3
        );
      case 'Leader':
        return this.stringfyLeaderTrigger(param4);
      default:
        return '';
    }
  }

  stringfyInstantTriggerHpLow(
    param1: TriggerPuller,
    threshold: number | undefined,
    limit: number | undefined,
    target: Target | undefined
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_hp_low',
      {
        triggerPuller: this.stringfyTriggerPuller(param1, false),
        omittable: this.isTriggerPullerOmittable(
          param1.convert('AbilityTriggerPullerKind'),
          target,
          true
        ),
        percent: this.stringfyPercentNormal(threshold),
        percent_up_down: this.stringfyPercentUpDown(threshold),
        once: limit === 1
      }
    );
    return str + conj;
  }

  stringfyInstantTriggerHealHigh(
    param1: TriggerPuller,
    threshold: number | undefined,
    limit: number | undefined,
    target: Target | undefined
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_heal_high',
      {
        triggerPuller: this.stringfyTriggerPuller(param1, false),
        omittable: this.isTriggerPullerOmittable(
          param1.convert('AbilityTriggerPullerKind'),
          target,
          true
        ),
        percent: this.stringfyPercentNormal(threshold),
        percent_up_down: this.stringfyPercentUpDown(threshold),
        once: limit === 1
      }
    );
    return str + conj;
  }

  stringfyInstantTriggerEnemyCondition(
    param1: InstantTrigger,
    threshold: number | undefined,
    limit: number | undefined,
    param4: boolean
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const count = this.stringfyCount(threshold, param4);
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_condition',
      {
        condition: this.stringfyCondtionTarget(param1, false),
        once: limit === 1
      }
    );
    return count + str + conj;
  }

  stringfyInstantTriggerElapsedTime(
    threshold: number | undefined,
    limit: number | undefined
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_elapsed_time',
      {
        second: this.stringfySecond(threshold),
        once: limit === 1
      }
    );
    return str + conj;
  }

  stringfyInstantTriggerCount(
    param1: string,
    threshold: number | undefined,
    limit: number | undefined,
    param4: boolean
  ): string {
    const count = this.stringfyCount(threshold, param4);
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    let str = '';
    switch (param1) {
      case 'PowerFlip':
        str = this.getWithTimes(
          'ability_description_instant_trigger_kind_power_flip',
          limit
        );
        break;
      case 'Dash':
        str = this.getWithTimes(
          'ability_description_instant_trigger_kind_dash',
          limit
        );
        break;
      case 'BallFlip':
        str = this.getWithTimes(
          'ability_description_instant_trigger_kind_ball_flip',
          limit
        );
        break;
      case 'Fever':
        str = this.getWithTimes(
          'ability_description_instant_trigger_kind_fever',
          limit
        );
        break;
      case 'MultiballAppear':
        str = this.getWithTimes(
          'ability_description_instant_trigger_kind_multiball_appear',
          limit
        );
        break;
      case 'EnemyKill':
        str = this.getWithTimes(
          'ability_description_instant_trigger_kind_enemy_kill',
          limit
        );
        break;
      case 'PowerFlipLv1':
        str = this.getWithTimesAndLevel(
          'ability_description_instant_trigger_kind_power_flip_lv',
          1,
          limit
        );
        break;
      case 'PowerFlipLv2':
        str = this.getWithTimesAndLevel(
          'ability_description_instant_trigger_kind_power_flip_lv',
          2,
          limit
        );
        break;
      case 'PowerFlipLv3':
        str = this.getWithTimesAndLevel(
          'ability_description_instant_trigger_kind_power_flip_lv',
          3,
          limit
        );
        break;
      case 'FeverPointAddedByAbility':
        str = this.getWithTimes(
          'ability_description_instant_trigger_kind_fever_point_added_by_abiility',
          limit
        );
        break;
    }

    return count + str + conj;
  }

  stringfyInstantTriggerCondition(
    param1: TriggerPuller | undefined,
    param2: InstantTrigger,
    threshold: number | undefined,
    limit: number | undefined,
    param5: boolean,
    target: Target | undefined
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const count = this.stringfyCount(threshold, param5);
    let trigger = '';
    let isOmittable = false;
    if (param1) {
      trigger = this.stringfyTriggerPuller(param1, false);
      isOmittable = this.isTriggerPullerOmittable(
        param1.convert('AbilityTriggerPullerKind'),
        target,
        true
      );
    } else {
      trigger = this.getUiString('ability_description_target_ally_all');
    }
    const str = this.container.getUiStringWithContext(
      'ability_description_instant_trigger_kind_condition',
      {
        triggerPuller: trigger,
        omittable: isOmittable,
        condition: this.stringfyCondtionTarget(param2, false),
        once: limit === 1
      }
    );
    return count + str + conj;
  }

  // param2 should be boolean
  stringfyInstantTriggerCombo(
    threshold: number | undefined,
    param2: string,
    limit: number | undefined
  ): string {
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    const id = param2.includes('Display')
      ? 'ability_description_instant_trigger_kind_combo_display'
      : 'ability_description_instant_trigger_kind_combo';
    const str = this.container.getUiStringWithContext(id, {
      count: threshold,
      once: limit === 1
    });
    return str + conj;
  }

  stringfyInstantTriggerCharacterCount(
    kind: string,
    threshold: number | undefined,
    limit: number | undefined,
    param4: TriggerPuller | undefined,
    param5: boolean,
    target: Target | undefined,
    _param7: boolean
  ): string {
    const count = this.stringfyCount(threshold, param5);
    const conj = this.stringfyConjuctionTriggerLimit(limit);
    let str = '';
    switch (kind) {
      case 'Revival':
        str = this.getWithTriggerPullerAndTimes(
          'ability_description_instant_trigger_kind_revival',
          param4 as TriggerPuller,
          limit,
          false,
          target
        );
        break;
      case 'HealCount':
        str = this.getWithTriggerPullerAndTimes(
          'ability_description_instant_trigger_kind_heal_count',
          param4 as TriggerPuller,
          limit,
          false,
          target
        );
        break;
      case 'DamageCount':
        str = this.getWithTriggerPullerAndTimes(
          'ability_description_instant_trigger_kind_damage_count',
          param4 as TriggerPuller,
          limit,
          false,
          target
        );
        break;
      case 'MemberDirectAttack':
        str = this.getWithTriggerPullerAndTimes(
          'ability_description_instant_trigger_kind_direct_attack',
          param4 as TriggerPuller,
          limit,
          false,
          target
        );
        break;
      case 'SkillInvoke':
        str = this.getWithTriggerPullerAndTimes(
          'ability_description_instant_trigger_kind_skill_invoke',
          param4 as TriggerPuller,
          limit,
          false,
          target
        );
        break;
      case 'SkillMax':
        str = this.getWithTriggerPullerAndTimes(
          'ability_description_instant_trigger_kind_skill_max',
          param4 as TriggerPuller,
          limit,
          false,
          target
        );
        break;
      case 'SkillHit':
        str = this.getWithTriggerPullerAndTimes(
          'ability_description_instant_trigger_kind_skill_hit',
          param4 as TriggerPuller,
          limit,
          false,
          target
        );
        break;
    }
    return count + str + conj;
  }

  stringfyInstantTriggerBattle(
    param1: InstantTrigger,
    param2: TriggerPuller | undefined,
    target: Target | undefined
  ): string {
    const param1kind = param1.convert('InstantBattleAbilityTriggerKind');
    switch (param1kind) {
      case 'Count':
        return this.stringfyInstantTriggerCount(
          param1.type,
          param1.computeThreshold(this.level),
          param1.triggerLimit,
          false
        );
      case 'CharacterCount':
        return this.stringfyInstantTriggerCharacterCount(
          param1.type,
          param1.computeThreshold(this.level),
          param1.triggerLimit,
          param2,
          false,
          target,
          !!param1.triggerLimit
        );
      case 'Combo':
        return this.stringfyInstantTriggerCombo(
          param1.computeThreshold(this.level),
          param1.type,
          param1.triggerLimit
        );
      case 'HpLow':
        return this.stringfyInstantTriggerHpLow(
          param2 as TriggerPuller,
          param1.computeThreshold(this.level),
          param1.triggerLimit,
          target
        );
      case 'HealHigh':
        return this.stringfyInstantTriggerHealHigh(
          param2 as TriggerPuller,
          param1.computeThreshold(this.level),
          param1.triggerLimit,
          target
        );
      case 'ElapsedTime':
        return this.stringfyInstantTriggerElapsedTime(
          param1.computeThreshold(this.level),
          param1.triggerLimit
        );
      case 'Condition':
        return this.stringfyInstantTriggerCondition(
          param2,
          param1,
          param1.computeThreshold(this.level),
          param1.triggerLimit,
          false,
          target
        );
      case 'EnemyCondition':
        return this.stringfyInstantTriggerEnemyCondition(
          param1,
          param1.computeThreshold(this.level),
          param1.triggerLimit,
          false
        );
      default:
        return '';
    }
  }

  stringfyInstantTrigger(
    param1: InstantTrigger,
    target: Target | undefined
  ): string {
    const param1kind = param1.convert('InstantAbilityTriggerKind');
    switch (param1kind) {
      case 'Initial':
        // TODO: the first parameter should be converted
        return this.stringfyInstantTriggerInitial(0, param1, false, target);
      case 'Battle':
        return this.stringfyInstantTriggerBattle(
          param1,
          param1.triggerPuller,
          target
        );
      default:
        return '';
    }
  }

  stringfyInstantContent(
    content: Content,
    isInitialTrigger: boolean,
    limit: number | undefined,
    notFirst: boolean
  ): string {
    const contentkind = content.data.convert('InstantAbilityContent');
    const prefix = this.stringfyPrefixTriggerLimit(limit, false);
    switch (contentkind) {
      case 'ConditionCharacter':
        return (
          prefix +
          this.stringfyConditionCharacterContent(
            content,
            content,
            (content.data as InstantContent)?.computeFrame(this.level),
            (content.data as InstantContent)?.flipLimit,
            notFirst
          )
        );
      case 'ConditionBattle':
        return (
          prefix +
          this.stringfyConditionBattleContent(
            content,
            (content.data as InstantContent)?.computeFrame(this.level),
            (content.data as InstantContent)?.flipLimit
          )
        );
      case 'Common':
        return this.stringfyCommonContent(content, limit, notFirst);
      case 'DurationTimeCharacter':
        return (
          prefix +
          this.stringfyDurationTimeCharacterContent(
            content,
            content,
            (content.data as InstantContent)?.computeFrame(this.level),
            (content.data as InstantContent)?.flipLimit,
            notFirst
          )
        );
      case 'InstantCharacter':
        return this.stringfyInstantCharacterContent(
          content,
          content,
          isInitialTrigger,
          limit,
          notFirst
        );
      case 'InstantBattle':
        return this.stringfyInstantBattleContent(
          content,
          isInitialTrigger,
          limit
        );
      default:
        return '';
    }
  }

  stringfyInstantCharacterContent(
    param1: Content,
    param2: Content,
    isInitialTrigger: boolean,
    limit: number | undefined,
    notFirst: boolean
  ): string {
    const param2kind = param2.data.convert(
      'InstantAbilityInstantCharacterContent'
    );
    const threshold = param1.data.computeStrength(this.level);
    switch (param2kind) {
      case 'CoffinBaseCountDown':
        if (notFirst) {
          return this.stringfyMaxStrengthCount(
            this.getWithStrengthCountDown(
              'ability_description_instant_content_coffin_base_count_down_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthCount(
          this.getWithTargetAndStrengthCountDown(
            'ability_description_instant_content_coffin_base_count_down',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'CoffinBaseCountUp':
        if (notFirst) {
          return this.stringfyMaxStrengthCount(
            this.getWithStrengthCountDown(
              'ability_description_instant_content_coffin_base_count_up_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthCount(
          this.getWithTargetAndStrengthCountDown(
            'ability_description_instant_content_coffin_base_count_up',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'Hp':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_instant_content_hp_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_instant_content_hp',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'RatioHeal': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithPercent(
                'ability_description_instant_content_ratio_heal_minimal',
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithPercent(
              'ability_description_instant_content_ratio_heal_minimal',
              threshold
            )
          );
        }
        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndPercent(
              'ability_description_instant_content_ratio_heal',
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndPercent(
            'ability_description_instant_content_ratio_heal',
            param1,
            threshold
          )
        );
      }
      case 'FixedHeal': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithStrengthCount(
                'ability_description_instant_content_fixed_heal_minimal',
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithStrengthCount(
              'ability_description_instant_content_fixed_heal_minimal',
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndStrengthCount(
              'ability_description_instant_content_fixed_heal',
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndStrengthCount(
            'ability_description_instant_content_fixed_heal',
            param1,
            threshold
          )
        );
      }
      case 'RatioDamageMaxHp': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithPercent(
                'ability_description_instant_content_ratio_damage_max_hp_minimal',
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithPercent(
              'ability_description_instant_content_ratio_damage_max_hp_minimal',
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndPercent(
              'ability_description_instant_content_ratio_damage_max_hp',
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndPercent(
            'ability_description_instant_content_ratio_damage_max_hp',
            param1,
            threshold
          )
        );
      }
      case 'RatioDamageCurrentHp': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithPercent(
                'ability_description_instant_content_ratio_damage_current_hp_minimal',
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithPercent(
              'ability_description_instant_content_ratio_damage_current_hp_minimal',
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndPercent(
              'ability_description_instant_content_ratio_damage_current_hp',
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndPercent(
            'ability_description_instant_content_ratio_damage_current_hp',
            param1,
            threshold
          )
        );
      }
      case 'FixedDamage': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithStrengthCount(
                'ability_description_instant_content_fixed_damage_minimal',
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithStrengthCount(
              'ability_description_instant_content_fixed_damage_minimal',
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndStrengthCount(
              'ability_description_instant_content_ratio_damage_current_hp',
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndStrengthCount(
            'ability_description_instant_content_ratio_damage_current_hp',
            param1,
            threshold
          )
        );
      }
      case 'SkillGauge': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithPercent(
                'ability_description_instant_content_skill_gauge_minimal',
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithPercent(
              'ability_description_instant_content_skill_gauge_minimal',
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndPercent(
              'ability_description_instant_content_skill_gauge',
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndPercent(
            'ability_description_instant_content_skill_gauge',
            param1,
            threshold
          )
        );
      }
      case 'ConditionExtend':
        if (notFirst) {
          return this.stringfyMaxStrengthCount(
            this.getWithConditionTargetAndPercent(
              'ability_description_common_content_condition_extend_minimal',
              param1.data,
              threshold,
              false
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthCount(
          this.getWithTargetAndConditionTargetAndPercent(
            'ability_description_common_content_condition_extend',
            param1,
            param1.data,
            threshold,
            false
          ),
          limit,
          true,
          threshold
        );
      case 'Barrier': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithPercent(
                'ability_description_instant_content_barrier_minimal',
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithPercent(
              'ability_description_instant_content_barrier_minimal',
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndPercent(
              'ability_description_instant_content_barrier',
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndPercent(
            'ability_description_instant_content_barrier',
            param1,
            threshold
          )
        );
      }
      case 'EnemyDamage': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithElementParameterReferenceAndPercent(
                'ability_description_instant_content_enemy_damage_minimal',
                param2.data.type,
                param2.data.type,
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithElementParameterReferenceAndPercent(
              'ability_description_instant_content_enemy_damage_minimal',
              param2.data.type,
              param2.data.type,
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithElementParameterReferenceTargetAndPercent(
              'ability_description_instant_content_enemy_damage',
              param2.data.type,
              param2.data.type,
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithElementParameterReferenceTargetAndPercent(
            'ability_description_instant_content_enemy_damage',
            param2.data.type,
            param2.data.type,
            param1,
            threshold
          )
        );
      }
      case 'TriggerEnemyDamage': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithElementParameterReferenceAndPercent(
                'ability_description_instant_content_trigger_enemy_damage_minimal',
                param2.data.type,
                param2.data.type,
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithElementParameterReferenceAndPercent(
              'ability_description_instant_content_trigger_enemy_damage_minimal',
              param2.data.type,
              param2.data.type,
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithElementParameterReferenceTargetAndPercent(
              'ability_description_instant_content_trigger_enemy_damage',
              param2.data.type,
              param2.data.type,
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithElementParameterReferenceTargetAndPercent(
            'ability_description_instant_content_trigger_enemy_damage',
            param2.data.type,
            param2.data.type,
            param1,
            threshold
          )
        );
      }
      case 'CountUp': {
        if (notFirst) {
          if (isInitialTrigger) {
            return this.stringfyMaxStrengthPercent(
              this.getWithStrengthCountUp(
                this.getCharacterCountUpMinimalUiString(
                  (param2.data as InstantContent).flipLimit
                ),
                threshold
              ),
              limit,
              true,
              threshold
            );
          }
          return (
            this.stringfyPrefixTriggerLimit(limit, false) +
            this.getWithStrengthCountUp(
              this.getCharacterCountUpMinimalUiString(
                (param2.data as InstantContent).flipLimit
              ),
              threshold
            )
          );
        }

        if (isInitialTrigger) {
          return this.stringfyMaxStrengthPercent(
            this.getWithTargetAndStrengthCountUp(
              this.getCharacterCountUpUiString(
                (param2.data as InstantContent).flipLimit
              ),
              param1,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, false) +
          this.getWithTargetAndStrengthCountUp(
            this.getCharacterCountUpUiString(
              (param2.data as InstantContent).flipLimit
            ),
            param1,
            threshold
          )
        );
      }
      default:
        return '';
    }
  }

  stringfyInstantBattleContent(
    param1: Content,
    isInitialTrigger: boolean,
    limit: number | undefined
  ): string {
    const param1kind = param1.data.convert(
      'InstantAbilityInstantBattleContent'
    );
    const threshold = param1.data.computeStrength(this.level);
    switch (param1kind) {
      case 'AddFeverPoint':
        if (isInitialTrigger) {
          return this.stringfyMaxStrengthCount(
            this.getWithStrengthCountUp(
              'ability_description_instant_content_add_fever_point',
              threshold
            ),
            limit,
            this.isContinuationInstantBattleContent(param1),
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(
            limit,
            this.isContinuationInstantBattleContent(param1)
          ) +
          this.getWithStrengthCountUp(
            'ability_description_instant_content_add_fever_point',
            threshold
          )
        );
      case 'AddCombo':
        if (isInitialTrigger) {
          return this.stringfyMaxStrengthCount(
            this.getWithStrengthCountUp(
              'ability_description_instant_content_add_combo',
              threshold
            ),
            limit,
            this.isContinuationInstantBattleContent(param1),
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(
            limit,
            this.isContinuationInstantBattleContent(param1)
          ) +
          this.getWithStrengthCountUp(
            'ability_description_instant_content_add_combo',
            threshold
          )
        );
      case 'CountUp':
        if (isInitialTrigger) {
          return this.stringfyMaxStrengthCount(
            this.stringfyBattleCountUp(param1.data.type, threshold),
            limit,
            this.isContinuationInstantBattleContent(param1),
            threshold
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(
            limit,
            this.isContinuationInstantBattleContent(param1)
          ) + this.stringfyBattleCountUp(param1.data.type, threshold)
        );
      default:
        return '';
    }
  }

  stringfyInitialWithoutContinuation(): string {
    return this.getWithTimes(
      'ability_description_instant_trigger_kind_first_flip',
      1
    );
  }

  stringfyFlipLimitOrFrame(
    limit: number | undefined,
    frame: number | undefined
  ): string {
    if (limit) {
      if (limit === 1) {
        return this.getUiString('ability_description_flip_limit_once');
      }
      return this.getWithCount('ability_description_flip_limit_n_times', limit);
    }
    return this.stringfySecondDuring(frame);
  }

  strinfyElementTarget(param1: string): string {
    // self implementation
    if (param1.includes('All')) {
      return this.getUiString('element_kind_all_full');
    }
    if (param1.includes('Red')) {
      return this.getUiString('element_kind_red_full');
    }
    if (param1.includes('Blue')) {
      return this.getUiString('element_kind_blue_full');
    }
    if (param1.includes('Yellow')) {
      return this.getUiString('element_kind_yellow_full');
    }
    if (param1.includes('Green')) {
      return this.getUiString('element_kind_green_full');
    }
    if (param1.includes('White')) {
      return this.getUiString('element_kind_white_full');
    }
    if (param1.includes('Black')) {
      return this.getUiString('element_kind_black_full');
    }
    return '';
  }

  stringfyElementShort(param1: string): string {
    // self implementation
    if (param1.includes('All')) {
      return this.getUiString('element_kind_any');
    }
    if (param1.includes('Red')) {
      return this.getUiString('element_kind_red');
    }
    if (param1.includes('Blue')) {
      return this.getUiString('element_kind_blue');
    }
    if (param1.includes('Yellow')) {
      return this.getUiString('element_kind_yellow');
    }
    if (param1.includes('Green')) {
      return this.getUiString('element_kind_green');
    }
    if (param1.includes('White')) {
      return this.getUiString('element_kind_white');
    }
    if (param1.includes('Black')) {
      return this.getUiString('element_kind_black');
    }
    return '';
  }

  stringfyElementFull(param1: string): string {
    // self implementation
    if (param1.includes('All')) {
      return this.getUiString('element_kind_all_full');
    }
    if (param1.includes('Red')) {
      return this.getUiString('element_kind_red_full');
    }
    if (param1.includes('Blue')) {
      return this.getUiString('element_kind_blue_full');
    }
    if (param1.includes('Yellow')) {
      return this.getUiString('element_kind_yellow_full');
    }
    if (param1.includes('Green')) {
      return this.getUiString('element_kind_green_full');
    }
    if (param1.includes('White')) {
      return this.getUiString('element_kind_white_full');
    }
    if (param1.includes('Black')) {
      return this.getUiString('element_kind_black_full');
    }
    return '';
  }

  stringfyDuringTriggerCondition(
    param1: TriggerPuller | undefined,
    param2: DuringTrigger | InstantTrigger,
    threshold: number | undefined,
    _param4: boolean,
    param5: Target | undefined
  ): string {
    let target = '';
    let isOmittable = false;
    if (param1) {
      target = this.stringfyTriggerPuller(param1, true);
      isOmittable = this.isTriggerPullerOmittable(
        param1.convert('AbilityTriggerPullerKind'),
        param5,
        true
      );
    } else {
      target = this.getUiString('ability_description_target_ally_all');
    }
    return this.container.getUiStringWithContext(
      'ability_description_during_trigger_kind_condition_count',
      {
        triggerPuller: target,
        omittable: isOmittable,
        condition: this.stringfyCondtionTarget(param2, false),
        count: threshold
      }
    );
  }

  stringfyDuringTrigger(
    param1: DuringTrigger,
    param2: boolean,
    target: Target | undefined
  ): string {
    const param1kind = param1.convert('DuringAbilityTriggerKind');
    switch (param1kind) {
      case 'Character':
        return this.stringfyDuringCharacterTrigger(
          param1.triggerPuller as TriggerPuller,
          param1,
          param2,
          target
        );
      case 'Battle':
        return this.stringfyDuringBattleTrigger(param1, param2, target);
      default:
        return '';
    }
  }

  stringfyDuringCharacterTrigger(
    param1: TriggerPuller,
    param2: DuringTrigger,
    param3: boolean,
    target: Target | undefined
  ): string {
    const param2kind = param2.convert('DuringCharacterAbilityTriggerKind');
    const threshold = param2.computeThreshold(this.level);
    switch (param2kind) {
      case 'Hp': {
        if (param2.type.includes('Low')) {
          return this.getWithTriggerPullerAndPercent(
            'ability_description_during_trigger_kind_hp_low',
            param1,
            threshold,
            param3,
            true,
            target
          );
        }
        return this.getWithTriggerPullerAndPercent(
          'ability_description_during_trigger_kind_hp_high',
          param1,
          threshold,
          param3,
          true,
          target
        );
      }
      case 'Condition': {
        const limit = param2.triggerLimit ?? 1;
        const threshold = param2.computeThreshold(this.level) ?? 1;
        if (threshold === 1) {
          if (limit) {
            if (limit === 1) {
              return this.getWithTriggerPullerAndConditionTarget(
                'ability_description_during_trigger_kind_condition',
                param1,
                param2,
                true,
                target
              );
            }
            return this.stringfyDuringTriggerCondition(
              param1,
              param2,
              threshold,
              false,
              target
            );
          }
          return this.stringfyDuringTriggerCondition(
            param1,
            param2,
            threshold,
            false,
            target
          );
        }
        return this.stringfyDuringTriggerCondition(
          param1,
          param2,
          threshold,
          false,
          target
        );
      }
      case 'Barrier': {
        return this.getWithTriggerPuller(
          'ability_description_during_trigger_kind_barrier',
          param1,
          true,
          target
        );
      }
      case 'ParameterUp': {
        const kind = param2.convert('CharacterFloatParameterKind');
        switch (kind) {
          case 'Attack':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_attack_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          case 'SkillDamage':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_skill_damage_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          case 'FeverPoint':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_fever_point_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          case 'Stunify':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_stunify_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          case 'CharacterSlayer':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_character_slayer_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          case 'StunWinceSlayer':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_stunwince_slayer_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          case 'DebuffResistance':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_debuff_resistance_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          case 'Resistance':
            return this.container.getUiStringWithContext(
              'ability_description_during_trigger_kind_resistance_up',
              {
                triggerPuller: this.stringfyTriggerPuller(param1, true),
                omittable: this.isTriggerPullerOmittable(
                  param1.convert('AbilityTriggerPullerKind'),
                  target,
                  true
                ),
                element: this.strinfyElementTarget(param2.type),
                percent: this.stringfyStrengthPercentForTrigger(
                  threshold,
                  param3
                ),
                percent_up_down: this.stringfyStrengthPercentUpDownForTrigger(
                  threshold,
                  param3
                )
              }
            );
          case 'ConditionSlayer':
            return this.container.getUiStringWithContext(
              'ability_description_during_trigger_kind_condition_slayer_up',
              {
                triggerPuller: this.stringfyTriggerPuller(param1, true),
                omittable: this.isTriggerPullerOmittable(
                  param1.convert('AbilityTriggerPullerKind'),
                  target,
                  true
                ),
                condition: this.stringfyCondtionTarget(param2, true),
                percent: this.stringfyStrengthPercentForTrigger(
                  threshold,
                  param3
                ),
                percent_up_down: this.stringfyStrengthPercentUpDownForTrigger(
                  threshold,
                  param3
                )
              }
            );
          case 'MaxHp':
            return this.getWithTriggerPullerAndPercent(
              'ability_description_during_trigger_kind_debuff_resistance_up',
              param1,
              threshold,
              param3,
              true,
              target
            );
          default:
            return '';
        }
      }
      default:
        return '';
    }
  }

  stringfyDuringBattleTrigger(
    param1: DuringTrigger,
    _param2: boolean,
    param3: Target | undefined
  ): string {
    const param1kind = param1.convert('DuringBattleAbilityTriggerKind');
    switch (param1kind) {
      case 'Combo':
        if (param1.type.includes('Low')) {
          return this.getWithCount(
            'ability_description_during_trigger_kind_combo_low',
            param1.computeThreshold(this.level)
          );
        }
        return this.getWithCount(
          'ability_description_during_trigger_kind_combo_high',
          param1.computeThreshold(this.level)
        );
      case 'Enemy':
        if (param1.type.includes('Low')) {
          return this.getWithCount(
            'ability_description_during_trigger_kind_enemy_low',
            param1.computeThreshold(this.level)
          );
        }
        return this.getWithCount(
          'ability_description_during_trigger_kind_enemy_high',
          param1.computeThreshold(this.level)
        );
      case 'Fever':
        return this.getUiString(
          'ability_description_during_trigger_kind_fever'
        );
      case 'Multiball':
        return this.getWithCount(
          'ability_description_during_trigger_kind_multiball',
          param1.computeThreshold(this.level)
        );
      case 'Condition': {
        // limit correction
        // if (
        //   ['Piercing', 'Flying', 'PowerFlipDamage', 'Speedup'].includes(
        //     param1.convert('ConditionTargetKind')
        //   )
        // ) {
        //   param1.triggerLimit = param1.triggerLimit ?? 1;
        // }
        // limit correction
        const limit = param1.triggerLimit ?? 1;
        const threshold = param1.computeThreshold(this.level) ?? 1;
        if (threshold === 1) {
          if (limit) {
            if (limit === 1) {
              return this.getPartyConditionTarget(
                'ability_description_during_trigger_kind_condition',
                param1
              );
            }
            return this.stringfyDuringTriggerCondition(
              undefined,
              param1,
              threshold,
              false,
              param3
            );
          }
          return this.stringfyDuringTriggerCondition(
            undefined,
            param1,
            threshold,
            false,
            param3
          );
        }
        return this.stringfyDuringTriggerCondition(
          undefined,
          param1,
          threshold,
          false,
          param3
        );
      }
      case 'ParameterUp':
        return this.getWithPercent(
          'ability_description_during_trigger_kind_power_flip_damage_up',
          param1.computeThreshold(this.level)
        );
      default:
        return '';
    }
  }

  stringfyDurationTimeCharacterContent(
    param1: Content,
    param2: Content,
    frame: number | undefined,
    limit: number | undefined,
    notFirst: boolean
  ): string {
    const param2kind = param2.data.convert(
      'InstantAbilityDurationTimeCharacterContent'
    );
    let str = '';
    switch (param2kind) {
      case 'EaseOfHeal':
        if (notFirst) {
          str = this.getWithPercent(
            'ability_description_common_content_ease_of_heal_minimal',
            frame
          );
        }
        str = this.getWithTargetAndPercent(
          'ability_description_common_content_ease_of_heal',
          param1,
          frame
        );
        break;
      case 'Scapegoat':
        if (notFirst) {
          str = this.getUiString(
            'ability_description_common_content_scapegoat_minimal'
          );
        }
        str = this.getWithTarget(
          'ability_description_common_content_scapegoat',
          param1
        );
        break;
      case 'AdditionalDirectAttack':
        str = this.stringfyAdditionalDirectAttack(
          param1.data,
          param1,
          notFirst
        );
        break;
      case 'ConditionPrevent':
        if (notFirst) {
          str = this.getWithConditionTarget(
            'ability_description_common_content_condition_prevent_minimal',
            param2.data,
            false
          );
        }
        str = this.getWithTargetAndConditionTarget(
          'ability_description_common_content_condition_prevent',
          param1,
          param2.data,
          false
        );
        break;
    }
    return this.stringfyFlipLimitOrFrame(limit, frame) + str;
  }

  stringfyCountUp(threshold: number | undefined, _param2?: boolean): string {
    return this.container.getUiStringWithContext(
      'ability_description_count_up',
      {
        count: threshold
      }
    );
  }

  stringfyCountDown(threshold: number | undefined, _param2?: boolean): string {
    return this.container.getUiStringWithContext(
      'ability_description_count_down',
      {
        count: threshold
      }
    );
  }

  stringfyCount(threshold: number | undefined, _param2: boolean): string {
    if (threshold === 1) {
      return '';
    }
    return this.getWithCount('ability_description_n_times', threshold);
  }

  stringfyConjuctionTriggerLimit(param1?: number): string {
    if (param1) {
      if (param1 === 1) {
        return this.getUiString(
          'ability_description_instant_conjunction_trigger_limit_once'
        );
      }
      return this.getUiString(
        'ability_description_instant_conjunction_trigger_limit_n_times'
      );
    }
    return this.getUiString(
      'ability_description_instant_conjunction_trigger_limit_no_limit'
    );
  }

  stringfyCondtionTarget(
    param1: DuringTrigger | InstantTrigger | DuringContent | InstantContent,
    isTargetEnemy: boolean
  ): string {
    const param1kind = param1.convert('ConditionTargetKind');
    const sign = param1.convert('ConditionSign');
    switch (param1kind) {
      case 'All':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_all'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_all'
            );
          case 'Both':
            return this.getUiString(
              'ability_description_condition_target_both_all'
            );
          default:
            return '';
        }
      case 'AttackPoint':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_attack'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_attack'
            );
          default:
            return '';
        }
      case 'SkillDamage':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_skill_damage'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_skill_damage'
            );
          default:
            return '';
        }
      case 'AllElementResistance':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_all_elements_resistance'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_good_all_elements_resistance'
            );
          default:
            return '';
        }
      case 'ElementResistance':
        switch (sign) {
          case 'Good':
            return this.getWithElementTarget(
              'ability_description_condition_target_good_resistance',
              param1.type
            );
          case 'Bad':
            return this.getWithElementTarget(
              'ability_description_condition_target_bad_resistance',
              param1.type
            );
          default:
            return '';
        }
      case 'ElementDamageCut':
        return this.getUiString(
          'ability_description_condition_target_damage_cut'
        );
      case 'CharacterSlayer':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_character_slayer'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_character_slayer'
            );
          default:
            return '';
        }
      case 'Regeneration':
        return this.getUiString(
          'ability_description_condition_target_regeneration'
        );
      case 'Poison':
        return this.getUiString('ability_description_condition_target_poison');
      case 'Invincible':
        return this.getUiString(
          'ability_description_condition_target_invincible'
        );
      case 'Paralysis':
        return this.getUiString(
          'ability_description_condition_target_paralysis'
        );
      case 'Frozen':
        if (isTargetEnemy) {
          return this.getUiString(
            'ability_description_condition_target_enemy_frozen'
          );
        }
        return this.getUiString(
          'ability_description_condition_target_member_frozen'
        );
      case 'FeverPoint':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_fever_point'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_fever_point'
            );
          default:
            return '';
        }
      case 'Stunify':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_stunify'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_stunify'
            );
          default:
            return '';
        }
      case 'PinchSlayer':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_stun_wince_slayer'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_stun_wince_slayer'
            );
          default:
            return '';
        }
      case 'DebuffResistance':
        return this.getUiString(
          'ability_description_condition_target_good_debuff_resistance'
        );
      case 'Piercing':
        return this.getUiString(
          'ability_description_condition_target_piercing'
        );
      case 'Flying':
        return this.getUiString('ability_description_condition_target_flying');
      case 'PowerFlipDamage':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_powerflip_damage'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_powerflip_damage'
            );
          default:
            return '';
        }
      case 'DirectDamage':
        switch (sign) {
          case 'Good':
            return this.getUiString(
              'ability_description_condition_target_good_direct_damage'
            );
          case 'Bad':
            return this.getUiString(
              'ability_description_condition_target_bad_direct_damage'
            );
          default:
            return '';
        }
      case 'Silence':
        return this.getUiString('ability_description_condition_target_silence');
      case 'Speedup':
        return this.getUiString('ability_description_condition_target_speedup');
      case 'AdditionalDirectAttack':
        return this.getUiString(
          'ability_description_condition_target_additional_direct_attack'
        );
      default:
        return '';
    }
  }

  stringfyConditionShareTarget(param1: string): string {
    // self implementation
    if (param1.includes('AttackPoint')) {
      return this.getUiString(
        'ability_description_condition_target_good_attack'
      );
    }
    if (param1.includes('SkillDamage')) {
      return this.getUiString(
        'ability_description_condition_target_good_skill_damage'
      );
    }
    if (param1.includes('DirectDamage')) {
      return this.getUiString(
        'ability_description_condition_target_good_direct_damage'
      );
    }
    if (param1.includes('ResistanceAll')) {
      return this.getWithElementTarget(
        'ability_description_condition_target_good_resistance',
        param1
      );
    }
    if (param1.includes('ResistanceRed')) {
      return this.getWithElementTarget(
        'ability_description_condition_target_good_resistance',
        param1
      );
    }
    if (param1.includes('ResistanceBlue')) {
      return this.getWithElementTarget(
        'ability_description_condition_target_good_resistance',
        param1
      );
    }
    if (param1.includes('ResistanceYellow')) {
      return this.getWithElementTarget(
        'ability_description_condition_target_good_resistance',
        param1
      );
    }
    if (param1.includes('ResistanceGreen')) {
      return this.getWithElementTarget(
        'ability_description_condition_target_good_resistance',
        param1
      );
    }
    if (param1.includes('ResistanceWhite')) {
      return this.getWithElementTarget(
        'ability_description_condition_target_good_resistance',
        param1
      );
    }
    if (param1.includes('ResistanceBlack')) {
      return this.getWithElementTarget(
        'ability_description_condition_target_good_resistance',
        param1
      );
    }
    if (param1.includes('CharacterSlayer')) {
      return this.getUiString(
        'ability_description_condition_target_good_character_slayer'
      );
    }
    if (param1.includes('FeverPoint')) {
      return this.getUiString(
        'ability_description_condition_target_good_fever_point'
      );
    }
    if (param1.includes('Stunify')) {
      return this.getUiString(
        'ability_description_condition_target_good_stunify'
      );
    }
    if (param1.includes('StanWinceSlayer')) {
      return this.getUiString(
        'ability_description_condition_target_good_stun_wince_slayer'
      );
    }
    return '';
  }

  stringfyConditionCharacterContent(
    param1: Content,
    param2: Content,
    frame: number | undefined,
    limit: number | undefined,
    notFirst: boolean
  ): string {
    const param2kind = param2.data.convert('ConditionChangeContent');
    let str = '';
    switch (param2kind) {
      case 'AttackPoint':
        if (notFirst) {
          str = this.getWithPercent(
            'ability_description_condition_content_attack_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndPercent(
          'ability_description_condition_content_attack',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'SkillDamage':
        if (notFirst) {
          str = this.getWithPercent(
            'ability_description_condition_content_skill_damage_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndPercent(
          'ability_description_condition_content_skill_damage',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'ElementResistance':
        if (notFirst) {
          str = this.getWithElementTargetWithPercent(
            'ability_description_condition_content_element_resistance_minimal',
            param2.data.type,
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndElementTargetWithPercent(
          'ability_description_condition_content_element_resistance',
          param1,
          param2.data.type,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'ElementDamageCut':
        if (notFirst) {
          str = this.getWithElementTargetWithCountDown(
            'ability_description_condition_content_element_damage_cut_minimal',
            param2.data.type,
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndElementTargetWithCountDown(
          'ability_description_condition_content_element_damage_cut',
          param1,
          param2.data.type,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'CharacterSlayer':
        // INFO: Character Group may be wrong here
        if (notFirst) {
          str = this.getWithConstraintAndPercent(
            'ability_description_condition_content_character_slayer_minimal',
            param1.data?.characterGroups ?? [],
            true,
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndConstraintAndPercent(
          'ability_description_condition_content_character_slayer',
          param1,
          param1.data?.characterGroups ?? [],
          true,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'Regeneration':
        if (notFirst) {
          str = this.getWithStrengthCount(
            'ability_description_condition_content_regeneration_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndStrengthCount(
          'ability_description_condition_content_regeneration',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'Poison':
        if (notFirst) {
          str = this.getWithStrengthCount(
            'ability_description_condition_content_poison_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndStrengthCount(
          'ability_description_condition_content_poison',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'Invincible':
        if (notFirst) {
          str = this.getUiString(
            'ability_description_condition_content_invincible_minimal'
          );
        }
        str = this.getWithTarget(
          'ability_description_condition_content_invincible',
          param1
        );
        break;
      case 'Paralysis':
        if (notFirst) {
          str = this.getUiString(
            'ability_description_condition_content_paralysis_minimal'
          );
        }
        str = this.getWithTarget(
          'ability_description_condition_content_paralysis',
          param1
        );
        break;
      case 'Frozen':
        if (notFirst) {
          str = this.getUiString(
            'ability_description_condition_content_member_frozen_minimal'
          );
        }
        str = this.getWithTarget(
          'ability_description_condition_content_member_frozen',
          param1
        );
        break;
      case 'FeverPoint':
        if (notFirst) {
          str = this.getWithPercent(
            'ability_description_condition_content_fever_point_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndPercent(
          'ability_description_condition_content_fever_point',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'Stunify':
        if (notFirst) {
          str = this.getWithPercent(
            'ability_description_condition_content_stunify_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndPercent(
          'ability_description_condition_content_stunify',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'PinchSlayer':
        str = this.getWithTargetAndPercent(
          'ability_description_condition_content_stun_wince_slayer',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'DebuffResistance':
        if (notFirst) {
          str = this.getWithPercent(
            'ability_description_condition_content_debuf_resistance_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndPercent(
          'ability_description_condition_content_debuf_resistance',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'Piercing':
        // should throw error here
        return '';
      case 'Flying':
        // should throw error here
        return '';
      case 'PowerFlipDamage':
        // should throw error here
        return '';
      case 'DirectDamage':
        if (notFirst) {
          str = this.getWithPercent(
            'ability_description_condition_content_direct_damage_minimal',
            param2.data.computeStrength(this.level)
          );
        }
        str = this.getWithTargetAndPercent(
          'ability_description_condition_content_direct_damage',
          param1,
          param2.data.computeStrength(this.level)
        );
        break;
      case 'Silence':
        str = this.getUiString('ability_description_condition_content_silence');
        break;
      case 'AdditionalDirectAttack':
        str = this.stringfyAdditionalDirectAttack(
          param2.data,
          param2,
          notFirst
        );
        break;
      case 'Speedup':
        // should throw error here
        return '';
    }
    return this.stringfyFlipLimitOrFrame(limit, frame) + str;
  }

  stringfyConditionBattleContent(
    param1: Content,
    frame: number | undefined,
    limit: number | undefined
  ): string {
    const param1kind = param1.data.convert('ConditionChangeContent');
    let str = '';
    switch (param1kind) {
      case 'AttackPoint':
        // should throw error here
        return '';
      case 'SkillDamage':
        // should throw error here
        return '';
      case 'ElementResistance':
        // should throw error here
        return '';
      case 'ElementDamageCut':
        // should throw error here
        return '';
      case 'CharacterSlayer':
        // should throw error here
        return '';
      case 'Regeneration':
        // should throw error here
        return '';
      case 'Poison':
        // should throw error here
        return '';
      case 'Invincible':
        // should throw error here
        return '';
      case 'Paralysis':
        // should throw error here
        return '';
      case 'Frozen':
        // should throw error here
        return '';
      case 'FeverPoint':
        // should throw error here
        return '';
      case 'Stunify':
        // should throw error here
        return '';
      case 'PinchSlayer':
        // should throw error here
        return '';
      case 'DebuffResistance':
        // should throw error here
        return '';
      case 'Piercing':
        str = this.getUiString(
          'ability_description_condition_content_piercing'
        );
        break;
      case 'Flying':
        str = this.getUiString('ability_description_condition_content_flying');
        break;
      case 'PowerFlipDamage':
        str = this.getWithPercent(
          'ability_description_condition_content_power_flip_damage',
          param1.data.computeStrength(this.level)
        );
        break;
      case 'DirectDamage':
        // should throw error here
        return '';
      case 'Silence':
        // should throw error here
        return '';
      case 'AdditionalDirectAttack':
        // should throw error here
        return '';
      case 'Speedup':
        str = this.getWithPercent(
          'ability_description_condition_content_power_flip_damage',
          param1.data.computeStrength(this.level)
        );
        break;
    }
    return this.stringfyFlipLimitOrFrame(limit, frame) + str;
  }

  stringfyCommonContent(
    param1: Content,
    limit: number | undefined,
    notFirst = false
  ): string {
    const param1kind = param1.data.convert('CommonAbilityContent');
    switch (param1kind) {
      case 'Battle':
        return this.stringfyCommonBattleContent(param1, limit);
      case 'Character':
        return this.stringfyCommonCharacterContent(
          param1,
          param1,
          limit,
          notFirst
        );
      default:
        return '';
    }
  }

  stringfyCommonCharacterContent(
    param1: Content,
    param2: Content,
    limit: number | undefined,
    notFirst = false
  ): string {
    const param2kind = param2.data.convert('CommonAbilityCharacterContent');
    const threshold = param2.data.computeStrength(this.level);
    // INFO: Character Groups may be wrong here
    const characterGroups = param1.data?.characterGroups ?? [];
    switch (param2kind) {
      case 'AttackPoint':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_attack_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_attack',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'DirectDamage':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_direct_damage_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_direct_damage',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'SkillDamage':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_skill_damage_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_skill_damage',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'SkillGaugeCharging':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_skill_gauge_chaging_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_skill_gauge_chaging',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'ElementResistance':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithElementTargetWithPercent(
              'ability_description_common_content_element_resistance_minimal',
              param2.data.type,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndElementTargetWithPercent(
            'ability_description_common_content_element_resistance',
            param1,
            param2.data.type,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'ElementDamageCut':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithElementTargetWithCountDown(
              'ability_description_common_content_element_resistance_minimal',
              param2.data.type,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndElementTargetWithPercent(
            'ability_description_common_content_element_resistance',
            param1,
            param2.data.type,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'FeverPoint':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_skill_gauge_chaging_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_skill_gauge_chaging',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'Stunify':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_stunify_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_stunify',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'CharacterSlayer':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithConstraintAndPercent(
              'ability_description_common_content_character_slayer_minimal',
              characterGroups,
              true,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndConstraintAndPercent(
            'ability_description_common_content_character_slayer',
            param1,
            characterGroups,
            true,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'PinchSlayer':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_stun_wince_slayer_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_stun_wince_slayer',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'DebuffResistance':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_debuf_resistance_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_debuf_resistance',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'EaseOfHeal':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_ease_of_heal_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_ease_of_heal',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'Scapegoat':
        if (notFirst) {
          return (
            this.stringfyPrefixTriggerLimit(limit, true) +
            this.getUiString(
              'ability_description_common_content_scapegoat_minimal'
            )
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, true) +
          this.getWithTarget(
            'ability_description_common_content_scapegoat',
            param1
          )
        );
      case 'AdditionalDirectAttack':
        return this.stringfyAdditionalDirectAttack(
          param2.data,
          param2,
          notFirst
        );
      case 'PoisonStrength':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_poison_strength_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_poison_strength',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'ConditionPrevent':
        if (notFirst) {
          return (
            this.stringfyPrefixTriggerLimit(limit, true) +
            this.getWithConditionTarget(
              'ability_description_common_content_condition_prevent_minimal',
              param2.data,
              false
            )
          );
        }
        return (
          this.stringfyPrefixTriggerLimit(limit, true) +
          this.getWithTargetAndConditionTarget(
            'ability_description_common_content_condition_prevent',
            param1,
            param2.data,
            false
          )
        );
      case 'ConditionSlayer': {
        const kind = param2.data.convert('ConditionSlayerAttackKind');
        switch (kind) {
          case 'All':
            if (notFirst) {
              return this.stringfyMaxStrengthPercent(
                this.getWithConditionTargetAndPercent(
                  'ability_description_common_content_condition_slayer_minimal',
                  param1.data,
                  threshold,
                  true
                ),
                limit,
                true,
                threshold
              );
            }
            return this.stringfyMaxStrengthPercent(
              this.getWithTargetAndConditionTargetAndPercent(
                'ability_description_common_content_condition_slayer',
                param1,
                param1.data,
                threshold,
                true
              ),
              limit,
              true,
              threshold
            );
          case 'DirectAttack':
            if (notFirst) {
              return this.stringfyMaxStrengthPercent(
                this.getWithConditionTargetAndPercent(
                  'ability_description_common_content_condition_slayer_for_direct_attack_minimal',
                  param1.data,
                  threshold,
                  true
                ),
                limit,
                true,
                threshold
              );
            }
            return this.stringfyMaxStrengthPercent(
              this.getWithTargetAndConditionTargetAndPercent(
                'ability_description_common_content_condition_slayer_for_direct_attack',
                param1,
                param1.data,
                threshold,
                true
              ),
              limit,
              true,
              threshold
            );
          default:
            return '';
        }
      }
      case 'ConditionShare':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithConditionShareWithPercent(
              'ability_description_common_content_condition_share_minimal',
              param2.data.type,
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndConditionShareWithPercent(
            'ability_description_common_content_condition_share',
            param1,
            param2.data.type,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'SecondSkillGauge':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithPercent(
              'ability_description_common_content_second_skill_gauge_minimal',
              threshold
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndPercent(
            'ability_description_common_content_second_skill_gauge',
            param1,
            threshold
          ),
          limit,
          true,
          threshold
        );
      case 'ResistanceToConditionEnemy':
        if (notFirst) {
          return this.stringfyMaxStrengthPercent(
            this.getWithConditionTargetAndPercent(
              'ability_description_common_content_resistance_to_condition_enemy_minimal',
              param1.data,
              threshold,
              true
            ),
            limit,
            true,
            threshold
          );
        }
        return this.stringfyMaxStrengthPercent(
          this.getWithTargetAndConditionTargetAndPercent(
            'ability_description_common_content_resistance_to_condition_enemy',
            param1,
            param1.data,
            threshold,
            true
          ),
          limit,
          true,
          threshold
        );
      default:
        return '';
    }
  }

  stringfyCommonBattleContent(
    param1: Content,
    limit: number | undefined
  ): string {
    const param1kind = param1.data.convert('CommonAbilityBattleContent');
    switch (param1kind) {
      case 'PowerFlipDamage':
        return this.stringfyMaxStrengthPercent(
          this.getWithPercent(
            'ability_description_common_content_power_flip_damage',
            param1.data.computeStrength(this.level)
          ),
          limit,
          true,
          param1.data.computeStrength(this.level)
        );
      case 'PowerFlipLv1Damage':
        return this.stringfyMaxStrengthPercent(
          this.getWithPercentAndLevel(
            'ability_description_common_content_power_flip_damage_lv',
            param1.data.computeStrength(this.level),
            1
          ),
          limit,
          true,
          param1.data.computeStrength(this.level)
        );
      case 'PowerFlipLv2Damage':
        return this.stringfyMaxStrengthPercent(
          this.getWithPercentAndLevel(
            'ability_description_common_content_power_flip_damage_lv',
            param1.data.computeStrength(this.level),
            2
          ),
          limit,
          true,
          param1.data.computeStrength(this.level)
        );
      case 'PowerFlipLv3Damage':
        return this.stringfyMaxStrengthPercent(
          this.getWithPercentAndLevel(
            'ability_description_common_content_power_flip_damage_lv',
            param1.data.computeStrength(this.level),
            3
          ),
          limit,
          true,
          param1.data.computeStrength(this.level)
        );
      case 'FeverTime':
        return this.stringfyMaxStrengthPercent(
          this.getWithPercent(
            'ability_description_common_content_fever_time',
            param1.data.computeStrength(this.level)
          ),
          limit,
          true,
          param1.data.computeStrength(this.level)
        );
      case 'PowerFlipComboCountDown':
        return this.stringfyMaxStrengthPercent(
          this.getWithStrengthCountDown(
            'ability_description_common_content_power_flip_combo_count_down',
            param1.data.computeStrength(this.level)
          ),
          limit,
          true,
          param1.data.computeStrength(this.level)
        );
      case 'Speedup':
        return this.stringfyMaxStrengthPercent(
          this.getWithPercent(
            'ability_description_common_content_speedup',
            param1.data.computeStrength(this.level)
          ),
          limit,
          true,
          param1.data.computeStrength(this.level)
        );
      default:
        return '';
    }
  }

  stringfyCharacterGroups(
    characterGroups: Array<string>,
    isTargetEnemy: boolean
  ): string {
    const groups = [] as Array<string>;
    characterGroups.forEach((group) => {
      const type = CharacterGroup.isType(group);
      let groupstr = '';
      switch (type) {
        case 'Element':
          groupstr = CharacterGroup.Element.parseFull(group, this.container);
          break;
        case 'Speciality':
          groupstr =
            CharacterGroup.Speciality.parse(group, this.container) +
            this.getUiString(
              'ability_description_character_group_speciality_suffix'
            );
          break;
        case 'Race':
          groupstr = this.container.getUiStringWithContext(
            'ability_description_character_group_race_brackets',
            {
              race: CharacterGroup.Race.parse(group, this.container)
            }
          );
          break;
        case 'Gender':
          groupstr = CharacterGroup.Gender.parse(group, this.container);
          break;
        // TODO: Character Group CharacterTag
        // case 'CharacterTag':
        //   groupstr = CharacterGroup.CharacterTag.parse(group, this.container);
        //   break;
      }
      groups.push(groupstr);
    });
    let result = '';
    groups.forEach((group, index) => {
      if (index === 0) {
        result = group;
      } else if (index === groups.length - 1) {
        result =
          result +
          this.getUiString('ability_description_target_separator_or') +
          group;
      } else {
        result =
          result +
          this.getUiString('ability_description_target_separator') +
          group;
      }
    });
    const post = isTargetEnemy
      ? this.getUiString('ability_description_target_enemy')
      : this.getUiString('ability_description_target_ally');
    return result + post;
  }

  stringfyCharacterAtTrigger(param1: string, param2: Array<string>): string {
    let key = '';
    const conj = this.stringfyConjuctionTriggerLimit(1);
    if (param1.includes('Leader')) {
      key = 'ability_description_instant_trigger_kind_leader_character';
    }
    if (param1.includes('Second')) {
      key = 'ability_description_instant_trigger_kind_second_character';
    }
    if (param1.includes('Third')) {
      key = 'ability_description_instant_trigger_kind_third_character';
    }
    const str = this.container.getUiStringWithContext(key, {
      constraint: this.stringfyCharacterGroups(param2, false)
    });
    return str + conj;
  }

  stringfyBattleCountUp(param1: string, threshold: number | undefined): string {
    if (param1.includes('PowerFlip')) {
      return this.getWithStrengthCountUp(
        'ability_description_instant_content_count_up_power_flip',
        threshold
      );
    }
    if (param1.includes('Fever')) {
      return this.getWithStrengthCountUp(
        'ability_description_instant_content_count_up_fever',
        threshold
      );
    }
    if (param1.includes('EnemyKill')) {
      return this.getWithStrengthCountUp(
        'ability_description_instant_content_count_up_enemy_kill',
        threshold
      );
    }
    return '';
  }

  stringfyAlways(param1: number): string {
    switch (param1) {
      case 0:
        return '';
      case 1:
        return this.getUiString(
          'ability_description_instant_trigger_kind_first_flip'
        );
      default:
        return '';
    }
  }

  // self implementation
  stringfyAdditionalDirectAttack(
    param1: InstantContent | DuringContent,
    param2: Content,
    notFirst: boolean
  ): string {
    const count = Number(/[+-]?\d+(?:\.\d+)?/g.exec(param1.type)?.[0] ?? 2);
    if (param1.strength) {
      if (notFirst) {
        return this.getWithCountAndPercent(
          'ability_description_common_content_aditional_direct_attack_and_damage_minimal',
          count,
          param1.computeStrength(this.level)
        );
      }
      return this.getWithTargetAndCountAndPercent(
        'ability_description_common_content_aditional_direct_attack_and_damage',
        param2,
        count,
        param1.computeStrength(this.level)
      );
    }
    if (notFirst) {
      return this.getWithCount(
        'ability_description_common_content_aditional_direct_attack_minimal',
        count
      );
    }
    return this.getWithTargetAndCount(
      'ability_description_common_content_aditional_direct_attack',
      param2,
      count
    );
  }

  stringfyAbilityTarget(content: Content): string {
    const kind = content.targetKind?.convert('AbilityTargetKind');
    const characterGroups = content.targetKind?.characterGroups ?? [];
    switch (kind) {
      case 'Myself':
        return this.getUiString('ability_description_target_myself');
      case 'ExceptMyself':
        if (content.targetKind?.characterGroups) {
          return this.getWithConstraint(
            'ability_description_target_others_constraint',
            characterGroups,
            false
          );
        }
        return this.getUiString('ability_description_target_others_all');
      case 'Party':
        if (content.targetKind?.characterGroups) {
          return this.getWithConstraint(
            'ability_description_target_ally_constraint',
            characterGroups,
            false
          );
        }
        return this.getUiString('ability_description_target_ally_all');
      case 'UnisonParty':
        return this.getWithConstraint(
          'ability_description_target_unison_party',
          characterGroups,
          false
        );
      case 'Member':
        // self implementation
        switch (content.targetKind?.type) {
          case 'Leader':
            return this.getUiString('ability_description_target_leader');
          case 'Second':
            return this.getWithIndex('ability_description_target_member_at', 2);
          case 'Third':
            return this.getWithIndex('ability_description_target_member_at', 3);
          default:
            return '';
        }
      case 'TriggerPuller':
        return this.getUiString('ability_description_target_trigger_puller');
      case 'Multiball':
        return this.getUiString('ability_description_target_multiball');
      case 'MinHpAbsolute':
        return this.getUiString('ability_description_target_min_hp_absolute');
      case 'MinHpRelative':
        return this.getUiString('ability_description_target_min_hp_relative');
      case 'MinHpAbsoluteExceptMyself':
        return this.getUiString(
          'ability_description_target_min_hp_absolute_except_myself'
        );
      case 'MinHpRelativeExceptMyself':
        return this.getUiString(
          'ability_description_target_min_hp_relative_except_myself'
        );
      default:
        return '';
    }
  }

  isTriggerPullerOmittable(
    kind: string,
    target: Target | undefined,
    param3: boolean
  ): boolean {
    if (kind === 'Myself') {
      if (target) {
        if (target.type === 'Myself') {
          return true;
        }
        return false;
      } else {
        return param3;
      }
    } else {
      return false;
    }
  }

  isInitialTrigger(param1: InstantTrigger): boolean {
    const param1kind = param1.convert('InstantAbilityTriggerKind');
    switch (param1kind) {
      case 'Initial':
        return true;
      case 'Battle':
        return false;
      default:
        return false;
    }
  }

  isContinuationInstantContent(param1: Content): boolean {
    const param1kind = param1.data.convert('InstantAbilityContent');
    switch (param1kind) {
      case 'ConditionCharacter':
        return false;
      case 'ConditionBattle':
        return false;
      case 'Common':
        return true;
      case 'DurationTimeCharacter':
        return false;
      case 'InstantCharacter':
        return this.isContinuationInstantCharacterContent(param1);
      case 'InstantBattle':
        return this.isContinuationInstantBattleContent(param1);
      default:
        return false;
    }
  }

  isContinuationInstantCharacterContent(param1: Content): boolean {
    const param1kind = param1.data.convert(
      'InstantAbilityInstantCharacterContent'
    );
    switch (param1kind) {
      case 'CoffinBaseCountDown':
        return true;
      case 'CoffinBaseCountUp':
        return true;
      case 'Hp':
        return true;
      case 'RatioHeal':
        return false;
      case 'FixedHeal':
        return false;
      case 'RatioDamageMaxHp':
        return false;
      case 'RatioDamageCurrentHp':
        return false;
      case 'FixedDamage':
        return false;
      case 'SkillGauge':
        return false;
      case 'ConditionExtend':
        return true;
      case 'Barrier':
        return false;
      case 'EnemyDamage':
        return false;
      case 'CountUp':
        return false;
      default:
        return false;
    }
  }

  isContinuationInstantBattleContent(param1: Content): boolean {
    const param1kind = param1.data.convert(
      'InstantAbilityInstantBattleContent'
    );
    switch (param1kind) {
      case 'AddFeverPoint':
        return false;
      case 'AddCombo':
        return false;
      case 'CountUp':
        return false;
      default:
        return false;
    }
  }

  getWithTriggerPullerAndTimes(
    id: string,
    param2: TriggerPuller,
    param3: number | undefined,
    param4: boolean,
    param5: Target | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      triggerPuller: this.stringfyTriggerPuller(param2, param4),
      omittable: this.isTriggerPullerOmittable(
        param2.convert('AbilityTriggerPullerKind'),
        param5,
        true
      ),
      once: param3 === 1
    });
  }

  getWithTriggerPullerAndPercent(
    id: string,
    param2: TriggerPuller,
    param3: number | undefined,
    param4: boolean,
    param5: boolean,
    param6: Target | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      triggerPuller: this.stringfyTriggerPuller(param2, param5),
      omittable: this.isTriggerPullerOmittable(
        param2.convert('AbilityTriggerPullerKind'),
        param6,
        true
      ),
      percent: this.stringfyStrengthPercentForTrigger(param3, param4),
      percent_up_down: this.stringfyStrengthPercentUpDownForTrigger(
        param3,
        param4
      )
    });
  }

  getWithTriggerPullerAndConditionTarget(
    id: string,
    param2: TriggerPuller,
    param3: DuringTrigger | InstantTrigger,
    param4: boolean,
    param5: Target | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      triggerPuller: this.stringfyTriggerPuller(param2, param4),
      omittable: this.isTriggerPullerOmittable(
        param2.convert('AbilityTriggerPullerKind'),
        param5,
        true
      ),
      condition: this.stringfyCondtionTarget(param3, false)
    });
  }

  getWithTriggerPuller(
    id: string,
    param2: TriggerPuller,
    param3: boolean,
    param4: Target | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      triggerPuller: this.stringfyTriggerPuller(param2, param3),
      omittable: this.isTriggerPullerOmittable(
        param2.convert('AbilityTriggerPullerKind'),
        param4,
        true
      )
    });
  }

  getWithTimesAndLevel(
    id: string,
    level: number,
    limit: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      once: limit === 1,
      level
    });
  }

  getWithTimes(id: string, limit: number | undefined): string {
    return this.container.getUiStringWithContext(id, {
      once: limit === 1
    });
  }

  getWithTargetAndStrengthCountUp(
    id: string,
    content: Content,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      count: this.stringfyCountUp(threshold)
    });
  }

  getWithTargetAndStrengthCountDown(
    id: string,
    content: Content,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      count: this.stringfyCountDown(threshold)
    });
  }

  getWithTargetAndStrengthCount(
    id: string,
    content: Content,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      count: threshold
    });
  }

  getWithTargetAndPercent(
    id: string,
    content: Content,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithTargetAndElementTargetWithPercent(
    id: string,
    content: Content,
    element: string,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      element: this.strinfyElementTarget(element),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithTargetAndElementTargetWithCountDown(
    id: string,
    content: Content,
    element: string,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      element: this.strinfyElementTarget(element),
      count: this.stringfyCountDown(threshold)
    });
  }

  getWithTargetAndCountAndPercent(
    id: string,
    content: Content,
    count?: number,
    threshold?: number
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold),
      count
    });
  }

  getWithTargetAndCount(id: string, content: Content, count?: number): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      count
    });
  }

  getWithTargetAndConstraintAndPercent(
    id: string,
    content: Content,
    groups: Array<string>,
    param4: boolean,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      constraint: this.stringfyCharacterGroups(groups, param4),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithTargetAndConditionTargetAndPercent(
    id: string,
    content: Content,
    condition: DuringTrigger | InstantTrigger | DuringContent | InstantContent,
    threshold: number | undefined,
    param5: boolean
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      condition: this.stringfyCondtionTarget(condition, param5),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithTargetAndConditionTarget(
    id: string,
    content: Content,
    condition: DuringTrigger | InstantTrigger | DuringContent | InstantContent,
    param4: boolean
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      condition: this.stringfyCondtionTarget(condition, param4)
    });
  }

  getWithTargetAndConditionShareWithPercent(
    id: string,
    content: Content,
    condition: string,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      condition: this.stringfyConditionShareTarget(condition),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithTarget(id: string, content: Content): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content)
    });
  }

  getWithStrengthCountUp(id: string, threshold?: number): string {
    return this.container.getUiStringWithContext(id, {
      count: this.stringfyCountUp(threshold)
    });
  }

  getWithStrengthCountDown(id: string, threshold?: number): string {
    return this.container.getUiStringWithContext(id, {
      count: this.stringfyCountDown(threshold)
    });
  }

  getWithStrengthCount(id: string, threshold?: number): string {
    return this.container.getUiStringWithContext(id, {
      count: threshold
    });
  }

  getWithSecond(id: string, second: number | undefined): string {
    return this.container.getUiStringWithContext(id, {
      second: this.stringfySecond(second)
    });
  }

  getWithPercentAndLevel(
    id: string,
    num: number | undefined,
    level: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      percent: this.stringfyStrengthPercent(num),
      percent_up_down: this.stringfyStrengthPercentUpDown(num),
      level
    });
  }

  getWithPercent(id: string, num?: number): string {
    return this.container.getUiStringWithContext(id, {
      percent: this.stringfyStrengthPercent(num),
      percent_up_down: this.stringfyStrengthPercentUpDown(num),
      times: this.stringfyStrengthTimes(num)
    });
  }

  getWithParameterReferenceTargetAndPercent(
    id: string,
    parameter: string,
    param3: Content,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(param3),
      parameter: this.stringfyParameterReference(parameter),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithParameterReferenceAndPercent(
    id: string,
    parameter: string,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      parameter: this.stringfyParameterReference(parameter),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithIndex(id: string, param2: number): string {
    return this.container.getUiStringWithContext(id, {
      index: param2
    });
  }

  getWithElementTargetWithPercent(
    id: string,
    element: string,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      element: this.strinfyElementTarget(element),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithElementTargetWithCountDown(
    id: string,
    element: string,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      element: this.strinfyElementTarget(element),
      count: this.stringfyCountDown(threshold)
    });
  }

  getWithElementTarget(id: string, element: string): string {
    return this.container.getUiStringWithContext(id, {
      element: this.strinfyElementTarget(element)
    });
  }

  getWithElementParameterReferenceTargetAndPercent(
    id: string,
    element: string,
    parameter: string,
    content: Content,
    threshold?: number
  ): string {
    return this.container.getUiStringWithContext(id, {
      target: this.stringfyAbilityTarget(content),
      element_short: this.stringfyElementShort(element),
      element: this.stringfyElementFull(element),
      parameter: this.stringfyParameterReference(parameter),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithElementParameterReferenceAndPercent(
    id: string,
    element: string,
    parameter: string,
    threshold?: number
  ): string {
    return this.container.getUiStringWithContext(id, {
      element_short: this.stringfyElementShort(element),
      element: this.stringfyElementFull(element),
      parameter: this.stringfyParameterReference(parameter),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithCountAndPercent(
    id: string,
    count?: number,
    threshold?: number
  ): string {
    return this.container.getUiStringWithContext(id, {
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold),
      count
    });
  }

  getWithCount(id: string, count?: number): string {
    return this.container.getUiStringWithContext(id, {
      count
    });
  }

  getWithConstraintAndPercent(
    id: string,
    group: Array<string>,
    param3: boolean,
    threshold?: number
  ): string {
    return this.container.getUiStringWithContext(id, {
      constraint: this.stringfyCharacterGroups(group, param3),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithConstraint(id: string, group: Array<string>, param3: boolean): string {
    return this.container.getUiStringWithContext(id, {
      constraint: this.stringfyCharacterGroups(group, param3)
    });
  }

  getWithConditionTargetAndPercent(
    id: string,
    param2: InstantContent | DuringContent | InstantTrigger | DuringTrigger,
    threshold: number | undefined,
    param4: boolean
  ): string {
    return this.container.getUiStringWithContext(id, {
      condition: this.stringfyCondtionTarget(param2, param4),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getWithConditionTarget(
    id: string,
    param2: InstantContent | DuringContent | InstantTrigger | DuringTrigger,
    param3: boolean
  ): string {
    return this.container.getUiStringWithContext(id, {
      condition: this.stringfyCondtionTarget(param2, param3)
    });
  }

  getWithConditionShareWithPercent(
    id: string,
    param2: string,
    threshold: number | undefined
  ): string {
    return this.container.getUiStringWithContext(id, {
      condition: this.stringfyConditionShareTarget(param2),
      percent: this.stringfyStrengthPercent(threshold),
      percent_up_down: this.stringfyStrengthPercentUpDown(threshold),
      times: this.stringfyStrengthTimes(threshold)
    });
  }

  getPartyConditionTarget(
    id: string,
    param2: InstantContent | DuringContent | InstantTrigger | DuringTrigger
  ): string {
    return this.container.getUiStringWithContext(id, {
      triggerPuller: this.getUiString('ability_description_target_ally_all'),
      omittable: true,
      condition: this.stringfyCondtionTarget(param2, false)
    });
  }

  getContentTriggerLimit(param1: InstantTrigger): number | undefined {
    return param1.triggerLimit;
  }

  getContentDuringTriggerLimit(param1: DuringTrigger): number | undefined {
    return param1.triggerLimit;
  }

  getCharacterCountUpUiString(param1: number | undefined): string {
    if (!param1) {
      return 'ability_description_instant_content_count_up_skill_invoke';
    }
    return '';
  }

  getCharacterCountUpMinimalUiString(param1: number | undefined): string {
    if (!param1) {
      return 'ability_description_instant_content_count_up_skill_invoke_minimal';
    }
    return '';
  }

  getUiString(id: string): string {
    return this.container.getUiString(id);
  }
}
