"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstantContent = void 0;
const transform_1 = require("../../class/transform");
const target_1 = require("../../common/target");
const transform_2 = require("./transform");
class InstantContent extends transform_1.Transform {
    constructor(data) {
        super(data.type, transform_2.ABILITY_INSTANT_CONTENT_TRANSFORM);
        if (data.target) {
            this.target = new target_1.Target(data.target);
        }
        this.strength = data.strength;
        this.frame = data.frame;
        this.flipLimit = data.flipLimit;
        this.characterGroups = data.characterGroups;
    }
    computeStrength(level = 5) {
        return this.compute(this.strength, level);
    }
    computeFrame(level = 5) {
        return this.compute(this.frame, level);
    }
}
exports.InstantContent = InstantContent;
//# sourceMappingURL=index.js.map