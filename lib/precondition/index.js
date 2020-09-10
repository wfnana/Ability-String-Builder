"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Precondition = void 0;
const transform_1 = require("../class/transform");
const trigger_1 = require("../common/trigger");
const transform_2 = require("./transform");
class Precondition extends transform_1.Transform {
    constructor(data) {
        super(data.type, transform_2.ABILITY_PRECONDITION_TRANSFORM);
        if (data.triggerPuller) {
            this.triggerPuller = new trigger_1.TriggerPuller(data.triggerPuller);
        }
        this.threshold = data.threshold;
        this.characterGroups = data.characterGroups;
    }
    computeThreshold(level = 5) {
        return this.compute(this.threshold, level);
    }
}
exports.Precondition = Precondition;
//# sourceMappingURL=index.js.map