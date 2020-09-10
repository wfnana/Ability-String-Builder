export class Container {
  prefix: string;
  strings: Record<string, string>;

  constructor(strings: Record<string, string>, prefix = '') {
    this.prefix = prefix;
    this.strings = strings;
  }

  getUiString(stringId: string): string {
    return this.strings[`${this.prefix}${stringId}`];
  }

  getUiStringWithContext(
    stringId: string,
    params?: Record<string, string | number | boolean | undefined>
  ): string {
    let str = this.getUiString(stringId);
    if (!str) console.log(stringId);
    if (params) {
      Object.entries(params).forEach(function ([key, value]) {
        // handle if statement
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
            const t = str.match(/::if \(0 <= count\)::(.+)::else::/)?.[1] ?? '';
            const f = str.match(/::else::(.+)::end::/)?.[1] ?? '';
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
