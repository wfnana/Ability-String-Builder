export function isKeyEqual(
  valueKeys: Array<string>,
  compareKeys: Array<string>
): boolean {
  // key order is not a matter
  return compareKeys.every(function (index: string) {
    return valueKeys.includes(index);
  });
}

// Referece: https://stackoverflow.com/a/16788517/139361
export function equal(value: any, compare: any): boolean {
  if (
    value === null ||
    value === undefined ||
    compare === null ||
    compare === undefined
  )
    return value === compare;
  // after this just checking type of one would be enough
  if (value.constructor !== compare.constructor) return false;
  // if they are functions, they should exactly refer to same one (because of closures)
  if (value instanceof Function) return value === compare;
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (value instanceof RegExp) return value === compare;
  if (value === compare || value.valueOf() === compare.valueOf()) return true;
  if (Array.isArray(value) && value.length !== compare.length) return false;
  // if they are dates, they must had equal valueOf
  if (value instanceof Date) return false;
  // if they are strictly equal, they both need to be object at least
  if (!(typeof value === 'object') || !(typeof compare === 'object'))
    return false;

  const valueKeys = Object.keys(value);
  const compareKeys = Object.keys(compare);
  return (
    isKeyEqual(valueKeys, compareKeys) &&
    valueKeys.every(function (index: string) {
      return equal(value[index], compare[index]);
    })
  );
}
