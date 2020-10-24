import hwb2rgb, { hwb2rgbString, hwb2rgbObject, hwb2rgbArray } from '../../src/hwb2rgb';
import { OutputType } from '../../src';

describe('hwb2rgb transformation', () => {
    test('it should transform hwb to rgb and return type depending on output option', () => {
        expect(hwb2rgb({ h: 0, w: 0, b: 0 })).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(hwb2rgb('hwb(0, 0%, 0%)', OutputType.STRING)).toBe('rgb(255, 0, 0)');
        expect(hwb2rgb([0, 0, 0], OutputType.ARRAY)).toStrictEqual([255, 0, 0]);
        expect(hwb2rgb({ h: 0, w: 0, b: 0 }, OutputType.OBJECT)).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(hwb2rgb('hwb(240, 0%, 0%)')).toStrictEqual({ r: 0, g: 0, b: 255 });
        expect(hwb2rgb([300, 0, 0])).toStrictEqual({ r: 255, g: 0, b: 255 });
        expect(hwb2rgb({ h: 145.09, w: 9.02, b: 4.71 })).toStrictEqual({ r: 23, g: 243, b: 115 });
        expect(hwb2rgb('hwb(3.38, 0.39%, 43.92%)')).toStrictEqual({ r: 143, g: 9, b: 1 });
        expect(hwb2rgb([148.89, 1.18, 24.71])).toStrictEqual({ r: 3, g: 192, b: 94 });
        expect(hwb2rgb('hwb(210.34, 21.96%, 43.92%)')).toStrictEqual({ r: 56, g: 99, b: 143 });
        expect(hwb2rgb('hwb(209.3, 15.69%, 0%)')).toStrictEqual({ r: 40, g: 150, b: 255 });
    });
    test('it should transform hwb to rgb and return a RGB string', () => {
        expect(hwb2rgbString('hwb(30.12, 0%, 0%)')).toBe('rgb(255, 128, 0)');
        expect(hwb2rgbString({ h: 120, w: 0, b: 0 })).toBe('rgb(0, 255, 0)');
        expect(hwb2rgbString([258.95, 11.76, 13.73])).toBe('rgb(90, 30, 220)');
        expect(hwb2rgbString('hwb(164.13, 8.63%, 43.92%)')).toBe('rgb(22, 143, 111)');
    });
    test('it should transform hwb to rgb and return a RGB object', () => {
        expect(hwb2rgbObject('hwb(30.12, 0%, 0%)')).toStrictEqual({ r: 255, g: 128, b: 0 });
        expect(hwb2rgbObject({ h: 120, w: 0, b: 0 })).toStrictEqual({ r: 0, g: 255, b: 0 });
        expect(hwb2rgbObject([258.95, 11.76, 13.73])).toStrictEqual({ r: 90, g: 30, b: 220 });
        expect(hwb2rgbObject('hwb(164.13, 8.63%, 43.92%)')).toStrictEqual({ r: 22, g: 143, b: 111 });
    });
    test('it should transform hwb to rgb and return a RGB array', () => {
        expect(hwb2rgbArray('hwb(30.12, 0%, 0%)')).toStrictEqual([255, 128, 0]);
        expect(hwb2rgbArray({ h: 120, w: 0, b: 0 })).toStrictEqual([0, 255, 0]);
        expect(hwb2rgbArray([258.95, 11.76, 13.73])).toStrictEqual([90, 30, 220]);
        expect(hwb2rgbArray('hwb(164.13, 8.63%, 43.92%)')).toStrictEqual([22, 143, 111]);
    });
});
