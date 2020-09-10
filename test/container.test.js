"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("../lib/class/container");
const strings_1 = require("./files/strings");
describe('container', function () {
    const container = new container_1.Container(strings_1.ja);
    it('constructor', function () {
        expect(container).toBeInstanceOf(container_1.Container);
        expect(container).toHaveProperty('getUiString');
        expect(container).toHaveProperty('getUiStringWithContext');
    });
    it('strings', function () {
        const strings = container.strings;
        expect(container).toHaveProperty('strings');
        expect(strings).toStrictEqual(strings_1.ja);
    });
    it('getUiString failed', function () {
        const result = container.getUiString('');
        expect(result).toBeUndefined();
    });
    it('getUiString success', function () {
        const result = container.getUiString('ability_description_percent');
        expect(result).toEqual('::percent:: %');
    });
    it('getUiStringWithContext failed', function () {
        const result = container.getUiStringWithContext('ability_description_percent');
        expect(result).toEqual('::percent:: %');
    });
    it('getUiStringWithContext success', function () {
        const result = container.getUiStringWithContext('ability_description_percent', {
            percent: 30
        });
        expect(result).toEqual('30 %');
    });
});
//# sourceMappingURL=container.test.js.map