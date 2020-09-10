import { DuringContent } from '../during/content';
import { InstantContent } from '../instant/content';
import { Target } from './target';
export declare class Content {
    data: InstantContent | DuringContent;
    targetKind?: Target;
    constructor(data?: InstantContent | DuringContent);
    method398(param1: InstantContent): Target | undefined;
    method399(param1: InstantContent | DuringContent): Target | undefined;
    match(param1: Content): boolean;
}
export declare class ContentMap {
    triggerLimits: Array<number | undefined>;
    contents: Array<Content>;
    constructor();
    push(content: Content, limit: number | undefined): void;
    forEach(callbackfn: (value: Content, index: number, array: Content[]) => void): void;
    find(predicate: (this: void, value: Content, index: number, obj: Content[]) => boolean): Content | undefined;
    includes(searchElement: Content, fromIndex?: number): boolean;
}
