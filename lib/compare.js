"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equal = exports.isKeyEqual = void 0;
function isKeyEqual(valueKeys, compareKeys) {
    return compareKeys.every(function (index) {
        return valueKeys.includes(index);
    });
}
exports.isKeyEqual = isKeyEqual;
function equal(value, compare) {
    if (value === null ||
        value === undefined ||
        compare === null ||
        compare === undefined)
        return value === compare;
    if (value.constructor !== compare.constructor)
        return false;
    if (value instanceof Function)
        return value === compare;
    if (value instanceof RegExp)
        return value === compare;
    if (value === compare || value.valueOf() === compare.valueOf())
        return true;
    if (Array.isArray(value) && value.length !== compare.length)
        return false;
    if (value instanceof Date)
        return false;
    if (!(typeof value === 'object') || !(typeof compare === 'object'))
        return false;
    const valueKeys = Object.keys(value);
    const compareKeys = Object.keys(compare);
    return (isKeyEqual(valueKeys, compareKeys) &&
        valueKeys.every(function (index) {
            return equal(value[index], compare[index]);
        }));
}
exports.equal = equal;
//# sourceMappingURL=compare.js.map