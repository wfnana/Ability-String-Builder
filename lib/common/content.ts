import { equal } from '../compare';
import { DuringContent } from '../during/content';
import { InstantContent } from '../instant/content';
import { Target } from './target';

export class Content {
  data: InstantContent | DuringContent;
  targetKind?: Target;

  constructor(data?: InstantContent | DuringContent) {
    this.data = data as InstantContent | DuringContent;
    this.targetKind = this.data.target;
  }

  method398(param1: InstantContent): Target | undefined {
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

  method399(param1: InstantContent | DuringContent): Target | undefined {
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

  match(param1: Content): boolean {
    return equal(this.targetKind, param1.targetKind);
  }
}

export class ContentMap {
  triggerLimits: Array<number | undefined>;
  contents: Array<Content>;

  constructor() {
    this.contents = [];
    this.triggerLimits = [];
  }

  push(content: Content, limit: number | undefined) {
    this.contents.push(content);
    this.triggerLimits.push(limit);
  }

  forEach(
    callbackfn: (value: Content, index: number, array: Content[]) => void
  ) {
    return this.contents.forEach(callbackfn);
  }

  find(
    predicate: (
      this: void,
      value: Content,
      index: number,
      obj: Content[]
    ) => boolean
  ) {
    return this.contents.find(predicate);
  }

  includes(searchElement: Content, fromIndex?: number) {
    return this.contents.includes(searchElement, fromIndex);
  }
}
