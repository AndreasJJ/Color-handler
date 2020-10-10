export interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface RGB {
    r: number;
    g: number;
    b: number;
}

export enum OutputType {
    STRING = 'string',
    OBJECT = 'object',
    ARRAY = 'array',
}

export type RgbaTypes = string | RGBA | [number, number, number, number];
export type RgbTypes = string | RGB | [number, number, number];
