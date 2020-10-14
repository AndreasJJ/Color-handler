import hsl2rgb, { hsl2RgbString, hsl2RgbObject, hsl2RgbArray } from '../../src/hsl2rgb';
import { OutputType } from '../../src';

describe('hsl2rgb transformation', () => {
    test('it should transform hsl to rgb and return type depending on output option', () => {
        expect(hsl2rgb('hsl(0, 100%, 50%)')).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(hsl2rgb('hsl(0, 100%, 50%) ', OutputType.STRING)).toBe('rgb(255, 0, 0)');
        expect(hsl2rgb([0, 100, 50], OutputType.ARRAY)).toStrictEqual([255, 0, 0]);
        expect(hsl2rgb({ h: 0, s: 100, l: 50 }, OutputType.OBJECT)).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(hsl2rgb('hsl(240, 100%, 50%)')).toStrictEqual({ r: 0, g: 0, b: 255 });
        expect(hsl2rgb('hsl(300, 100%, 50%)')).toStrictEqual({ r: 255, g: 0, b: 255 });
        expect(hsl2rgb({ h: 145.09, s: 90.16, l: 52.16 })).toStrictEqual({ r: 23, g: 243, b: 115 });
        expect(hsl2rgb({ h: 3.38, s: 98.61, l: 28.24 })).toStrictEqual({ r: 143, g: 9, b: 1 });
        expect(hsl2rgb([148.89, 96.92, 38.24])).toStrictEqual({ r: 3, g: 192, b: 94 });
        expect(hsl2rgb([210.34, 43.72, 39.02])).toStrictEqual({ r: 56, g: 99, b: 143 });
    });
    test('it should transform hsl to rgb and return a RGB string', () => {
        expect(hsl2RgbString('hsl(30.12, 100%, 50%)')).toBe('rgb(255, 128, 0)');
        expect(hsl2RgbString('hsl(120, 100%, 50%)')).toBe('rgb(0, 255, 0)');
        expect(hsl2RgbString('hsl(258.95, 76%, 49.02%)')).toBe('rgb(90, 30, 220)');
        expect(hsl2RgbString('hsl(164.13, 73.33%, 32.35%)')).toBe('rgb(22, 143, 111)');
    });
    test('it should transform hsl to rgb and return a RGB object', () => {
        expect(hsl2RgbObject('hsl(30.12, 100%, 50%)')).toStrictEqual({ r: 255, g: 128, b: 0 });
        expect(hsl2RgbObject('hsl(120, 100%, 50%)')).toStrictEqual({ r: 0, g: 255, b: 0 });
        expect(hsl2RgbObject('hsl(258.95, 76%, 49.02%)')).toStrictEqual({ r: 90, g: 30, b: 220 });
        expect(hsl2RgbObject('hsl(164.13, 73.33, 32.35)')).toStrictEqual({ r: 22, g: 143, b: 111 });
    });
    test('it should transform hsl to rgb and return a RGB array', () => {
        expect(hsl2RgbArray('hsl(30.12, 100%, 50%)')).toStrictEqual([255, 128, 0]);
        expect(hsl2RgbArray('hsl(120, 100%, 50%)')).toStrictEqual([0, 255, 0]);
        expect(hsl2RgbArray('hsl(258.95, 76%, 49.02%)')).toStrictEqual([90, 30, 220]);
        expect(hsl2RgbArray('hsl(164.13, 73.33, 32.35)')).toStrictEqual([22, 143, 111]);
    });
});
