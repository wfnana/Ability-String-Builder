"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.During = void 0;
const content_1 = require("../common/content");
const compare_1 = require("../compare");
const precondition_1 = require("../precondition");
const trigger_1 = require("./trigger");
class During {
    constructor(param1 = false, param2, param3) {
        this.unisonable = param1;
        this.precondition = new precondition_1.Precondition(param2);
        this.triggerKind = this.convertMasterValue(new trigger_1.DuringTrigger(param3));
        this.pullerKind = this.getPullerKind(this.triggerKind);
        this.content = new content_1.ContentMap();
    }
    match(param1) {
        const eqUnisonable = this.unisonable === param1.unisonable;
        const eqTriggerKind = this.eqTriggerKind(param1.triggerKind);
        const eqPrecondition = compare_1.equal(this.precondition, param1.precondition);
        if (eqUnisonable && eqTriggerKind && eqPrecondition) {
            return this.equalPullerKind(param1.pullerKind);
        }
        return false;
    }
    eqTriggerKind(param1) {
        const triggerKind = this.triggerKind;
        const eqType = triggerKind.type === param1.type;
        const eqPuller = compare_1.equal(triggerKind.triggerPuller, param1.triggerPuller);
        const eqThreshold = compare_1.equal(triggerKind.threshold, param1.threshold);
        const eqLimit = triggerKind.triggerLimit === param1.triggerLimit;
        return eqType && eqPuller && eqThreshold && eqLimit;
    }
    getPullerKind(trigger) {
        if (trigger) {
            const kind = trigger.convert('DuringAbilityTriggerKind');
            switch (kind) {
                case 'Character':
                    return trigger.triggerPuller;
                case 'Battle':
                    return undefined;
                default:
                    return undefined;
            }
        }
        return undefined;
    }
    equalPullerKind(param1) {
        var _a;
        const kind = (_a = this.pullerKind) === null || _a === void 0 ? void 0 : _a.convert('AbilityTriggerPullerKind');
        const param1kind = param1 === null || param1 === void 0 ? void 0 : param1.convert('AbilityTriggerPullerKind');
        return kind === param1kind;
    }
    convertMasterValue(param1) {
        return param1;
    }
}
exports.During = During;
//# sourceMappingURL=index.js.map