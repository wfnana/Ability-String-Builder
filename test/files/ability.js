"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyLow = exports.MiaLeaderAbility = exports.MultiInstantWithSlash2 = exports.TargetLeader = exports.DuringHPLow = exports.LampGuideLeader = exports.EnemyDamage = exports.ComplimentOiran = exports.NegativeCount = exports.SecondSkillGuage = exports.MultiDuringWithSlash = exports.MultiInstantWithAnd = exports.MultiInstantWithSlash = exports.SingleInstant = void 0;
exports.SingleInstant = [
    {
        id: 11,
        stringId: 'alk_1',
        unisonable: true,
        statueGroupId: 'attack_common',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Party'
                },
                strength: {
                    power1: 0.05,
                    firstMax: 0.1
                }
            }
        }
    }
];
exports.MultiInstantWithSlash = [
    {
        id: 1210033,
        stringId: 'lightbullet_wiz_ny20_3',
        unisonable: false,
        statueGroupId: 'attack_common',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'SkillInvoke',
                triggerPuller: {
                    type: 'TotalOfParty',
                    characterGroups: ['Blue']
                },
                threshold: {
                    power1: 1,
                    firstMax: 1
                },
                triggerLimit: 5
            },
            instantContent: {
                type: 'SkillDamage',
                target: {
                    type: 'Myself'
                },
                strength: {
                    power1: 0.1,
                    firstMax: 0.2
                }
            }
        }
    },
    {
        id: 1210033,
        stringId: 'lightbullet_wiz_ny20_3',
        unisonable: false,
        statueGroupId: 'attack_common',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'SkillInvoke',
                triggerPuller: {
                    type: 'TotalOfParty',
                    characterGroups: ['Blue']
                },
                threshold: {
                    power1: 1,
                    firstMax: 1
                }
            },
            instantContent: {
                type: 'SkillGauge',
                target: {
                    type: 'Myself'
                },
                strength: {
                    power1: 0.05,
                    firstMax: 0.1
                }
            }
        }
    }
];
exports.MultiInstantWithAnd = [
    {
        id: 1110043,
        stringId: 'battle_maid_xm19_3',
        unisonable: false,
        statueGroupId: 'action_skill',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'SkillInvoke',
                triggerPuller: {
                    type: 'Myself'
                },
                threshold: {
                    power1: 1,
                    firstMax: 1
                }
            },
            instantContent: {
                type: 'SkillGauge',
                target: {
                    type: 'Party',
                    characterGroups: ['Red']
                },
                strength: {
                    power1: 0.05,
                    firstMax: 0.1
                }
            }
        }
    },
    {
        id: 1110043,
        stringId: 'battle_maid_xm19_3',
        unisonable: false,
        statueGroupId: 'action_skill',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'SkillInvoke',
                triggerPuller: {
                    type: 'Myself'
                },
                threshold: {
                    power1: 1,
                    firstMax: 1
                },
                triggerLimit: 3
            },
            instantContent: {
                type: 'RatioHeal',
                target: {
                    type: 'Party',
                    characterGroups: ['Red']
                },
                strength: {
                    power1: 0.025,
                    firstMax: 0.05
                }
            }
        }
    }
];
exports.MultiDuringWithSlash = [
    {
        id: 1210043,
        stringId: 'ice_witch_3',
        unisonable: false,
        statueGroupId: 'special',
        trigger: {
            type: 'During',
            precondition: {
                type: 'Always'
            },
            duringTrigger: {
                type: 'HpHigh',
                triggerPuller: {
                    type: 'OneOfParty',
                    characterGroups: ['Blue']
                },
                threshold: {
                    power1: 0.8,
                    firstMax: 0.8
                }
            },
            duringContent: {
                type: 'ResistanceRed',
                target: {
                    type: 'TriggerPuller'
                },
                strength: {
                    power1: 0.15,
                    firstMax: 0.3
                }
            }
        }
    },
    {
        id: 1210043,
        stringId: 'ice_witch_3',
        unisonable: false,
        statueGroupId: 'special',
        trigger: {
            type: 'During',
            precondition: {
                type: 'Always'
            },
            duringTrigger: {
                type: 'HpHigh',
                triggerPuller: {
                    type: 'OneOfParty',
                    characterGroups: ['Blue']
                },
                threshold: {
                    power1: 0.8,
                    firstMax: 0.8
                }
            },
            duringContent: {
                type: 'AttackPoint',
                target: {
                    type: 'TriggerPuller'
                },
                strength: {
                    power1: 0.3,
                    firstMax: 0.6
                }
            }
        }
    }
];
exports.SecondSkillGuage = [
    {
        id: 5040019,
        stringId: '',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Instant',
            precondition: { type: 'MySelf', characterGroups: ['Red'] },
            instantTrigger: {
                type: 'SkillHit',
                triggerPuller: { type: 'Myself' },
                threshold: { power1: 1, firstMax: 1 },
                triggerLimit: 120
            },
            instantContent: {
                type: 'AttackPoint',
                target: { type: 'Myself' },
                strength: { power1: 0.0025, firstMax: 0.01 }
            }
        }
    },
    {
        id: 5040019,
        stringId: '',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Instant',
            precondition: { type: 'Always' },
            instantTrigger: {
                type: 'SkillInvoke',
                triggerPuller: { type: 'Myself' },
                threshold: { power1: 1, firstMax: 1 },
                triggerLimit: 4
            },
            instantContent: {
                type: 'SkillDamage',
                target: { type: 'Party', characterGroups: ['Red'] },
                strength: { power1: 0.075, firstMax: 0.3 }
            }
        }
    },
    {
        id: 5040019,
        stringId: '',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Instant',
            precondition: { type: 'MySelf', characterGroups: ['Red'] },
            instantTrigger: { type: 'Initial' },
            instantContent: {
                type: 'SecondSkillGauge',
                target: { type: 'Myself' },
                strength: { power1: 0.1, firstMax: 0.4 }
            }
        }
    }
];
exports.NegativeCount = [
    {
        id: 9200553,
        stringId: 'wind_dragon_3',
        unisonable: false,
        statueGroupId: 'power_flip',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'ComboDisplay',
                threshold: {
                    power1: 50,
                    firstMax: 50
                },
                triggerLimit: 10
            },
            instantContent: {
                type: 'PowerFlipLv3DamageSlayer',
                strength: {
                    power1: 0.025,
                    firstMax: 0.05
                }
            }
        }
    },
    {
        id: 9200553,
        stringId: 'wind_dragon_3',
        unisonable: false,
        statueGroupId: 'power_flip',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'PowerFlipComboCountDown',
                strength: {
                    power1: -20,
                    firstMax: -10
                }
            }
        }
    }
];
exports.ComplimentOiran = [
    {
        id: 111006,
        stringId: 'compliment_oiran',
        statueGroupId: '',
        unisonable: true,
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Party',
                    characterGroups: ['Red']
                },
                strength: {
                    power1: 0.25,
                    firstMax: 0.3
                }
            }
        }
    },
    {
        id: 111006,
        stringId: 'compliment_oiran',
        statueGroupId: '',
        unisonable: true,
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Multiball'
                },
                strength: {
                    power1: 1.05,
                    firstMax: 1.5
                }
            }
        }
    },
    {
        id: 111006,
        stringId: 'compliment_oiran',
        statueGroupId: '',
        unisonable: true,
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'Hp',
                target: {
                    type: 'Multiball'
                },
                strength: {
                    power1: 0.2,
                    firstMax: 0.25
                }
            }
        }
    }
];
exports.EnemyDamage = [
    {
        id: 1510143,
        stringId: 'lamp_guide_3',
        unisonable: false,
        statueGroupId: 'attack_white',
        trigger: {
            type: 'Instant',
            precondition: { type: 'Always' },
            instantTrigger: { type: 'Initial' },
            instantContent: {
                type: 'Hp',
                target: { type: 'Myself' },
                strength: { power1: 0.1, firstMax: 0.2 }
            }
        }
    },
    {
        id: 1510143,
        stringId: 'lamp_guide_3',
        unisonable: false,
        statueGroupId: 'attack_white',
        trigger: {
            type: 'Instant',
            precondition: { type: 'Always' },
            instantTrigger: {
                type: 'SkillInvoke',
                triggerPuller: { type: 'Myself' },
                threshold: { power1: 1, firstMax: 1 }
            },
            instantContent: {
                type: 'EnemyDamageByMaxHpWhite',
                target: { type: 'Myself' },
                strength: { power1: 15, firstMax: 30 }
            }
        }
    }
];
exports.LampGuideLeader = [
    {
        id: 151014,
        stringId: 'lamp_guide',
        statueGroupId: '',
        unisonable: true,
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'Hp',
                target: {
                    type: 'Party',
                    characterGroups: ['White']
                },
                strength: {
                    power1: 0.1,
                    firstMax: 0.15
                }
            }
        }
    },
    {
        id: 151014,
        stringId: 'lamp_guide',
        statueGroupId: '',
        unisonable: true,
        trigger: {
            type: 'During',
            precondition: {
                type: 'Always'
            },
            duringTrigger: {
                type: 'Barrier',
                triggerPuller: {
                    type: 'Leader'
                }
            },
            duringContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Party',
                    characterGroups: ['White']
                },
                strength: {
                    power1: 0.6,
                    firstMax: 0.8
                }
            }
        }
    }
];
exports.DuringHPLow = [
    {
        id: 5100006,
        stringId: '',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'During',
            precondition: {
                type: 'Always'
            },
            duringTrigger: {
                type: 'HpLow',
                triggerPuller: {
                    type: 'TotalOfParty'
                },
                threshold: {
                    power1: 0.5,
                    firstMax: 0.5
                }
            },
            duringContent: {
                type: 'SkillDamage',
                target: {
                    type: 'Party',
                    characterGroups: ['Black']
                },
                strength: {
                    power1: 0.35,
                    firstMax: 1.4
                }
            }
        }
    },
    {
        id: 5100006,
        stringId: '',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'HpLow',
                triggerPuller: {
                    type: 'OneOfParty',
                    characterGroups: ['Black']
                },
                threshold: {
                    power1: 0.2,
                    firstMax: 0.2
                },
                triggerLimit: 4
            },
            instantContent: {
                type: 'RatioHeal',
                target: {
                    type: 'TriggerPuller'
                },
                strength: {
                    power1: 0.0125,
                    firstMax: 0.05
                }
            }
        }
    },
    {
        id: 5100006,
        stringId: '',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'SkillInvoke',
                triggerPuller: {
                    type: 'OneOfParty',
                    characterGroups: ['Black']
                },
                threshold: {
                    power1: 1,
                    firstMax: 1
                },
                triggerLimit: 3
            },
            instantContent: {
                type: 'SkillGauge',
                target: {
                    type: 'TriggerPuller'
                },
                strength: {
                    power1: 0.025,
                    firstMax: 0.1
                }
            }
        }
    }
];
exports.TargetLeader = [
    {
        id: 1110072,
        stringId: 'black_wolf_knight_2',
        unisonable: true,
        statueGroupId: 'attack_red',
        trigger: {
            type: 'During',
            precondition: {
                type: 'Always'
            },
            duringTrigger: {
                type: 'ConditionPiercing'
            },
            duringContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Myself'
                },
                strength: {
                    power1: 0.1,
                    firstMax: 0.2
                }
            }
        }
    },
    {
        id: 1110072,
        stringId: 'black_wolf_knight_2',
        unisonable: true,
        statueGroupId: 'attack_red',
        trigger: {
            type: 'During',
            precondition: {
                type: 'Always'
            },
            duringTrigger: {
                type: 'ConditionPiercing'
            },
            duringContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Leader'
                },
                strength: {
                    power1: 0.2,
                    firstMax: 0.4
                }
            }
        }
    }
];
exports.MultiInstantWithSlash2 = [
    {
        id: 1310053,
        stringId: 'mighty_striker_3',
        unisonable: false,
        statueGroupId: 'attack_common',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Combo',
                threshold: {
                    power1: 30,
                    firstMax: 30
                },
                triggerLimit: 1
            },
            instantContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Myself'
                },
                strength: {
                    power1: 0.15,
                    firstMax: 0.3
                }
            }
        }
    },
    {
        id: 1310053,
        stringId: 'mighty_striker_3',
        unisonable: false,
        statueGroupId: 'attack_common',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Combo',
                threshold: {
                    power1: 50,
                    firstMax: 50
                },
                triggerLimit: 1
            },
            instantContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Myself'
                },
                strength: {
                    power1: 0.25,
                    firstMax: 0.5
                }
            }
        }
    },
    {
        id: 1310053,
        stringId: 'mighty_striker_3',
        unisonable: false,
        statueGroupId: 'attack_common',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Combo',
                threshold: {
                    power1: 100,
                    firstMax: 100
                },
                triggerLimit: 1
            },
            instantContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Myself'
                },
                strength: {
                    power1: 0.5,
                    firstMax: 1
                }
            }
        }
    }
];
exports.MiaLeaderAbility = [
    {
        id: 241001,
        stringId: 'tiger_treasure_hunter',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Opening',
            opening: {
                type: 'ManaBoost',
                strength: {
                    power1: 0.03,
                    firstMax: 0.05
                }
            }
        }
    },
    {
        id: 241001,
        stringId: 'tiger_treasure_hunter',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Party',
                    characterGroups: ['Green']
                },
                strength: {
                    power1: 0.12,
                    firstMax: 0.15
                }
            }
        }
    },
    {
        id: 241001,
        stringId: 'tiger_treasure_hunter',
        unisonable: true,
        statueGroupId: '',
        trigger: {
            type: 'Instant',
            precondition: {
                type: 'Always'
            },
            instantTrigger: {
                type: 'Initial'
            },
            instantContent: {
                type: 'Hp',
                target: {
                    type: 'Party',
                    characterGroups: ['Green']
                },
                strength: {
                    power1: 0.08,
                    firstMax: 0.1
                }
            }
        }
    }
];
exports.EnemyLow = [
    {
        id: 1310035,
        stringId: 'samurai_xm19_5',
        unisonable: true,
        statueGroupId: 'attack_common',
        trigger: {
            type: 'During',
            precondition: {
                type: 'Always'
            },
            duringTrigger: {
                type: 'EnemyLow',
                threshold: {
                    power1: 1,
                    firstMax: 1
                }
            },
            duringContent: {
                type: 'AttackPoint',
                target: {
                    type: 'Myself'
                },
                strength: {
                    power1: 0.3,
                    firstMax: 0.6
                }
            }
        }
    }
];
//# sourceMappingURL=ability.js.map