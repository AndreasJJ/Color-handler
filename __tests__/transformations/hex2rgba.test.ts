import hex2rgba, { hex2rgbaString, hex2rgbaObject, hex2rgbaArray } from '../../src/hex2Rgba';
import { OutputType } from '../../src';

describe('hex2rgba transformation', () => {
    test('it should transform hex to rgb and return type depending on output option', () => {
        expect(hex2rgba('#FF0000')).toStrictEqual({ r: 255, g: 0, b: 0, a: 1 });
        expect(hex2rgba('#FF0000', OutputType.STRING)).toBe('rgb(255, 0, 0, 1)');
        expect(hex2rgba('#FF0000', OutputType.ARRAY)).toStrictEqual([255, 0, 0, 1]);
        expect(hex2rgba('#FF0000', OutputType.OBJECT)).toStrictEqual({ r: 255, g: 0, b: 0, a: 1 });
        expect(hex2rgba('#FF0000E6')).toStrictEqual({ r: 255, g: 0, b: 0, a: 0.9 });
        expect(hex2rgba('#0000FFCC')).toStrictEqual({ r: 0, g: 0, b: 255, a: 0.8 });
        expect(hex2rgba('#FF00FFB3')).toStrictEqual({ r: 255, g: 0, b: 255, a: 0.7 });
        expect(hex2rgba('#FF000099')).toStrictEqual({ r: 255, g: 0, b: 0, a: 0.6 });
        expect(hex2rgba('#0000FF80')).toStrictEqual({ r: 0, g: 0, b: 255, a: 0.5 });
        expect(hex2rgba('#FF00FF66')).toStrictEqual({ r: 255, g: 0, b: 255, a: 0.4 });
    });
    test('it should transform hex to rgb and return a RGB string', () => {
        expect(hex2rgbaString('#000000')).toBe('rgb(0, 0, 0, 1)');
        expect(hex2rgbaString('#FFFFFF')).toBe('rgb(255, 255, 255, 1)');
        expect(hex2rgbaString('#EEEEEE33')).toBe('rgb(238, 238, 238, 0.2)');
        expect(hex2rgbaString('#000')).toBe('rgb(0, 0, 0, 1)');
        expect(hex2rgbaString('#FFF')).toBe('rgb(255, 255, 255, 1)');
        expect(hex2rgbaString('#EEE3')).toBe('rgb(238, 238, 238, 0.2)');
    });
    test('it should transform hex to rgb and return a RGB object', () => {
        expect(hex2rgbaObject('#000000')).toStrictEqual({ r: 0, g: 0, b: 0, a: 1 });
        expect(hex2rgbaObject('#FFFFFF')).toStrictEqual({ r: 255, g: 255, b: 255, a: 1 });
        expect(hex2rgbaObject('#EEEEEE33')).toStrictEqual({ r: 238, g: 238, b: 238, a: 0.2 });
        expect(hex2rgbaObject('#000')).toStrictEqual({ r: 0, g: 0, b: 0, a: 1 });
        expect(hex2rgbaObject('#FFF')).toStrictEqual({ r: 255, g: 255, b: 255, a: 1 });
        expect(hex2rgbaObject('#EEE3')).toStrictEqual({ r: 238, g: 238, b: 238, a: 0.2 });
    });
    test('it should transform hex to rgb and return a RGB array', () => {
        expect(hex2rgbaArray('#000000')).toStrictEqual([0, 0, 0, 1]);
        expect(hex2rgbaArray('#FFFFFF')).toStrictEqual([255, 255, 255, 1]);
        expect(hex2rgbaArray('#EEEEEE33')).toStrictEqual([238, 238, 238, 0.2]);
        expect(hex2rgbaArray('#000')).toStrictEqual([0, 0, 0, 1]);
        expect(hex2rgbaArray('#FFF')).toStrictEqual([255, 255, 255, 1]);
        expect(hex2rgbaArray('#EEE3')).toStrictEqual([238, 238, 238, 0.2]);
    });
});
