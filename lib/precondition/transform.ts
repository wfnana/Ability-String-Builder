export const ABILITY_PRECONDITION_TRANSFORM = {
  Always: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'Always'
  },
  Member: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'Member'
  },
  MySelf: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'MySelf'
  },
  UnisonMyself: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'UnisonMyself'
  },
  ElementVariety: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'Variety',
    PartyCharacterVarietyKind: 'Element'
  },
  RaceVariety: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'Variety',
    PartyCharacterVarietyKind: 'Race'
  },
  SpecialityVariety: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'Variety',
    PartyCharacterVarietyKind: 'Speciality'
  },
  HpHigh: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  HpLow: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ComboHigh: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Combo'
  },
  ComboLow: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Combo'
  },
  Fever: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Fever'
  },
  Multiball: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Multiball'
  },
  ConditionAll: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionDebuff: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionBuff: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionAttackPointUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionAttackPointDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionSkillDamageUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionSkillDamageDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionResistanceUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionResistanceDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionDamageCut: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionInvincible: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionRegeneration: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionPoison: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionParalysis: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionFrozen: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionFeverPointUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionFeverPointDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionStunifyUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionStunifyDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionCharacterSlayerUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionCharacterSlayerDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionStanWinceSlayerUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionStanWinceSlayerDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionDebuffResistanceUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionPiercing: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Piercing'
  },
  ConditionFlying: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Flying'
  },
  ConditionPowerFlipDamageUp: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'PowerFlipDamage',
    ConditionSign: 'Good'
  },
  ConditionPowerFlipDamageDown: {
    AbilityPreconditionKind: 'During',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'PowerFlipDamage',
    ConditionSign: 'Bad'
  },
  Leader: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'Leader'
  },
  LeaderCharacter: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'LeaderCharacter'
  },
  SecondCharacter: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'SecondCharacter'
  },
  ThirdCharacter: {
    AbilityPreconditionKind: 'Initial',
    InitialAbilityTriggerKind: 'ThirdCharacter'
  },
  EnemyHigh: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Enemy'
  },
  EnemyLow: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Enemy'
  },
  ConditionDirectDamageUp: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionDirectDamageDown: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionSilence: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Character'
  },
  Barrier: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionAdditionalDirectAttack: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Character'
  },
  ConditionSpeedup: {
    AbilityPreconditionKind: 'Initial',

    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Speedup'
  }
};
