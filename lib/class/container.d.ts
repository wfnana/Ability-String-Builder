export declare class Container {
    prefix: string;
    strings: Record<string, string>;
    constructor(strings: Record<string, string>, prefix?: string);
    getUiString(stringId: string): string;
    getUiStringWithContext(stringId: string, params?: Record<string, string | number | boolean | undefined>): string;
}
