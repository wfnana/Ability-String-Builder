"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Target = exports.ABILITY_TRIGGER_TARGET_TRANSFORM = void 0;
const transform_1 = require("../class/transform");
exports.ABILITY_TRIGGER_TARGET_TRANSFORM = {
    Myself: {
        AbilityTargetKind: 'Myself'
    },
    ExceptMyself: {
        AbilityTargetKind: 'ExceptMyself'
    },
    Leader: {
        AbilityTargetKind: 'Member'
    },
    Second: {
        AbilityTargetKind: 'Member'
    },
    Third: {
        AbilityTargetKind: 'Member'
    },
    Party: {
        AbilityTargetKind: 'Party'
    },
    UnisonParty: {
        AbilityTargetKind: 'UnisonParty'
    },
    TriggerPuller: {
        AbilityTargetKind: 'TriggerPuller'
    },
    Multiball: {
        AbilityTargetKind: 'Multiball'
    },
    MinHpAbsolute: {
        AbilityTargetKind: 'MinHpAbsolute'
    },
    MinHpRelative: {
        AbilityTargetKind: 'MinHpRelative'
    },
    MinHpAbsoluteExceptMyself: {
        AbilityTargetKind: 'MinHpAbsoluteExceptMyself'
    },
    MinHpRelativeExceptMyself: {
        AbilityTargetKind: 'MinHpRelativeExceptMyself'
    }
};
class Target extends transform_1.Transform {
    constructor(data) {
        super(data.type, exports.ABILITY_TRIGGER_TARGET_TRANSFORM);
        this.characterGroups = data.characterGroups;
    }
}
exports.Target = Target;
//# sourceMappingURL=target.js.map