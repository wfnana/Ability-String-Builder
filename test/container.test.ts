import { Container } from '../lib/class/container';
import { ja } from './files/strings';

describe('container', function () {
  const container = new Container(ja);

  it('constructor', function () {
    expect(container).toBeInstanceOf(Container);
    expect(container).toHaveProperty('getUiString');
    expect(container).toHaveProperty('getUiStringWithContext');
  });

  it('strings', function () {
    const strings = container.strings;
    expect(container).toHaveProperty('strings');
    expect(strings).toStrictEqual(ja);
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
    const result = container.getUiStringWithContext(
      'ability_description_percent'
    );
    expect(result).toEqual('::percent:: %');
  });

  it('getUiStringWithContext success', function () {
    const result = container.getUiStringWithContext(
      'ability_description_percent',
      {
        percent: 30
      }
    );
    expect(result).toEqual('30 %');
  });
});
