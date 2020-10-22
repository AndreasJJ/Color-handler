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
        expect(rgb2cmyk('rgb(23, 243, 115)')).toStrictEqual({ c: 90.53, m: 0, y: 52.67, k: 4.71 });
        expect(rgb2cmyk('rgb(143, 9, 1)')).toStrictEqual({ c: 0, m: 93.71, y: 99.3, k: 43.92 });
        expect(rgb2cmyk('rgb(3, 192, 94)')).toStrictEqual({ c: 98.44, m: 0, y: 51.04, k: 24.71 });
        expect(rgb2cmyk('rgb(56, 99, 143)')).toStrictEqual({ c: 60.84, m: 30.77, y: 0, k: 43.92 });
        expect(rgb2cmyk('rgb(40, 150, 255)')).toStrictEqual({ c: 84.31, m: 41.18, y: 0, k: 0 });
    });
    test('it should transform rgb to cmyk and return a RGB string', () => {
        expect(rgb2cmykString('rgb(255, 128, 0)')).toBe('device-cmyk(0%, 49.8%, 100%, 0%)');
        expect(rgb2cmykString('rgb(0, 255, 0)')).toBe('device-cmyk(100%, 0%, 100%, 0%)');
        expect(rgb2cmykString('rgb(90, 30, 220)')).toBe('device-cmyk(59.09%, 86.36%, 0%, 13.73%)');
        expect(rgb2cmykString('rgb(22, 143, 111)')).toBe('device-cmyk(84.62%, 0%, 22.38%, 43.92%)');
    });
    test('it should transform rgb to cmyk and return a RGB object', () => {
        expect(rgb2cmykObject('rgb(255, 128, 0)')).toStrictEqual({ c: 0, m: 49.8, y: 100, k: 0 });
        expect(rgb2cmykObject('rgb(0, 255, 0)')).toStrictEqual({ c: 100, m: 0, y: 100, k: 0 });
        expect(rgb2cmykObject('rgb(90, 30, 220)')).toStrictEqual({ c: 59.09, m: 86.36, y: 0, k: 13.73 });
        expect(rgb2cmykObject('rgb(22, 143, 111)')).toStrictEqual({ c: 84.62, m: 0, y: 22.38, k: 43.92 });
    });
    test('it should transform rgb to cmyk and return a RGB array', () => {
        expect(rgb2cmykArray('rgb(255, 128, 0)')).toStrictEqual([0, 49.8, 100, 0]);
        expect(rgb2cmykArray('rgb(0, 255, 0)')).toStrictEqual([100, 0, 100, 0]);
        expect(rgb2cmykArray('rgb(90, 30, 220)')).toStrictEqual([59.09, 86.36, 0, 13.73]);
        expect(rgb2cmykArray('rgb(22, 143, 111)')).toStrictEqual([84.62, 0, 22.38, 43.92]);
    });
});
