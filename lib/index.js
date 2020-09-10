"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityStringBuilder = void 0;
const container_1 = require("./class/container");
const stringfy_1 = require("./class/stringfy");
const content_1 = require("./common/content");
const during_1 = require("./during");
const content_2 = require("./during/content");
const instant_1 = require("./instant");
const content_3 = require("./instant/content");
const opening_1 = require("./opening");
var container_2 = require("./class/container");
Object.defineProperty(exports, "Container", { enumerable: true, get: function () { return container_2.Container; } });
var stringfy_2 = require("./class/stringfy");
Object.defineProperty(exports, "Stringfy", { enumerable: true, get: function () { return stringfy_2.Stringfy; } });
__exportStar(require("./types"), exports);
class AbilityStringBuilder {
    constructor(strings, level = 5) {
        if (strings instanceof container_1.Container) {
            this.container = strings;
        }
        else {
            this.container = new container_1.Container(strings);
        }
        this.level = level;
        this.stringify = new stringfy_1.Stringfy(this.container, this.level);
    }
    stringfyOpening(param1) {
        return this.stringify.stringfyOpening(param1);
    }
    stringfyInstant(param1, param2) {
        const result = [];
        const stringify = this.stringify;
        const contents = Array.from(param1.keys());
        let unisonable = '';
        let precondition = '';
        let trigger = '';
        let post = '';
        contents.forEach(function (key) {
            let notFirst = false;
            const contentResult = [];
            if (param1.has(key)) {
                const arr = param1.get(key);
                arr.forEach(function ({ condition, content }) {
                    const instant = condition;
                    unisonable = stringify.stringfyUnisonable(instant.unisonable);
                    precondition = stringify.stringfyPrecondition(instant.precondition, content.targetKind);
                    trigger = stringify.stringfyInstantTrigger(instant.triggerKind, content.targetKind);
                    const isInitial = stringify.isInitialTrigger(instant.triggerKind);
                    const limit = stringify.getContentTriggerLimit(instant.triggerKind);
                    if (!!isInitial && !stringify.isContinuationInstantContent(content)) {
                        post = stringify.stringfyInitialWithoutContinuation();
                    }
                    const result = stringify.stringfyInstantContent(content, isInitial, limit, notFirst);
                    contentResult.push(result);
                    if (!notFirst) {
                        notFirst = true;
                    }
                });
                const delimiter = stringify.getUiString('ability_description_delimiter_content');
                result.push(contentResult.join(delimiter));
            }
        });
        if (trigger !== post) {
            trigger = `${trigger}${post}`;
        }
        let delimiterKey = 'ability_description_delimiter_content';
        if (unisonable.length === 0 &&
            precondition.length === 0 &&
            trigger.length === 0) {
            delimiterKey = param2;
        }
        const delimiter = stringify.getUiString(delimiterKey);
        return unisonable + precondition + trigger + result.join(delimiter);
    }
    stringfyDuring(param1, param2) {
        const result = [];
        const stringify = this.stringify;
        const contents = Array.from(param1.keys());
        let unisonable = '';
        let precondition = '';
        contents.forEach(function (key) {
            let notFirst = false;
            const contentResult = [];
            if (param1.has(key)) {
                const arr = param1.get(key);
                arr.forEach(function ({ condition, content }) {
                    const during = condition;
                    unisonable = stringify.stringfyUnisonable(during.unisonable);
                    precondition = stringify.stringfyPreconditionAndDuringTrigger(during.precondition, during.triggerKind, content.targetKind);
                    const limit = stringify.getContentTriggerLimit(during.triggerKind);
                    const result = stringify.stringfyCommonContent(content, limit, notFirst);
                    contentResult.push(result);
                    if (!notFirst) {
                        notFirst = true;
                    }
                });
                const delimiter = stringify.getUiString('ability_description_delimiter_content');
                result.push(contentResult.join(delimiter));
            }
        });
        let delimiterKey = 'ability_description_delimiter_content';
        if (unisonable.length === 0 && precondition.length === 0) {
            delimiterKey = param2;
        }
        const delimiter = stringify.getUiString(delimiterKey);
        return unisonable + precondition + result.join(delimiter);
    }
    stringfy(param1, param2 = false) {
        const result = [];
        const newline = param2
            ? 'ability_description_delimiter_newline'
            : 'ability_description_delimiter';
        Array.from(param1.entries()).forEach(([key, data]) => {
            let str = '';
            if (key instanceof instant_1.Instant) {
                str = this.stringfyInstant(data, newline);
            }
            else if (key instanceof during_1.During) {
                str = this.stringfyDuring(data, newline);
            }
            else if (key instanceof opening_1.Opening) {
                str = this.stringfyOpening(key);
            }
            result.push(str);
        });
        return result.join(this.container.getUiString(newline));
    }
    groupByTrigger(data) {
        const result = new Map();
        data.forEach((abi) => {
            var _a, _b, _c, _d;
            const trigger = abi.trigger;
            switch (trigger.type.toLowerCase()) {
                case 'instant': {
                    if (trigger.instantContent && trigger.instantTrigger) {
                        const instant = new instant_1.Instant(abi.unisonable, trigger.precondition, trigger.instantTrigger);
                        const instantKey = this.getInstantTriggerKey(result, instant);
                        const instantMap = (_a = result.get(instantKey)) !== null && _a !== void 0 ? _a : new Map();
                        const content = new content_1.Content(new content_3.InstantContent(trigger.instantContent));
                        const contentKey = this.getContentKey(instantMap, content);
                        const contentArr = (_b = instantMap.get(contentKey)) !== null && _b !== void 0 ? _b : [];
                        const fakeAbi = {
                            condition: instant,
                            content
                        };
                        if (!contentArr.includes(fakeAbi)) {
                            contentArr.push(fakeAbi);
                        }
                        if (!instantMap.has(contentKey)) {
                            instantMap.set(contentKey, contentArr);
                        }
                        if (!result.has(instantKey)) {
                            result.set(instantKey, instantMap);
                        }
                    }
                    break;
                }
                case 'during': {
                    if (trigger.duringContent && trigger.duringTrigger) {
                        const during = new during_1.During(abi.unisonable, trigger.precondition, trigger.duringTrigger);
                        const duringKey = this.getDuringTriggerKey(result, during);
                        const duringMap = (_c = result.get(duringKey)) !== null && _c !== void 0 ? _c : new Map();
                        const content = new content_1.Content(new content_2.DuringContent(trigger.duringContent));
                        const contentKey = this.getContentKey(duringMap, content);
                        const contentArr = (_d = duringMap.get(contentKey)) !== null && _d !== void 0 ? _d : [];
                        const fakeAbi = {
                            condition: during,
                            content
                        };
                        if (!contentArr.includes(fakeAbi)) {
                            contentArr.push(fakeAbi);
                        }
                        if (!duringMap.has(contentKey)) {
                            duringMap.set(contentKey, contentArr);
                        }
                        if (!result.has(duringKey)) {
                            result.set(duringKey, duringMap);
                        }
                    }
                    break;
                }
                case 'opening': {
                    if (trigger.opening) {
                        const opening = new opening_1.Opening(abi.unisonable, trigger.opening);
                        if (!result.has(opening)) {
                            result.set(opening, new Map());
                        }
                    }
                }
            }
        });
        return result;
    }
    getInstantTriggerKey(param1, param2) {
        let result = param2;
        Array.from(param1.keys()).forEach(function (data) {
            const matched = data;
            if (matched instanceof instant_1.Instant && matched.match(param2)) {
                result = matched;
            }
        });
        return result;
    }
    getDuringTriggerKey(param1, param2) {
        let result = param2;
        Array.from(param1.keys()).forEach(function (data) {
            const matched = data;
            if (matched instanceof during_1.During && matched.match(param2)) {
                result = matched;
            }
        });
        return result;
    }
    getContentKey(param1, param2) {
        let result = param2;
        Array.from(param1.keys()).forEach(function (data) {
            const matched = data;
            if (matched.match(param2)) {
                result = matched;
            }
        });
        return result;
    }
}
exports.AbilityStringBuilder = AbilityStringBuilder;
//# sourceMappingURL=index.js.map