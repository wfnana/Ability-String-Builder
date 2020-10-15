import { Container } from './class/container';
import { Stringfy } from './class/stringfy';
import { Content } from './common/content';
import { During } from './during';
import { DuringContent } from './during/content';
import { Instant } from './instant';
import { InstantContent } from './instant/content';
import { Opening } from './opening';
import { Ability, AbilityTrigger } from './types';

export { Container } from './class/container';
export { Stringfy } from './class/stringfy';
export * from './types';

type FakeAbility = {
  condition: Instant | During | Opening;
  content: Content;
};
type ContentMap = Map<Content, Array<FakeAbility>>;
type ResultMap = Map<Instant | During | Opening, ContentMap>;

export class AbilityStringBuilder {
  container: Container;
  stringify: Stringfy;
  level: 1 | 2 | 3 | 4 | 5;

  constructor(
    strings: Record<string, string> | Container,
    level: 1 | 2 | 3 | 4 | 5 = 5
  ) {
    if (strings instanceof Container) {
      this.container = strings;
    } else {
      this.container = new Container(strings);
    }
    this.level = level;
    this.stringify = new Stringfy(this.container, this.level);
  }

  stringfyOpening(param1: Opening): string {
    return this.stringify.stringfyOpening(param1);
  }

  stringfyInstant(param1: ContentMap, param2: string): string {
    const result = [] as Array<string>;
    const stringify = this.stringify;
    const contents = Array.from(param1.keys());

    let unisonable = '';
    let precondition = '';
    let trigger = '';
    let post = '';

    contents.forEach(function (key) {
      let notFirst = false;
      const contentResult = [] as Array<string>;
      if (param1.has(key)) {
        const arr = param1.get(key) as Array<FakeAbility>;
        arr.forEach(function ({ condition, content }) {
          const instant = condition as Instant;
          unisonable = stringify.stringfyUnisonable(instant.unisonable);
          precondition = stringify.stringfyPrecondition(
            instant.precondition,
            content.targetKind,
            false
          );
          trigger = stringify.stringfyInstantTrigger(
            instant.triggerKind,
            content.targetKind
          );
          const isInitial = stringify.isInitialTrigger(instant.triggerKind);
          const limit = stringify.getContentTriggerLimit(instant.triggerKind);
          const cooltime = stringify.getContentCooltime(instant.triggerKind);
          if (!!isInitial && !stringify.isContinuationInstantContent(content)) {
            post = stringify.stringfyInitialWithoutContinuation();
          }
          const result = stringify.stringfyInstantContent(
            content,
            isInitial,
            limit,
            cooltime,
            notFirst
          );
          contentResult.push(result);
          if (!notFirst) {
            notFirst = true;
          }
        });
        const delimiter = stringify.getUiString(
          'ability_description_delimiter_content'
        );
        result.push(contentResult.join(delimiter));
      }
    });

    if (trigger !== post) {
      trigger = `${trigger}${post}`;
    }
    let delimiterKey = 'ability_description_delimiter_content';
    if (
      unisonable.length === 0 &&
      precondition.length === 0 &&
      trigger.length === 0
    ) {
      delimiterKey = param2;
    }
    const delimiter = stringify.getUiString(delimiterKey);
    return unisonable + precondition + trigger + result.join(delimiter);
  }

  stringfyDuring(param1: ContentMap, param2: string): string {
    const result = [] as Array<string>;
    const stringify = this.stringify;
    const contents = Array.from(param1.keys());

    let unisonable = '';
    let precondition = '';

    contents.forEach(function (key) {
      let notFirst = false;
      const contentResult = [] as Array<string>;
      if (param1.has(key)) {
        const arr = param1.get(key) as Array<FakeAbility>;
        arr.forEach(function ({ condition, content }) {
          const during = condition as During;
          unisonable = stringify.stringfyUnisonable(during.unisonable);
          precondition = stringify.stringfyPreconditionAndDuringTrigger(
            during.precondition,
            during.triggerKind,
            content.targetKind
          );
          const limit = stringify.getContentTriggerLimit(during.triggerKind);
          const result = stringify.stringfyCommonContent(
            content,
            limit,
            notFirst
          );
          contentResult.push(result);
          if (!notFirst) {
            notFirst = true;
          }
        });
        const delimiter = stringify.getUiString(
          'ability_description_delimiter_content'
        );
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

  stringfy(param1: ResultMap, param2 = false): string {
    const result = [] as Array<string>;
    const newline = param2
      ? 'ability_description_delimiter_newline'
      : 'ability_description_delimiter';

    Array.from(param1.entries()).forEach(([key, data]) => {
      let str = '';
      if (key instanceof Instant) {
        str = this.stringfyInstant(data, newline);
      } else if (key instanceof During) {
        str = this.stringfyDuring(data, newline);
      } else if (key instanceof Opening) {
        str = this.stringfyOpening(key);
      }
      result.push(str);
    });

    return result.join(this.container.getUiString(newline));
  }

  groupByTrigger(data: Array<Ability>): ResultMap {
    const result = new Map() as ResultMap;
    data.forEach((abi) => {
      const trigger = abi.trigger as AbilityTrigger;
      switch (trigger.type.toLowerCase()) {
        case 'instant': {
          if (trigger.instantContent && trigger.instantTrigger) {
            const instant = new Instant(
              abi.unisonable,
              trigger.precondition,
              trigger.instantTrigger
            );
            const instantKey = this.getInstantTriggerKey(result, instant);
            const instantMap =
              result.get(instantKey) ?? (new Map() as ContentMap);

            const content = new Content(
              new InstantContent(trigger.instantContent)
            );
            const contentKey = this.getContentKey(instantMap, content);
            const contentArr =
              instantMap.get(contentKey) ?? ([] as Array<FakeAbility>);

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
            const during = new During(
              abi.unisonable,
              trigger.precondition,
              trigger.duringTrigger
            );
            const duringKey = this.getDuringTriggerKey(result, during);
            const duringMap =
              result.get(duringKey) ?? (new Map() as ContentMap);

            const content = new Content(
              new DuringContent(trigger.duringContent)
            );
            const contentKey = this.getContentKey(duringMap, content);
            const contentArr =
              duringMap.get(contentKey) ?? ([] as Array<FakeAbility>);

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
            const opening = new Opening(abi.unisonable, trigger.opening);
            if (!result.has(opening)) {
              result.set(opening, new Map());
            }
          }
        }
      }
    });
    return result;
  }

  getInstantTriggerKey(param1: ResultMap, param2: Instant): Instant {
    let result = param2;
    Array.from(param1.keys()).forEach(function (data) {
      const matched = data as Instant;
      if (matched instanceof Instant && matched.match(param2)) {
        result = matched;
      }
    });
    return result;
  }

  getDuringTriggerKey(param1: ResultMap, param2: During): During {
    let result = param2;
    Array.from(param1.keys()).forEach(function (data) {
      const matched = data as During;
      if (matched instanceof During && matched.match(param2)) {
        result = matched;
      }
    });
    return result;
  }

  getContentKey(param1: ContentMap, param2: Content): Content {
    let result = param2;
    Array.from(param1.keys()).forEach(function (data) {
      const matched = data as Content;
      if (matched.match(param2)) {
        result = matched;
      }
    });
    return result;
  }
}
