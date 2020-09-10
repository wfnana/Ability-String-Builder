export declare const SingleInstant: {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
}[];
export declare const MultiInstantWithSlash: ({
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
                characterGroups: string[];
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit: number;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
                characterGroups: string[];
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit?: undefined;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
})[];
export declare const MultiInstantWithAnd: ({
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit?: undefined;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit: number;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
})[];
export declare const MultiDuringWithSlash: {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        duringTrigger: {
            type: string;
            triggerPuller: {
                type: string;
                characterGroups: string[];
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
        };
        duringContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
}[];
export declare const SecondSkillGuage: ({
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
            characterGroups: string[];
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit: number;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups?: undefined;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
            characterGroups?: undefined;
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit: number;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
            characterGroups: string[];
        };
        instantTrigger: {
            type: string;
            triggerPuller?: undefined;
            threshold?: undefined;
            triggerLimit?: undefined;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups?: undefined;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
})[];
export declare const NegativeCount: ({
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit: number;
        };
        instantContent: {
            type: string;
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            threshold?: undefined;
            triggerLimit?: undefined;
        };
        instantContent: {
            type: string;
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
})[];
export declare const ComplimentOiran: ({
    id: number;
    stringId: string;
    statueGroupId: string;
    unisonable: boolean;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
} | {
    id: number;
    stringId: string;
    statueGroupId: string;
    unisonable: boolean;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups?: undefined;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
})[];
export declare const EnemyDamage: ({
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            triggerPuller?: undefined;
            threshold?: undefined;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
        };
        instantContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
})[];
export declare const LampGuideLeader: ({
    id: number;
    stringId: string;
    statueGroupId: string;
    unisonable: boolean;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
        duringTrigger?: undefined;
        duringContent?: undefined;
    };
} | {
    id: number;
    stringId: string;
    statueGroupId: string;
    unisonable: boolean;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        duringTrigger: {
            type: string;
            triggerPuller: {
                type: string;
            };
        };
        duringContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
        instantTrigger?: undefined;
        instantContent?: undefined;
    };
})[];
export declare const DuringHPLow: ({
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        duringTrigger: {
            type: string;
            triggerPuller: {
                type: string;
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
        };
        duringContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
        instantTrigger?: undefined;
        instantContent?: undefined;
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            triggerPuller: {
                type: string;
                characterGroups: string[];
            };
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit: number;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
        duringTrigger?: undefined;
        duringContent?: undefined;
    };
})[];
export declare const TargetLeader: {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        duringTrigger: {
            type: string;
        };
        duringContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
}[];
export declare const MultiInstantWithSlash2: {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
            threshold: {
                power1: number;
                firstMax: number;
            };
            triggerLimit: number;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
}[];
export declare const MiaLeaderAbility: ({
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        opening: {
            type: string;
            strength: {
                power1: number;
                firstMax: number;
            };
        };
        precondition?: undefined;
        instantTrigger?: undefined;
        instantContent?: undefined;
    };
} | {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        instantTrigger: {
            type: string;
        };
        instantContent: {
            type: string;
            target: {
                type: string;
                characterGroups: string[];
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
        opening?: undefined;
    };
})[];
export declare const EnemyLow: {
    id: number;
    stringId: string;
    unisonable: boolean;
    statueGroupId: string;
    trigger: {
        type: string;
        precondition: {
            type: string;
        };
        duringTrigger: {
            type: string;
            threshold: {
                power1: number;
                firstMax: number;
            };
        };
        duringContent: {
            type: string;
            target: {
                type: string;
            };
            strength: {
                power1: number;
                firstMax: number;
            };
        };
    };
}[];
