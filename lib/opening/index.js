"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opening = exports.OpeningContent = void 0;
const transform_1 = require("../class/transform");
const transform_2 = require("./transform");
class OpeningContent extends transform_1.Transform {
    constructor(data) {
        super(data.type, transform_2.ABILITY_OPENING_TRANSFORM);
        this.strength = data.strength;
    }
    computeStrength(level = 5) {
        return this.compute(this.strength, level);
    }
}
exports.OpeningContent = OpeningContent;
class Opening {
    constructor(param1 = false, param2) {
        this.unisonable = param1;
        this.opening = new OpeningContent(param2);
    }
}
exports.Opening = Opening;
//# sourceMappingURL=index.js.map