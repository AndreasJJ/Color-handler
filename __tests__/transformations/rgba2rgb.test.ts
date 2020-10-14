import rgba2rgb, { rgba2rgbString, rgba2rgbObject, rgba2rgbArray } from '../../src/rgba2rgb';
import { OutputType } from '../../src';

describe('rgba2rgb transformation', () => {
    test('it should transform hex to rgb and return type depending on output option', () => {
        expect(rgba2rgb('rgb(255, 0, 0, 1)')).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(rgba2rgb('rgb(255, 0, 0, 1)', undefined, OutputType.STRING)).toBe('rgb(255, 0, 0)');
        expect(rgba2rgb('rgb(255, 0, 0, 1)', undefined, OutputType.ARRAY)).toStrictEqual([255, 0, 0]);
        expect(rgba2rgb('rgb(255, 0, 0, 1)', undefined, OutputType.OBJECT)).toStrictEqual({ r: 255, g: 0, b: 0 });
        expect(rgba2rgb('rgb(255, 0, 0, 0.9)')).toStrictEqual({ r: 255, g: 25, b: 25 });
        expect(rgba2rgb('rgb(0, 0, 255, 0.8)')).toStrictEqual({ r: 51, g: 51, b: 255 });
        expect(rgba2rgb('rgb(255, 0, 255, 0.7)')).toStrictEqual({ r: 255, g: 77, b: 255 });
        expect(rgba2rgb('rgb(255, 0, 0, 0.6)')).toStrictEqual({ r: 255, g: 102, b: 102 });
        expect(rgba2rgb('rgb(0, 0, 255, 0.5)')).toStrictEqual({ r: 128, g: 128, b: 255 });
        expect(rgba2rgb('rgb(255, 0, 255, 0.4)')).toStrictEqual({ r: 255, g: 153, b: 255 });
    });
    test('it should transform hex to rgb and return a RGB string', () => {
        expect(rgba2rgbString('rgb(255, 128, 0, 1)')).toBe('rgb(255, 128, 0)');
        expect(rgba2rgbString('rgb(0, 255, 0, 1)')).toBe('rgb(0, 255, 0)');
        expect(rgba2rgbString('rgb(90, 30, 220, 1)')).toBe('rgb(90, 30, 220)');
        expect(rgba2rgbString('rgb(255, 128, 0, 0.5)', 'rgb(0, 0, 0)')).toBe('rgb(128, 64, 0)');
        expect(rgba2rgbString('rgb(0, 255, 0, 0.3)', 'rgb(255, 0, 0)')).toBe('rgb(179, 77, 0)');
        expect(rgba2rgbString('rgb(90, 30, 220, 0.8)', 'rgb(0, 255, 255)')).toBe('rgb(72, 75, 227)');
    });
    test('it should transform hex to rgb and return a RGB object', () => {
        expect(rgba2rgbObject('rgb(255, 128, 0, 1)')).toStrictEqual({ r: 255, g: 128, b: 0 });
        expect(rgba2rgbObject('rgb(0, 255, 0, 1)')).toStrictEqual({ r: 0, g: 255, b: 0 });
        expect(rgba2rgbObject('rgb(90, 30, 220, 1)')).toStrictEqual({ r: 90, g: 30, b: 220 });
        expect(rgba2rgbObject('rgb(255, 128, 0, 0.5)', 'rgb(0, 0, 0)')).toStrictEqual({ r: 128, g: 64, b: 0 });
        expect(rgba2rgbObject('rgb(0, 255, 0, 0.3)', 'rgb(255, 0, 0)')).toStrictEqual({ r: 179, g: 77, b: 0 });
        expect(rgba2rgbObject('rgb(90, 30, 220, 0.8)', 'rgb(0, 255, 255)')).toStrictEqual({ r: 72, g: 75, b: 227 });
    });
    test('it should transform hex to rgb and return a RGB array', () => {
        expect(rgba2rgbArray('rgb(255, 128, 0, 1)')).toStrictEqual([255, 128, 0]);
        expect(rgba2rgbArray('rgb(0, 255, 0, 1)')).toStrictEqual([0, 255, 0]);
        expect(rgba2rgbArray('rgb(90, 30, 220, 1)')).toStrictEqual([90, 30, 220]);
        expect(rgba2rgbArray('rgb(255, 128, 0, 0.5)', 'rgb(0, 0, 0)')).toStrictEqual([128, 64, 0]);
        expect(rgba2rgbArray('rgb(0, 255, 0, 0.3)', 'rgb(255, 0, 0)')).toStrictEqual([179, 77, 0]);
        expect(rgba2rgbArray('rgb(90, 30, 220, 0.8)', 'rgb(0, 255, 255)')).toStrictEqual([72, 75, 227]);
    });
});
