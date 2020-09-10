import { AbilityThreshold } from '../types';

export class Transform {
  table: Record<string, Record<string, string>>;
  type: string;

  constructor(type: string, table: Record<string, Record<string, string>>) {
    this.type = type;
    this.table = table;
  }

  convert(name: string): string {
    return this.table[this.type][name];
  }

  compute(threshold?: AbilityThreshold, level = 5): number | undefined {
    if (!threshold) return undefined;
    const min = threshold.power1;
    const max = threshold.firstMax;
    const step = (max - min) / 4;
    // short circuit
    return level === 5 ? max : min + step * (level - 1);
  }
}
