"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABILITY_INSTANT_TRIGGER_TRANSFORM = void 0;
exports.ABILITY_INSTANT_TRIGGER_TRANSFORM = {
    Initial: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'Always'
    },
    PowerFlip: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    Dash: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    BallFlip: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    Fever: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    MultiballAppear: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    EnemyKill: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    Combo: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Combo'
    },
    Revival: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'CharacterCount'
    },
    HealCount: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'CharacterCount'
    },
    MemberDirectAttack: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'CharacterCount'
    },
    DamageCount: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'CharacterCount'
    },
    SkillInvoke: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'CharacterCount'
    },
    SkillMax: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'CharacterCount'
    },
    HpLow: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'HpLow'
    },
    ConditionAll: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'All',
        ConditionSign: 'Both'
    },
    ConditionDebuff: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'All',
        ConditionSign: 'Bad'
    },
    ConditionBuff: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'All',
        ConditionSign: 'Good'
    },
    ConditionAttackPointUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Good'
    },
    ConditionAttackPointDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Bad'
    },
    ConditionSkillDamageUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'SkillDamage',
        ConditionSign: 'Good'
    },
    ConditionSkillDamageDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'SkillDamage',
        ConditionSign: 'Bad'
    },
    ConditionResistanceUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    ConditionResistanceDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ConditionDamageCut: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'ElementDamageCut',
        ConditionSign: 'Both'
    },
    ConditionInvincible: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Invincible'
    },
    ConditionRegeneration: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Regeneration'
    },
    ConditionPoison: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Poison'
    },
    ConditionParalysis: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Paralysis'
    },
    ConditionFrozen: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Frozen'
    },
    ConditionFeverPointUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'FeverPoint',
        ConditionSign: 'Good'
    },
    ConditionFeverPointDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'FeverPoint',
        ConditionSign: 'Bad'
    },
    ConditionStunifyUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Stunify',
        ConditionSign: 'Good'
    },
    ConditionStunifyDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Stunify',
        ConditionSign: 'Bad'
    },
    ConditionCharacterSlayerUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Good'
    },
    ConditionCharacterSlayerDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Bad'
    },
    ConditionStanWinceSlayerUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'PinchSlayer',
        ConditionSign: 'Good'
    },
    ConditionStanWinceSlayerDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'PinchSlayer',
        ConditionSign: 'Bad'
    },
    ConditionDebuffResistanceUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'DebuffResistance'
    },
    ConditionPiercing: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Piercing'
    },
    ConditionFlying: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Flying'
    },
    ConditionPowerFlipDamageUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'PowerFlipDamage',
        ConditionSign: 'Good'
    },
    ConditionPowerFlipDamageDown: {
        InstantAbilityTriggerKind: 'Battle',
        ConditionTargetKind: 'PowerFlipDamage',
        ConditionSign: 'Bad'
    },
    Member: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'Member'
    },
    MySelf: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'MySelf'
    },
    UnisonMyself: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'UnisonMyself'
    },
    ElementVariety: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'Variety',
        PartyCharacterVarietyKind: 'Element'
    },
    RaceVariety: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'Variety',
        PartyCharacterVarietyKind: 'Race'
    },
    SpecialityVariety: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'Variety',
        PartyCharacterVarietyKind: 'Speciality'
    },
    PowerFlipLv1: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    PowerFlipLv2: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    PowerFlipLv3: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    Leader: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'Leader'
    },
    ConditionDirectDamageUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'DirectDamage',
        ConditionSign: 'Good'
    },
    ConditionDirectDamageDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'DirectDamage',
        ConditionSign: 'Bad'
    },
    ConditionSilence: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Silence'
    },
    ComboDisplay: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Combo'
    },
    LeaderCharacter: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'LeaderCharacter'
    },
    SecondCharacter: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'SecondCharacter'
    },
    ThirdCharacter: {
        InstantAbilityTriggerKind: 'Initial',
        InitialAbilityTriggerKind: 'ThirdCharacter'
    },
    ConditionAdditionalDirectAttack: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'AdditionalDirectAttack'
    },
    ConditionSpeedup: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Condition',
        ConditionTargetKind: 'Speedup'
    },
    FeverPointAddedByAbility: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'Count'
    },
    ElapsedTime: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'ElapsedTime'
    },
    HealHigh: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'HealHigh'
    },
    EnemyConditionAll: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'All',
        ConditionSign: 'Both'
    },
    EnemyConditionDebuff: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'All',
        ConditionSign: 'Bad'
    },
    EnemyConditionBuff: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'All',
        ConditionSign: 'Good'
    },
    EnemyConditionAttackPointUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Good'
    },
    EnemyConditionAttackPointDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Bad'
    },
    EnemyConditionResistanceAllUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Good'
    },
    EnemyConditionResistanceRedUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    EnemyConditionResistanceBlueUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    EnemyConditionResistanceYellowUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    EnemyConditionResistanceGreenUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    EnemyConditionResistanceWhiteUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    EnemyConditionResistanceBlackUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    EnemyConditionResistanceAllDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Bad'
    },
    EnemyConditionResistanceRedDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    EnemyConditionResistanceBlueDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    EnemyConditionResistanceYellowDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    EnemyConditionResistanceGreenDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    EnemyConditionResistanceWhiteDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    EnemyConditionResistanceBlackDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    EnemyConditionDamageCut: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'ElementDamageCut',
        ConditionSign: 'Both'
    },
    EnemyConditionInvincible: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'Invincible'
    },
    EnemyConditionRegeneration: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'Regeneration'
    },
    EnemyConditionPoison: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'Poison'
    },
    EnemyConditionParalysis: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'Paralysis'
    },
    EnemyConditionFrozen: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'Frozen'
    },
    EnemyConditionCharacterSlayerUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Good'
    },
    EnemyConditionCharacterSlayerDown: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Bad'
    },
    EnemyConditionDebuffResistanceUp: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'EnemyCondition',
        ConditionTargetKind: 'PinchSlayer',
        ConditionSign: 'Good'
    },
    SkillHit: {
        InstantAbilityTriggerKind: 'Battle',
        InstantBattleAbilityTriggerKind: 'CharacterCount'
    }
};
//# sourceMappingURL=transform.js.map