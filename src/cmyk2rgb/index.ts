import { CMYK, RGB, OutputType, CmykTypes, RgbTypes } from '../types';
import { parse2cmyk } from '../utilities/parse';

function cmyk2rgb(cmyk: CmykTypes, output?: OutputType): RgbTypes {
    switch (output) {
        case OutputType.STRING: {
            return cmyk2rgbString(cmyk);
        }
        case OutputType.OBJECT: {
            return cmyk2rgbObject(cmyk);
        }
        case OutputType.ARRAY: {
            return cmyk2rgbArray(cmyk);
        }
        default: {
            return cmyk2rgbObject(cmyk);
        }
    }
}

function cmyk2rgbString(cmyk: CmykTypes): string {
    const _cmyk = parse2cmyk(cmyk);
    const rgb = _cmyk2rgb(_cmyk);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function cmyk2rgbObject(cmyk: CmykTypes): RGB {
    const _cmyk = parse2cmyk(cmyk);
    const rgb = _cmyk2rgb(_cmyk);
    return rgb;
}

function cmyk2rgbArray(cmyk: CmykTypes): [number, number, number] {
    const _cmyk = parse2cmyk(cmyk);
    const rgb = _cmyk2rgb(_cmyk);
    return [rgb.r, rgb.g, rgb.b];
}

function _cmyk2rgb(cmyk: CMYK): RGB {
    const r = Math.round(255 * (1 - cmyk.c / 100) * (1 - cmyk.k / 100));
    const g = Math.round(255 * (1 - cmyk.m / 100) * (1 - cmyk.k / 100));
    const b = Math.round(255 * (1 - cmyk.y / 100) * (1 - cmyk.k / 100));
    return {
        r,
        g,
        b,
    };
}

export default cmyk2rgb;
export { cmyk2rgbString, cmyk2rgbObject, cmyk2rgbArray };
