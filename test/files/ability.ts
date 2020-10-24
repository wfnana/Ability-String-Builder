export const SingleInstant = [
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
          power1: 5000,
          firstMax: 10000
        }
      }
    }
  }
];

export const MultiInstantWithSlash = [
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
          power1: 100000,
          firstMax: 100000
        },
        triggerLimit: 5
      },
      instantContent: {
        type: 'SkillDamage',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 10000,
          firstMax: 20000
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
          power1: 100000,
          firstMax: 100000
        }
      },
      instantContent: {
        type: 'SkillGauge',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 5000,
          firstMax: 10000
        }
      }
    }
  }
];

export const MultiInstantWithAnd = [
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
          power1: 100000,
          firstMax: 100000
        }
      },
      instantContent: {
        type: 'SkillGauge',
        target: {
          type: 'Party',
          characterGroups: ['Red']
        },
        strength: {
          power1: 5000,
          firstMax: 10000
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
          power1: 100000,
          firstMax: 100000
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
          power1: 2500,
          firstMax: 5000
        }
      }
    }
  }
];

export const MultiDuringWithSlash = [
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
          power1: 80000,
          firstMax: 80000
        }
      },
      duringContent: {
        type: 'ResistanceRed',
        target: {
          type: 'TriggerPuller'
        },
        strength: {
          power1: 15000,
          firstMax: 30000
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
          power1: 80000,
          firstMax: 80000
        }
      },
      duringContent: {
        type: 'AttackPoint',
        target: {
          type: 'TriggerPuller'
        },
        strength: {
          power1: 30000,
          firstMax: 60000
        }
      }
    }
  }
];

export const SecondSkillGuage = [
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
        threshold: {
          power1: 100000,
          firstMax: 100000
        },
        triggerLimit: 120
      },
      instantContent: {
        type: 'AttackPoint',
        target: { type: 'Myself' },
        strength: {
          power1: 250,
          firstMax: 1000
        }
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
        threshold: {
          power1: 100000,
          firstMax: 100000
        },
        triggerLimit: 4
      },
      instantContent: {
        type: 'SkillDamage',
        target: { type: 'Party', characterGroups: ['Red'] },
        strength: {
          power1: 7500,
          firstMax: 30000
        }
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
        strength: {
          power1: 10000,
          firstMax: 40000
        }
      }
    }
  }
];

export const NegativeCount = [
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
          power1: 5000000,
          firstMax: 5000000
        },
        triggerLimit: 10
      },
      instantContent: {
        type: 'PowerFlipLv3DamageSlayer',
        strength: {
          power1: 2500,
          firstMax: 5000
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
          power1: -2000000,
          firstMax: -1000000
        }
      }
    }
  }
];

export const ComplimentOiran = [
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
          power1: 25000,
          firstMax: 30000
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
          power1: 105000,
          firstMax: 150000
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
          power1: 20000,
          firstMax: 25000
        }
      }
    }
  }
];

export const EnemyDamage = [
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
        strength: {
          power1: 10000,
          firstMax: 20000
        }
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
        threshold: {
          power1: 100000,
          firstMax: 100000
        }
      },
      instantContent: {
        type: 'EnemyDamageByMaxHpWhite',
        target: { type: 'Myself' },
        strength: {
          power1: 1500000,
          firstMax: 3000000
        }
      }
    }
  }
];

export const LampGuideLeader = [
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
          power1: 10000,
          firstMax: 15000
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
          power1: 60000,
          firstMax: 80000
        }
      }
    }
  }
];

export const DuringHPLow = [
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
          power1: 50000,
          firstMax: 50000
        }
      },
      duringContent: {
        type: 'SkillDamage',
        target: {
          type: 'Party',
          characterGroups: ['Black']
        },
        strength: {
          power1: 35000,
          firstMax: 140000
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
          power1: 20000,
          firstMax: 20000
        },
        triggerLimit: 4
      },
      instantContent: {
        type: 'RatioHeal',
        target: {
          type: 'TriggerPuller'
        },
        strength: {
          power1: 1250,
          firstMax: 5000
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
          power1: 100000,
          firstMax: 100000
        },
        triggerLimit: 3
      },
      instantContent: {
        type: 'SkillGauge',
        target: {
          type: 'TriggerPuller'
        },
        strength: {
          power1: 2500,
          firstMax: 10000
        }
      }
    }
  }
];

export const TargetLeader = [
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
          power1: 10000,
          firstMax: 20000
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
          power1: 20000,
          firstMax: 40000
        }
      }
    }
  }
];

