"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstantTrigger = void 0;
const transform_1 = require("../../class/transform");
const trigger_1 = require("../../common/trigger");
const transform_2 = require("./transform");
class InstantTrigger extends transform_1.Transform {
    constructor(data) {
        super(data.type, transform_2.ABILITY_INSTANT_TRIGGER_TRANSFORM);
        if (data.triggerPuller) {
            this.triggerPuller = new trigger_1.TriggerPuller(data.triggerPuller);
        }
        this.threshold = data.threshold;
        this.triggerLimit = data.triggerLimit;
        this.characterGroups = data.characterGroups;
    }
    computeThreshold(level = 5) {
        return this.compute(this.threshold, level);
    }
}
exports.InstantTrigger = InstantTrigger;
//# sourceMappingURL=index.js.map