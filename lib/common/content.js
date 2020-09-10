"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentMap = exports.Content = void 0;
const compare_1 = require("../compare");
class Content {
    constructor(data) {
        this.data = data;
        this.targetKind = this.data.target;
    }
    method398(param1) {
        const param1kind = param1.convert('InstantAbilityContent');
        switch (param1kind) {
            case 'ConditionCharacter':
                return param1.target;
            case 'ConditionBattle':
                return undefined;
            case 'Common':
                return this.method399(param1);
            case 'DurationTimeCharacter':
                return param1.target;
            case 'InstantCharacter':
                return param1.target;
            case 'InstantBattle':
                return undefined;
            default:
                return undefined;
        }
    }
    method399(param1) {
        const kind = param1.convert('CommonAbilityContent');
        switch (kind) {
            case 'Battle':
                return undefined;
            case 'Character':
                return param1.target;
            default:
                return undefined;
        }
    }
    match(param1) {
        return compare_1.equal(this.targetKind, param1.targetKind);
    }
}
exports.Content = Content;
class ContentMap {
    constructor() {
        this.contents = [];
        this.triggerLimits = [];
    }
    push(content, limit) {
        this.contents.push(content);
        this.triggerLimits.push(limit);
    }
    forEach(callbackfn) {
        return this.contents.forEach(callbackfn);
    }
    find(predicate) {
        return this.contents.find(predicate);
    }
    includes(searchElement, fromIndex) {
        return this.contents.includes(searchElement, fromIndex);
    }
}
exports.ContentMap = ContentMap;
//# sourceMappingURL=content.js.map