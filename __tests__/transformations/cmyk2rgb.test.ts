import cmyk2rgb, { cmyk2rgbString, cmyk2rgbObject, cmyk2rgbArray } from '../../src/cmyk2rgb';
import { OutputType } from '../../src';

describe('cmyk2rgb transformation', () => {
    test('it should transform rgb to cmyk and return type depending on output option', () => {
        expect(cmyk2rgb({ c: 0, m: 100, y: 100, k: 0 })).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(cmyk2rgb('device-cmyk(0%, 100%, 100%, 0%)', OutputType.STRING)).toBe('rgb(255, 0, 0)');
        expect(cmyk2rgb([0, 100, 100, 0], OutputType.ARRAY)).toStrictEqual([255, 0, 0]);
        expect(cmyk2rgb({ c: 0, m: 100, y: 100, k: 0 }, OutputType.OBJECT)).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(cmyk2rgb('device-cmyk(100%, 100%, 0%, 0%)')).toStrictEqual({ r: 0, g: 0, b: 255 });
        expect(cmyk2rgb('device-cmyk(0%, 100%, 0%, 0%)')).toStrictEqual({ r: 255, g: 0, b: 255 });
        expect(cmyk2rgb('device-cmyk(91%, 0%, 53%, 5%)')).toStrictEqual({ r: 22, g: 242, b: 114 });
        expect(cmyk2rgb('device-cmyk(0%, 94%, 99%, 44%)')).toStrictEqual({ r: 143, g: 9, b: 1 });
        expect(cmyk2rgb('device-cmyk(98%, 0%, 51%, 25%)')).toStrictEqual({ r: 4, g: 191, b: 94 });
        expect(cmyk2rgb('device-cmyk(61%, 31%, 0%, 44%)')).toStrictEqual({ r: 56, g: 99, b: 143 });
        expect(cmyk2rgb('device-cmyk(84%, 41%, 0%, 0%)')).toStrictEqual({ r: 41, g: 150, b: 255 });
    });
    test('it should transform rgb to cmyk and return a RGB string', () => {
        expect(cmyk2rgbString('device-cmyk(0%, 50%, 100%, 0%)')).toBe('rgb(255, 128, 0)');
        expect(cmyk2rgbString('device-cmyk(100%, 0%, 100%, 0%)')).toBe('rgb(0, 255, 0)');
        expect(cmyk2rgbString({ c: 59.09, m: 86.36, y: 0, k: 13.73 })).toBe('rgb(90, 30, 220)');
        expect(cmyk2rgbString([85, 0, 22, 44])).toBe('rgb(21, 143, 111)');
    });
    test('it should transform rgb to cmyk and return a RGB object', () => {
        expect(cmyk2rgbObject('device-cmyk(0%, 50%, 100%, 0%)')).toStrictEqual({ r: 255, g: 128, b: 0 });
        expect(cmyk2rgbObject('device-cmyk(100%, 0%, 100%, 0%)')).toStrictEqual({ r: 0, g: 255, b: 0 });
        expect(cmyk2rgbObject({ c: 59.09, m: 86.36, y: 0, k: 13.73 })).toStrictEqual({ r: 90, g: 30, b: 220 });
        expect(cmyk2rgbObject([85, 0, 22, 44])).toStrictEqual({ r: 21, g: 143, b: 111 });
    });
    test('it should transform rgb to cmyk and return a RGB array', () => {
        expect(cmyk2rgbArray('device-cmyk(0%, 50%, 100%, 0%)')).toStrictEqual([255, 128, 0]);
        expect(cmyk2rgbArray('device-cmyk(100%, 0%, 100%, 0%)')).toStrictEqual([0, 255, 0]);
        expect(cmyk2rgbArray({ c: 59.09, m: 86.36, y: 0, k: 13.73 })).toStrictEqual([90, 30, 220]);
        expect(cmyk2rgbArray([85, 0, 22, 44])).toStrictEqual([21, 143, 111]);
    });
});
