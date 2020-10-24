import rgb2hwb, { rgb2hwbString, rgb2hwbObject, rgb2hwbArray } from '../../src/rgb2hwb';
import { OutputType } from '../../src';

describe('rgb2hwb transformation', () => {
    test('it should transform rgb to hsl and return type depending on output option', () => {
        expect(rgb2hwb('rgb(255, 0, 0)')).toStrictEqual({ h: 0, w: 0, b: 0 });
        expect(rgb2hwb({ r: 255, g: 0, b: 0 }, OutputType.STRING)).toBe('hwb(0, 0%, 0%)');
        expect(rgb2hwb([255, 0, 0], OutputType.ARRAY)).toStrictEqual([0, 0, 0]);
        expect(rgb2hwb('rgb(255, 0, 0)', OutputType.OBJECT)).toStrictEqual({ h: 0, w: 0, b: 0 });
        expect(rgb2hwb({ r: 0, g: 0, b: 255 })).toStrictEqual({ h: 240, w: 0, b: 0 });
        expect(rgb2hwb([255, 0, 255])).toStrictEqual({ h: 300, w: 0, b: 0 });
        expect(rgb2hwb('rgb(23, 243, 115)')).toStrictEqual({ h: 145.09, w: 9.02, b: 4.71 });
        expect(rgb2hwb({ r: 143, g: 9, b: 1 })).toStrictEqual({ h: 3.38, w: 0.39, b: 43.92 });
        expect(rgb2hwb([3, 192, 94])).toStrictEqual({ h: 148.89, w: 1.18, b: 24.71 });
        expect(rgb2hwb('rgb(56, 99, 143)')).toStrictEqual({ h: 210.34, w: 21.96, b: 43.92 });
        expect(rgb2hwb('rgb(40, 150, 255)')).toStrictEqual({ h: 209.3, w: 15.69, b: 0 });
    });
    test('it should transform rgb to hsl and return a RGB string', () => {
        expect(rgb2hwbString('rgb(255, 128, 0)')).toBe('hwb(30.12, 0%, 0%)');
        expect(rgb2hwbString({ r: 0, g: 255, b: 0 })).toBe('hwb(120, 0%, 0%)');
        expect(rgb2hwbString([90, 30, 220])).toBe('hwb(258.95, 11.76%, 13.73%)');
        expect(rgb2hwbString('rgb(22, 143, 111)')).toBe('hwb(164.13, 8.63%, 43.92%)');
    });
    test('it should transform rgb to hsl and return a RGB object', () => {
        expect(rgb2hwbObject('rgb(255, 128, 0)')).toStrictEqual({ h: 30.12, w: 0, b: 0 });
        expect(rgb2hwbObject({ r: 0, g: 255, b: 0 })).toStrictEqual({ h: 120, w: 0, b: 0 });
        expect(rgb2hwbObject([90, 30, 220])).toStrictEqual({ h: 258.95, w: 11.76, b: 13.73 });
        expect(rgb2hwbObject('rgb(22, 143, 111)')).toStrictEqual({ h: 164.13, w: 8.63, b: 43.92 });
    });
    test('it should transform rgb to hsl and return a RGB array', () => {
        expect(rgb2hwbArray('rgb(255, 128, 0)')).toStrictEqual([30.12, 0, 0]);
        expect(rgb2hwbArray({ r: 0, g: 255, b: 0 })).toStrictEqual([120, 0, 0]);
        expect(rgb2hwbArray([90, 30, 220])).toStrictEqual([258.95, 11.76, 13.73]);
        expect(rgb2hwbArray('rgb(22, 143, 111)')).toStrictEqual([164.13, 8.63, 43.92]);
    });
});
