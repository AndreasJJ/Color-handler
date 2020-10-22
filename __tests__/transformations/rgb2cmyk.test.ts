import rgb2cmyk, { rgb2cmykString, rgb2cmykObject, rgb2cmykArray } from '../../src/rgb2cmyk';
import { OutputType } from '../../src';

describe('rgb2cmyk transformation', () => {
    test('it should transform rgb to cmyk and return type depending on output option', () => {
        expect(rgb2cmyk('rgb(255, 0, 0)')).toStrictEqual({ c: 0, m: 100, y: 100, k: 0 });
        expect(rgb2cmyk('rgb(255, 0, 0)', OutputType.STRING)).toBe('device-cmyk(0%, 100%, 100%, 0%)');
        expect(rgb2cmyk('rgb(255, 0, 0)', OutputType.ARRAY)).toStrictEqual([0, 100, 100, 0]);
        expect(rgb2cmyk('rgb(255, 0, 0)', OutputType.OBJECT)).toStrictEqual({ c: 0, m: 100, y: 100, k: 0 });
        expect(rgb2cmyk('rgb(0, 0, 255)')).toStrictEqual({ c: 100, m: 100, y: 0, k: 0 });
        expect(rgb2cmyk('rgb(255, 0, 255)')).toStrictEqual({ c: 0, m: 100, y: 0, k: 0 });
        expect(rgb2cmyk('rgb(23, 243, 115)')).toStrictEqual({ c: 91, m: 0, y: 53, k: 5 });
        expect(rgb2cmyk('rgb(143, 9, 1)')).toStrictEqual({ c: 0, m: 94, y: 99, k: 44 });
        expect(rgb2cmyk('rgb(3, 192, 94)')).toStrictEqual({ c: 98, m: 0, y: 51, k: 25 });
        expect(rgb2cmyk('rgb(56, 99, 143)')).toStrictEqual({ c: 61, m: 31, y: 0, k: 44 });
        expect(rgb2cmyk('rgb(40, 150, 255)')).toStrictEqual({ c: 84, m: 41, y: 0, k: 0 });
    });
    test('it should transform rgb to cmyk and return a RGB string', () => {
        expect(rgb2cmykString('rgb(255, 128, 0)')).toBe('device-cmyk(0%, 50%, 100%, 0%)');
        expect(rgb2cmykString('rgb(0, 255, 0)')).toBe('device-cmyk(100%, 0%, 100%, 0%)');
        expect(rgb2cmykString('rgb(90, 30, 220)')).toBe('device-cmyk(59%, 86%, 0%, 14%)');
        expect(rgb2cmykString('rgb(22, 143, 111)')).toBe('device-cmyk(85%, 0%, 22%, 44%)');
    });
    test('it should transform rgb to cmyk and return a RGB object', () => {
        expect(rgb2cmykObject('rgb(255, 128, 0)')).toStrictEqual({ c: 0, m: 50, y: 100, k: 0 });
        expect(rgb2cmykObject('rgb(0, 255, 0)')).toStrictEqual({ c: 100, m: 0, y: 100, k: 0 });
        expect(rgb2cmykObject('rgb(90, 30, 220)')).toStrictEqual({ c: 59, m: 86, y: 0, k: 14 });
        expect(rgb2cmykObject('rgb(22, 143, 111)')).toStrictEqual({ c: 85, m: 0, y: 22, k: 44 });
    });
    test('it should transform rgb to cmyk and return a RGB array', () => {
        expect(rgb2cmykArray('rgb(255, 128, 0)')).toStrictEqual([0, 50, 100, 0]);
        expect(rgb2cmykArray('rgb(0, 255, 0)')).toStrictEqual([100, 0, 100, 0]);
        expect(rgb2cmykArray('rgb(90, 30, 220)')).toStrictEqual([59, 86, 0, 14]);
        expect(rgb2cmykArray('rgb(22, 143, 111)')).toStrictEqual([85, 0, 22, 44]);
    });
});