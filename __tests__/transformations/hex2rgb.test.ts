import hex2rgb, { hex2rgbString, hex2rgbObject, hex2rgbArray } from '../../src/hex2Rgb';

describe('hex2rgb transformation', () => {
    test('it should transform hex to rgb and return type depending on output option', () => {
        //expect().toBe();
    });
    test('it should transform hex to rgb and return a RGB string', () => {
        expect(hex2rgbString('#000000')).toBe('rgb(0, 0, 0)');
        expect(hex2rgbString('#FFFFFF')).toBe('rgb(255, 255, 255)');
        expect(hex2rgbString('#EEEEEE')).toBe('rgb(238, 238, 238)');
        expect(hex2rgbString('#000')).toBe('rgb(0, 0, 0)');
        expect(hex2rgbString('#FFF')).toBe('rgb(255, 255, 255)');
        expect(hex2rgbString('#EEE')).toBe('rgb(238, 238, 238)');
    });
    test('it should transform hex to rgb and return a RGB object', () => {
        expect(hex2rgbObject('#000000')).toStrictEqual({ r: 0, g: 0, b: 0 });
        expect(hex2rgbObject('#FFFFFF')).toStrictEqual({ r: 255, g: 255, b: 255 });
        expect(hex2rgbObject('#EEEEEE')).toStrictEqual({ r: 238, g: 238, b: 238 });
        expect(hex2rgbObject('#000')).toStrictEqual({ r: 0, g: 0, b: 0 });
        expect(hex2rgbObject('#FFF')).toStrictEqual({ r: 255, g: 255, b: 255 });
        expect(hex2rgbObject('#EEE')).toStrictEqual({ r: 238, g: 238, b: 238 });
    });
    test('it should transform hex to rgb and return a RGB array', () => {
        expect(hex2rgbArray('#000000')).toStrictEqual([0, 0, 0]);
        expect(hex2rgbArray('#FFFFFF')).toStrictEqual([255, 255, 255]);
        expect(hex2rgbArray('#EEEEEE')).toStrictEqual([238, 238, 238]);
        expect(hex2rgbArray('#000')).toStrictEqual([0, 0, 0]);
        expect(hex2rgbArray('#FFF')).toStrictEqual([255, 255, 255]);
        expect(hex2rgbArray('#EEE')).toStrictEqual([238, 238, 238]);
    });
});
