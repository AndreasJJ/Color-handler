import { parse2Rgb } from '../utilities/parse';
import { HSL, RgbTypes, OutputType, HslTypes } from '../types';

function rgb2Hsl(input: RgbTypes, output?: OutputType): HslTypes {
    switch (output) {
        case OutputType.STRING: {
            return rgb2HslString(input);
        }
        case OutputType.OBJECT: {
            return rgb2HslObject(input);
        }
        case OutputType.ARRAY: {
            return rgb2HslArray(input);
        }
        default: {
            return rgb2HslObject(input);
        }
    }
}

function rgb2HslString(input: RgbTypes): string {
    const parsed = parse2Rgb(input);
    const hsl = _rgb2Hsl(parsed.r, parsed.g, parsed.b);
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}

function rgb2HslObject(input: RgbTypes): HSL {
    const parsed = parse2Rgb(input);
    return _rgb2Hsl(parsed.r, parsed.g, parsed.b);
}

function rgb2HslArray(input: RgbTypes): [number, number, number] {
    const parsed = parse2Rgb(input);
    const hsl = _rgb2Hsl(parsed.r, parsed.g, parsed.b);
    return [hsl.h, hsl.s, hsl.l];
}

function _rgb2Hsl(r: number, g: number, b: number): HSL {
    r = r / 255;
    g = g / 255;
    b = b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let hue;
    if (delta === 0) {
        hue = 0;
    } else if (max === r) {
        hue = ((g - b) / delta) % 6;
    } else if (max === g) {
        hue = (b - r) / delta + 2;
    } else if (max === b) {
        hue = (r - g) / delta + 4;
    } else {
        throw new Error('Failed to convert rgb');
    }
    const lightness = (min + max) / 2;
    const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

    let h = Math.round((hue * 60 + Number.EPSILON) * 100) / 100;
    if (h < 0) {
        h += 360;
    }
    const s = Math.round((saturation * 100 + Number.EPSILON) * 100) / 100;
    const l = Math.round((lightness * 100 + Number.EPSILON) * 100) / 100;
    return {
        h,
        s,
        l,
    };
}

export default rgb2Hsl;
export { rgb2Hsl, rgb2HslString, rgb2HslObject, rgb2HslArray };
