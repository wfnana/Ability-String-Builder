import { Container } from './class/container';
import { Stringfy } from './class/stringfy';
import { Content } from './common/content';
import { During } from './during';
import { Instant } from './instant';
import { Opening } from './opening';
import { Ability } from './types';
export { Container } from './class/container';
export { Stringfy } from './class/stringfy';
export * from './types';
declare type FakeAbility = {
    condition: Instant | During | Opening;
    content: Content;
};
declare type ContentMap = Map<Content, Array<FakeAbility>>;
declare type ResultMap = Map<Instant | During | Opening, ContentMap>;
export declare class AbilityStringBuilder {
    container: Container;
    stringify: Stringfy;
    level: 1 | 2 | 3 | 4 | 5;
    constructor(strings: Record<string, string> | Container, level?: 1 | 2 | 3 | 4 | 5);
    stringfyOpening(param1: Opening): string;
    stringfyInstant(param1: ContentMap, param2: string): string;
    stringfyDuring(param1: ContentMap, param2: string): string;
    stringfy(param1: ResultMap, param2?: boolean): string;
    groupByTrigger(data: Array<Ability>): ResultMap;
    getInstantTriggerKey(param1: ResultMap, param2: Instant): Instant;
    getDuringTriggerKey(param1: ResultMap, param2: During): During;
    getContentKey(param1: ContentMap, param2: Content): Content;
}
