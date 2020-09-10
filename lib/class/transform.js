"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
class Transform {
    constructor(type, table) {
        this.type = type;
        this.table = table;
    }
    convert(name) {
        return this.table[this.type][name];
    }
    compute(threshold, level = 5) {
        if (!threshold)
            return undefined;
        const min = threshold.power1;
        const max = threshold.firstMax;
        const step = (max - min) / 4;
        return level === 5 ? max : min + step * (level - 1);
    }
}
exports.Transform = Transform;
//# sourceMappingURL=transform.js.map