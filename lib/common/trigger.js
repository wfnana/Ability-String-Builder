"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerPuller = exports.ABILITY_TRIGGER_PULLER_TRANSFORM = void 0;
const transform_1 = require("../class/transform");
exports.ABILITY_TRIGGER_PULLER_TRANSFORM = {
    Myself: {
        AbilityTriggerPullerKind: 'Myself'
    },
    OneOfExceptMyself: {
        AbilityTriggerPullerKind: 'OneOfExceptMyself'
    },
    Leader: {
        AbilityTriggerPullerKind: 'Member'
    },
    Second: {
        AbilityTriggerPullerKind: 'Member'
    },
    Third: {
        AbilityTriggerPullerKind: 'Member'
    },
    OneOfParty: {
        AbilityTriggerPullerKind: 'OneOfParty'
    },
    TotalOfExceptMyself: {
        AbilityTriggerPullerKind: 'TotalOfExceptMyself'
    },
    TotalOfParty: {
        AbilityTriggerPullerKind: 'TotalOfParty'
    }
};
class TriggerPuller extends transform_1.Transform {
    constructor(data) {
        super(data.type, exports.ABILITY_TRIGGER_PULLER_TRANSFORM);
        this.characterGroups = data.characterGroups;
    }
}
exports.TriggerPuller = TriggerPuller;
//# sourceMappingURL=trigger.js.map