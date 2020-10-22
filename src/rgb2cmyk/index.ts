import { parse2rgb } from '../utilities/parse';
import { CMYK, RgbTypes, OutputType, CmykTypes } from '../types';

function rgb2cmyk(input: RgbTypes, output?: OutputType): CmykTypes {
    switch (output) {
        case OutputType.STRING: {
            return rgb2cmykString(input);
        }
        case OutputType.OBJECT: {
            return rgb2cmykObject(input);
        }
        case OutputType.ARRAY: {
            return rgb2cmykArray(input);
        }
        default: {
            return rgb2cmykObject(input);
        }
    }
}

function rgb2cmykString(input: RgbTypes): string {
    const parsed = parse2rgb(input);
    const cmyk = _rgb2cmyk(parsed.r, parsed.g, parsed.b);
    return `device-cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
}

function rgb2cmykObject(input: RgbTypes): CMYK {
    const parsed = parse2rgb(input);
    return _rgb2cmyk(parsed.r, parsed.g, parsed.b);
}

function rgb2cmykArray(input: RgbTypes): [number, number, number, number] {
    const parsed = parse2rgb(input);
    const cmyk = _rgb2cmyk(parsed.r, parsed.g, parsed.b);
    return [cmyk.c, cmyk.m, cmyk.y, cmyk.k];
}

function _rgb2cmyk(r: number, g: number, b: number): CMYK {
    const rc = r / 255;
    const gc = g / 255;
    const bc = b / 255;
    const k = 1 - Math.max(rc, gc, bc);

    const c = (1 - rc - k) / (1 - k);
    const m = (1 - gc - k) / (1 - k);
    const y = (1 - bc - k) / (1 - k);

    return {
        c: toPercentageAndRoundTo2Digits(c),
        m: toPercentageAndRoundTo2Digits(m),
        y: toPercentageAndRoundTo2Digits(y),
        k: toPercentageAndRoundTo2Digits(k),
    };
}

function toPercentageAndRoundTo2Digits(num: number): number {
    return Math.round((num * 100 + Number.EPSILON) * 100) / 100;
}

export default rgb2cmyk;
export { rgb2cmyk, rgb2cmykString, rgb2cmykObject, rgb2cmykArray };
