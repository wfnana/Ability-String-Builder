export const ABILITY_DURING_TRIGGER_TRANSFORM = {
  HpHigh: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Hp'
  },
  HpLow: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Hp'
  },
  ComboHigh: {
    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Combo'
  },
  ComboLow: {
    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Combo'
  },
  Fever: {
    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Fever'
  },
  Multiball: {
    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Multiball'
  },
  ConditionAll: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'All',
    ConditionSign: 'Both'
  },
  ConditionDebuff: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'All',
    ConditionSign: 'Bad'
  },
  ConditionBuff: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'All',
    ConditionSign: 'Good'
  },
  ConditionAttackPointUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'AttackPoint',
    ConditionSign: 'Good'
  },
  ConditionAttackPointDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'AttackPoint',
    ConditionSign: 'Bad'
  },
  ConditionSkillDamageUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'SkillDamage',
    ConditionSign: 'Good'
  },
  ConditionSkillDamageDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'SkillDamage',
    ConditionSign: 'Bad'
  },
  ConditionResistanceUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'ElementResistance',
    ConditionSign: 'Good'
  },
  ConditionResistanceDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'ElementResistance',
    ConditionSign: 'Bad'
  },
  ConditionDamageCut: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'ElementDamageCut',
    ConditionSign: 'Both'
  },
  ConditionInvincible: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Invincible'
  },
  ConditionRegeneration: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Regeneration'
  },
  ConditionPoison: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Poison'
  },
  ConditionParalysis: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Paralysis'
  },
  ConditionFrozen: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Frozen'
  },
  ConditionFeverPointUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'FeverPoint',
    ConditionSign: 'Good'
  },
  ConditionFeverPointDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'FeverPoint',
    ConditionSign: 'Bad'
  },
  ConditionStunifyUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Stunify',
    ConditionSign: 'Good'
  },
  ConditionStunifyDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Stunify',
    ConditionSign: 'Bad'
  },
  ConditionCharacterSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'CharacterSlayer',
    ConditionSign: 'Good'
  },
  ConditionCharacterSlayerDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'CharacterSlayer',
    ConditionSign: 'Bad'
  },
  ConditionStanWinceSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'PinchSlayer',
    ConditionSign: 'Good'
  },
  ConditionStanWinceSlayerDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'PinchSlayer',
    ConditionSign: 'Bad'
  },
  ConditionDebuffResistanceUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'DebuffResistance'
  },
  ConditionPiercing: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'Piercing',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionFlying: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'Flying',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionPowerFlipDamageUp: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'PowerFlipDamage',
    ConditionSign: 'Good',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionPowerFlipDamageDown: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'PowerFlipDamage',
    ConditionSign: 'Bad',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionCountAll: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'All',
    ConditionSign: 'Both'
  },
  ConditionCountDebuff: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'All',
    ConditionSign: 'Bad'
  },
  ConditionCountBuff: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'All',
    ConditionSign: 'Good'
  },
  ConditionCountAttackPointUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'AttackPoint',
    ConditionSign: 'Good'
  },
  ConditionCountAttackPointDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'AttackPoint',
    ConditionSign: 'Bad'
  },
  ConditionCountSkillDamageUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'SkillDamage',
    ConditionSign: 'Good'
  },
  ConditionCountSkillDamageDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'SkillDamage',
    ConditionSign: 'Bad'
  },
  ConditionCountResistanceUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'ElementResistance',
    ConditionSign: 'Good'
  },
  ConditionCountResistanceDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'ElementResistance',
    ConditionSign: 'Bad'
  },
  ConditionCountDamageCut: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'ElementDamageCut',
    ConditionSign: 'Both'
  },
  ConditionCountInvincible: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Invincible'
  },
  ConditionCountRegeneration: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Regeneration'
  },
  ConditionCountPoison: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Poison'
  },
  ConditionCountParalysis: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Paralysis'
  },
  ConditionCountFrozen: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Frozen'
  },
  ConditionCountFeverPointUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'FeverPoint',
    ConditionSign: 'Good'
  },
  ConditionCountFeverPointDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'FeverPoint',
    ConditionSign: 'Bad'
  },
  ConditionCountStunifyUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Stunify',
    ConditionSign: 'Good'
  },
  ConditionCountStunifyDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Stunify',
    ConditionSign: 'Bad'
  },
  ConditionCountCharacterSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'CharacterSlayer',
    ConditionSign: 'Good'
  },
  ConditionCountCharacterSlayerDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'CharacterSlayer',
    ConditionSign: 'Bad'
  },
  ConditionCountStanWinceSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'PinchSlayer',
    ConditionSign: 'Good'
  },
  ConditionCountStanWinceSlayerDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'PinchSlayer',
    ConditionSign: 'Bad'
  },
  ConditionCountDebuffResistanceUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'DebuffResistance'
  },
  ConditionCountPiercing: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'Piercing',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionCountFlying: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'Flying',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionCountPowerFlipDamageDown: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'PowerFlipDamage',
    ConditionSign: 'Bad',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionCountPowerFlipDamageUp: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'PowerFlipDamage',
    ConditionSign: 'Good',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  EnemyHigh: {
    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'High'
  },
  EnemyLow: {
    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'Low'
  },
  ConditionDirectDamageUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'DirectDamage',
    ConditionSign: 'Good'
  },
  ConditionDirectDamageDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'DirectDamage',
    ConditionSign: 'Bad'
  },
  ConditionCountDirectDamageUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'DirectDamage',
    ConditionSign: 'Good'
  },
  ConditionCountDirectDamageDown: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'DirectDamage',
    ConditionSign: 'Bad'
  },
  ConditionSilence: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Silence'
  },
  ConditionCountSilence: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'Silence'
  },
  Barrier: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Barrier'
  },
  ConditionAdditionalDirectAttack: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'AdditionalDirectAttack'
  },
  ConditionCountAdditionalDirectAttack: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'Condition',
    ConditionTargetKind: 'AdditionalDirectAttack'
  },
  AttackUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Attack'
  },
  SkillDamageUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'SkillDamage'
  },
  ResistanceAllElementUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Resistance'
  },
  ResistanceRedUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Resistance'
  },
  ResistanceBlueUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Resistance'
  },
  ResistanceYellowUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Resistance'
  },
  ResistanceGreenUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Resistance'
  },
  ResistanceWhiteUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Resistance'
  },
  ResistanceBlackUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Resistance'
  },
  FeverPointUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'FeverPoint'
  },
  StunifyUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'Stunify'
  },
  CharacterSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'CharacterSlayer'
  },
  StunWinceSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'StunWinceSlayer'
  },
  DebuffResistanceUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'DebuffResistance'
  },
  PowerFlipDamageUp: {
    DuringAbilityTriggerKind: 'Battle',
    DuringBattleAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'DebuffResistance'
  },
  AttackPointUpSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'AttackPoint',
    ConditionSign: 'Good',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  AttackPointDownSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'AttackPoint',
    ConditionSign: 'Bad',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  DamageCutSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'ElementDamageCut',
    ConditionSign: 'Both',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  InvincibleSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'Invincible',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  RegenerationSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'Regeneration',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  PoisonSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'Poison',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  ParalysisSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'Paralysis',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  FrozenSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'Frozen',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  CharacterSlayerUpSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'CharacterSlayer',
    ConditionSign: 'Good',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  CharacterSlayerDownSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'CharacterSlayer',
    ConditionSign: 'Bad'
  },
  DebuffResistanceUpSlayerUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    ConditionTargetKind: 'DebuffResistance',
    CharacterFloatParameterKind: 'ConditionSlayer'
  },
  ConditionSpeedup: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'Speedup',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  ConditionCountSpeedup: {
    DuringAbilityTriggerKind: 'Battle',
    ConditionTargetKind: 'Speedup',
    DuringBattleAbilityTriggerKind: 'Condition'
  },
  MaxHpUp: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'ParameterUp',
    CharacterFloatParameterKind: 'MaxHp'
  },
  SkillGaugeHigh: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'SkillGaugeHigh'
  },
  SkillGaugeLow: {
    DuringAbilityTriggerKind: 'Character',
    DuringCharacterAbilityTriggerKind: 'SkillGaugeLow'
  }
};
