import rgb2hsl, { rgb2hslString, rgb2hslObject, rgb2hslArray } from '../../src/rgb2hsl';
import { OutputType } from '../../src';

describe('rgb2hsl transformation', () => {
    test('it should transform rgb to hsl and return type depending on output option', () => {
        expect(rgb2hsl('rgb(255, 0, 0)')).toStrictEqual({ h: 0, s: 100, l: 50 });
        expect(rgb2hsl('rgb(255, 0, 0)', OutputType.STRING)).toBe('hsl(0, 100%, 50%)');
        expect(rgb2hsl('rgb(255, 0, 0)', OutputType.ARRAY)).toStrictEqual([0, 100, 50]);
        expect(rgb2hsl('rgb(255, 0, 0)', OutputType.OBJECT)).toStrictEqual({ h: 0, s: 100, l: 50 });
        expect(rgb2hsl('rgb(0, 0, 255)')).toStrictEqual({ h: 240, s: 100, l: 50 });
        expect(rgb2hsl('rgb(255, 0, 255)')).toStrictEqual({ h: 300, s: 100, l: 50 });
        expect(rgb2hsl('rgb(23, 243, 115)')).toStrictEqual({ h: 145.09, s: 90.16, l: 52.16 });
        expect(rgb2hsl('rgb(143, 9, 1)')).toStrictEqual({ h: 3.38, s: 98.61, l: 28.24 });
        expect(rgb2hsl('rgb(3, 192, 94)')).toStrictEqual({ h: 148.89, s: 96.92, l: 38.24 });
        expect(rgb2hsl('rgb(56, 99, 143)')).toStrictEqual({ h: 210.34, s: 43.72, l: 39.02 });
        expect(rgb2hsl('rgb(40, 150, 255)')).toStrictEqual({ h: 209.3, s: 100, l: 57.84 });
    });
    test('it should transform rgb to hsl and return a RGB string', () => {
        expect(rgb2hslString('rgb(255, 128, 0)')).toBe('hsl(30.12, 100%, 50%)');
        expect(rgb2hslString('rgb(0, 255, 0)')).toBe('hsl(120, 100%, 50%)');
        expect(rgb2hslString('rgb(90, 30, 220)')).toBe('hsl(258.95, 76%, 49.02%)');
        expect(rgb2hslString('rgb(22, 143, 111)')).toBe('hsl(164.13, 73.33%, 32.35%)');
    });
    test('it should transform rgb to hsl and return a RGB object', () => {
        expect(rgb2hslObject('rgb(255, 128, 0)')).toStrictEqual({ h: 30.12, s: 100, l: 50 });
        expect(rgb2hslObject('rgb(0, 255, 0)')).toStrictEqual({ h: 120, s: 100, l: 50 });
        expect(rgb2hslObject('rgb(90, 30, 220)')).toStrictEqual({ h: 258.95, s: 76, l: 49.02 });
        expect(rgb2hslObject('rgb(22, 143, 111)')).toStrictEqual({ h: 164.13, s: 73.33, l: 32.35 });
    });
    test('it should transform rgb to hsl and return a RGB array', () => {
        expect(rgb2hslArray('rgb(255, 128, 0)')).toStrictEqual([30.12, 100, 50]);
        expect(rgb2hslArray('rgb(0, 255, 0)')).toStrictEqual([120, 100, 50]);
        expect(rgb2hslArray('rgb(90, 30, 220)')).toStrictEqual([258.95, 76, 49.02]);
        expect(rgb2hslArray('rgb(22, 143, 111)')).toStrictEqual([164.13, 73.33, 32.35]);
    });
});
