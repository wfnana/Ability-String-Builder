"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
class Container {
    constructor(strings, prefix = '') {
        this.prefix = prefix;
        this.strings = strings;
    }
    getUiString(stringId) {
        return this.strings[`${this.prefix}${stringId}`];
    }
    getUiStringWithContext(stringId, params) {
        let str = this.getUiString(stringId);
        if (!str)
            console.log(stringId);
        if (params) {
            Object.entries(params).forEach(function ([key, value]) {
                var _a, _b, _c, _d;
                if (str.includes('if') && str.includes(key)) {
                    if (key === 'omittable') {
                        const regex = /::if !omittable::(.*?)::end::/g;
                        const replaced = [];
                        let result = regex.exec(str);
                        while (result !== null) {
                            const to = !value ? result[1] : '';
                            replaced.push([result[0], to]);
                            result = regex.exec(str);
                        }
                        replaced.forEach(function ([from, to]) {
                            str = str.replace(from, to);
                        });
                    }
                    if (key === 'once') {
                        const regex = /::if once::(.*?)::else::(.*?)::end::/g;
                        const replaced = [];
                        let result = regex.exec(str);
                        while (result !== null) {
                            const to = value ? result[1] : result[2];
                            replaced.push([result[0], to]);
                            result = regex.exec(str);
                        }
                        replaced.forEach(function ([from, to]) {
                            str = str.replace(from, to);
                        });
                    }
                    if (key === 'count') {
                        const t = (_b = (_a = str.match(/::if \(0 <= count\)::(.+)::else::/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
                        const f = (_d = (_c = str.match(/::else::(.+)::end::/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
                        const bool = 0 <= Number(value);
                        str = str.replace(/::if \(0 <= count\)::.+::end::/, bool ? t : f);
                        if (str.includes('::(-count)::')) {
                            str = str.replace('::(-count)::', '::count::');
                            value = Number(value) * -1;
                        }
                    }
                }
                if (typeof value === 'boolean') {
                    str = str.replace(`::${key}::`, String(value));
                }
                if (typeof value === 'string') {
                    str = str.replace(`::${key}::`, String(value));
                }
                if (typeof value === 'number') {
                    str = str.replace(`::${key}::`, Number(value.toFixed(12)).toString());
                }
            });
        }
        return str;
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map