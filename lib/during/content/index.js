"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuringContent = void 0;
const transform_1 = require("../../class/transform");
const target_1 = require("../../common/target");
const transform_2 = require("./transform");
class DuringContent extends transform_1.Transform {
    constructor(data) {
        super(data.type, transform_2.ABILITY_DURING_CONTENT_TRANSFORM);
        if (data.target) {
            this.target = new target_1.Target(data.target);
        }
        this.strength = data.strength;
        this.characterGroups = data.characterGroups;
    }
    computeStrength(level = 5) {
        return this.compute(this.strength, level);
    }
}
exports.DuringContent = DuringContent;
//# sourceMappingURL=index.js.map