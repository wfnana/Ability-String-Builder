import { AbilityThreshold } from '../types';
export declare class Transform {
    table: Record<string, Record<string, string>>;
    type: string;
    constructor(type: string, table: Record<string, Record<string, string>>);
    convert(name: string): string;
    compute(threshold?: AbilityThreshold, level?: number): number | undefined;
}