export const MultiInstantWithSlash2 = [
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
          power1: 3000000,
          firstMax: 3000000
        },
        triggerLimit: 1
      },
      instantContent: {
        type: 'AttackPoint',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 15000,
          firstMax: 30000
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
          power1: 5000000,
          firstMax: 5000000
        },
        triggerLimit: 1
      },
      instantContent: {
        type: 'AttackPoint',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 25000,
          firstMax: 50000
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
          power1: 10000000,
          firstMax: 10000000
        },
        triggerLimit: 1
      },
      instantContent: {
        type: 'AttackPoint',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 50000,
          firstMax: 100000
        }
      }
    }
  }
];

export const MiaLeaderAbility = [
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
          power1: 12000,
          firstMax: 15000
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
          power1: 8000,
          firstMax: 10000
        }
      }
    }
  }
];

export const EnemyLow = [
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
          power1: 100000,
          firstMax: 100000
        }
      },
      duringContent: {
        type: 'AttackPoint',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 30000,
          firstMax: 60000
        }
      }
    }
  }
];

export const ConditionPiercing = [
  {
    id: 2610054,
    stringId: 'warlock_4',
    unisonable: true,
    statueGroupId: 'condition',
    trigger: {
      type: 'Instant',
      precondition: {
        type: 'Always'
      },
      instantTrigger: {
        type: 'Initial'
      },
      instantContent: {
        type: 'PiercingExtend',
        strength: {
          power1: 7500,
          firstMax: 15000
        }
      }
    }
  }
];

export const FeverPoint = [
  {
    id: 2230011,
    stringId: 'pirates_girl_smr20_1',
    unisonable: true,
    statueGroupId: 'fever',
    trigger: {
      type: 'Instant',
      precondition: {
        type: 'MySelf',
        characterGroups: ['Blue']
      },
      instantTrigger: {
        type: 'Initial'
      },
      instantContent: {
        type: 'FeverPoint',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 37500,
          firstMax: 75000
        }
      }
    }
  },
  {
    id: 2230011,
    stringId: 'pirates_girl_smr20_1',
    unisonable: true,
    statueGroupId: 'fever',
    trigger: {
      type: 'Instant',
      precondition: {
        type: 'Always'
      },
      instantTrigger: {
        type: 'Leader'
      },
      instantContent: {
        type: 'AttackPoint',
        target: {
          type: 'Myself'
        },
        strength: {
          power1: 15000,
          firstMax: 30000
        }
      }
    }
  }
];

export const HealHigh = [
  {
    id: 2210026,
    stringId: 'bishop_girl_6',
    unisonable: true,
    statueGroupId: 'attack_blue',
    trigger: {
      type: 'Instant',
      precondition: {
        type: 'Always'
      },
      instantTrigger: {
        type: 'HealHigh',
        triggerPuller: {
          type: 'OneOfParty',
          characterGroups: ['Blue']
        },
        threshold: {
          power1: 100000000,
          firstMax: 100000000
        },
        triggerLimit: 1,
        cooltime: 0
      },
      instantContent: {
        type: 'AttackPoint',
        target: {
          type: 'TriggerPuller'
        },
        strength: {
          power1: 20000,
          firstMax: 40000
        }
      }
    }
  }
];

export const MissingMaxStrength = [
  {
    _id: '5f92b58a689d438405da7ab5',
    id: 5030026,
    stringId: '',
    unisonable: true,
    statueGroupId: '',
    trigger: {
      type: 'Instant',
      precondition: {
        type: 'MySelf',
        characterGroups: ['Green']
      },
      instantTrigger: {
        type: 'DamageCount',
        triggerPuller: {
          type: 'Myself'
        },
        threshold: {
          power1: 500000,
          firstMax: 500000
        },
        triggerLimit: 20,
        cooltime: 0
      },
      instantContent: {
        type: 'PowerFlipDamage',
        strength: {
          power1: 2500,
          firstMax: 5000
        }
      }
    }
  },
  {
    _id: '5f92b58a689d438405da7ab6',
    id: 5030026,
    stringId: '',
    unisonable: true,
    statueGroupId: '',
    trigger: {
      type: 'During',
      precondition: {
        type: 'MySelf',
        characterGroups: ['Green']
      },
      duringTrigger: {
        type: 'EnemyHigh',
        threshold: {
          power1: 100000,
          firstMax: 100000
        },
        triggerLimit: 5
      },
      duringContent: {
        type: 'PowerFlipDamage',
        strength: {
          power1: 5000,
          firstMax: 10000
        }
      }
    }
  }
];
