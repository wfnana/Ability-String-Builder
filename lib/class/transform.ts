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

  compute(
    threshold?: AbilityThreshold,
    level = 5,
    corr = 100000
  ): number | undefined {
    if (!threshold) return undefined;
    const min = this.correction(threshold.power1, corr);
    const max = this.correction(threshold.firstMax, corr);
    const step = (max - min) / 4;
    // short circuit
    return level === 5 ? max : min + step * (level - 1);
  }

  correction(num: number, corr: number): number {
    return Number(Number(num / corr).toFixed(12));
  }
}
