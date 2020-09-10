"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABILITY_DURING_CONTENT_TRANSFORM = void 0;
exports.ABILITY_DURING_CONTENT_TRANSFORM = {
    AttackPoint: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'AttackPoint'
    },
    DirectDamage: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'DirectDamage'
    },
    SkillDamage: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'SkillDamage'
    },
    SkillGaugeCharging: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'SkillGaugeCharging'
    },
    ResistanceAllElement: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementResistance'
    },
    ResistanceRed: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementResistance'
    },
    ResistanceBlue: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementResistance'
    },
    ResistanceYellow: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementResistance'
    },
    ResistanceGreen: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementResistance'
    },
    ResistanceWhite: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementResistance'
    },
    ResistanceBlack: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementResistance'
    },
    DamageCutAllElement: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementDamageCut'
    },
    DamageCutRed: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementDamageCut'
    },
    DamageCutBlue: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementDamageCut'
    },
    DamageCutYellow: {
        CommonAbilityContent: 'Character'
    },
    DamageCutGreen: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementDamageCut'
    },
    DamageCutWhite: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementDamageCut'
    },
    DamageCutBlack: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ElementDamageCut'
    },
    FeverPoint: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'FeverPoint'
    },
    Stunify: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'Stunify'
    },
    CharacterSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'CharacterSlayer'
    },
    StunWinceSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'PinchSlayer'
    },
    DebuffResistance: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'DebuffResistance'
    },
    PowerFlipDamage: {
        CommonAbilityContent: 'Battle',
        CommonAbilityBattleContent: 'PowerFlipDamage'
    },
    AllConditionPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'All',
        ConditionSign: 'Both'
    },
    DebuffPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'All',
        ConditionSign: 'Bad'
    },
    AttackPointDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent'
    },
    SkillDamageDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Bad'
    },
    ResistanceAllDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'SkillDamage',
        ConditionSign: 'Bad'
    },
    ResistanceRedDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceBlueDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceYellowDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceGreenDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceWhiteDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceBlackDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    PoisonPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'Poison'
    },
    ParalysisPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'Paralysis'
    },
    FrozenPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'Frozen'
    },
    FeverPointDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'FeverPoint',
        ConditionSign: 'Bad'
    },
    StunifyDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'Stunify',
        ConditionSign: 'Bad'
    },
    CharacterSlayerDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Bad'
    },
    StanWinceSlayerDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'PinchSlayer',
        ConditionSign: 'Bad'
    },
    PowerFlipDamageDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'PowerFlipDamage',
        ConditionSign: 'Bad',
        AbilityTargetKind: 'Party'
    },
    EaseOfHeal: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'EaseOfHeal'
    },
    Scapegoat: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'Scapegoat'
    },
    DirectAttack2: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'AdditionalDirectAttack'
    },
    DirectAttack3: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'AdditionalDirectAttack'
    },
    DirectDamageDownPrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'DirectDamage',
        ConditionSign: 'Bad'
    },
    SilencePrevent: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionPrevent',
        ConditionTargetKind: 'Silence'
    },
    PowerFlipLv1DamageSlayer: {
        CommonAbilityContent: 'Battle',
        CommonAbilityBattleContent: 'PowerFlipLv1Damage'
    },
    PowerFlipLv2DamageSlayer: {
        CommonAbilityContent: 'Battle',
        CommonAbilityBattleContent: 'PowerFlipLv2Damage'
    },
    PowerFlipLv3DamageSlayer: {
        CommonAbilityContent: 'Battle',
        CommonAbilityBattleContent: 'PowerFlipLv3Damage'
    },
    Speedup: {
        CommonAbilityContent: 'Battle',
        CommonAbilityBattleContent: 'Speedup'
    },
    AllConditionSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'All',
        ConditionSign: 'Both',
        ConditionSlayerAttackKind: 'All'
    },
    DebuffSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'All',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    BuffSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'All',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    AttackPointUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    AttackPointDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceAllUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceRedUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceBlueUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceYellowUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceGreenUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceWhiteUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceBlackUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceAllDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceRedDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceBlueDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceYellowDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceGreenDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceWhiteDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    ResistanceBlackDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    DamageCutSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementDamageCut',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    InvincibleSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Invincible',
        ConditionSlayerAttackKind: 'All'
    },
    RegenerationSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Regeneration',
        ConditionSlayerAttackKind: 'All'
    },
    PoisonSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Poison'
    },
    ParalysisSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Paralysis',
        ConditionSlayerAttackKind: 'All'
    },
    FrozenSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Frozen',
        ConditionSlayerAttackKind: 'All'
    },
    CharacterSlayerUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    CharacterSlayerDownSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'All'
    },
    DebuffResistanceUpSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'PinchSlayer',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'All'
    },
    AllConditionDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'All',
        ConditionSign: 'Both',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    DebuffDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'All',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    BuffDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'All',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    AttackPointUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    AttackPointDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceAllUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceRedUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceBlueUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceYellowUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceGreenUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceWhiteUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceBlackUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceAllDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceRedDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceBlueDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceYellowDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceGreenDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceWhiteDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ResistanceBlackDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    DamageCutDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'ElementDamageCut',
        ConditionSign: 'Both',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    InvincibleDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Invincible',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    RegenerationDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Regeneration',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    PoisonDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Poison',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ParalysisDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Paralysis',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    FrozenDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'Frozen',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    CharacterSlayerUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    CharacterSlayerDownDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Bad',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    DebuffResistanceUpDirectDamageSlayer: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionSlayer',
        ConditionTargetKind: 'PinchSlayer',
        ConditionSign: 'Good',
        ConditionSlayerAttackKind: 'DirectAttack'
    },
    ConditionAttackPointShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionSkillDamageShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionResistanceAllShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionResistanceRedShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionResistanceBlueShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionResistanceYellowShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionResistanceGreenShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionResistanceWhiteShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionResistanceBlackShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionFeverPointShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionStunifyShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionCharacterSlayerShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionStanWinceSlayerShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    ConditionDirectDamageShare: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ConditionShare'
    },
    SecondSkillGauge: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'SecondSkillGauge'
    },
    ResistanceToAllConditionEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'All',
        ConditionSign: 'Both'
    },
    ResistanceToDebuffEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'All',
        ConditionSign: 'Bad'
    },
    ResistanceToBuffEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'All',
        ConditionSign: 'Good'
    },
    ResistanceToAttackPointUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Good'
    },
    ResistanceToAttackPointDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'AttackPoint',
        ConditionSign: 'Bad'
    },
    ResistanceToResistanceAllUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Good'
    },
    ResistanceToResistanceRedUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    ResistanceToResistanceBlueUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    ResistanceToResistanceYellowUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    ResistanceToResistanceGreenUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    ResistanceToResistanceWhiteUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    ResistanceToResistanceBlackUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Good'
    },
    ResistanceToResistanceAllDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'AllElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceToResistanceRedDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceToResistanceBlueDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceToResistanceYellowDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceToResistanceGreenDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceToResistanceWhiteDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceToResistanceBlackDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementResistance',
        ConditionSign: 'Bad'
    },
    ResistanceToDamageCutEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'ElementDamageCut',
        ConditionSign: 'Both'
    },
    ResistanceToInvincibleEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'Invincible'
    },
    ResistanceToRegenerationEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'Regeneration'
    },
    ResistanceToPoisonEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'Poison'
    },
    ResistanceToParalysisEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'Paralysis'
    },
    ResistanceToFrozenEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'Frozen'
    },
    ResistanceToCharacterSlayerUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Good'
    },
    ResistanceToCharacterSlayerDownEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'CharacterSlayer',
        ConditionSign: 'Bad'
    },
    ResistanceToDebuffResistanceUpEnemy: {
        CommonAbilityContent: 'Character',
        CommonAbilityCharacterContent: 'ResistanceToConditionEnemy',
        ConditionTargetKind: 'PinchSlayer',
        ConditionSign: 'Good'
    }
};
//# sourceMappingURL=transform.js.map