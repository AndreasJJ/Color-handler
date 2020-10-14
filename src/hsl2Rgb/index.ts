import { RGB, OutputType, HslTypes, RgbTypes } from '../types';
import { parse2hsl } from '../utilities/parse';

// Hue ∈ [0, 360], saturation ∈ [0, 100], and lightness L ∈ [0, 100]
function hsl2rgb(input: HslTypes, output?: OutputType): RgbTypes {
    switch (output) {
        case OutputType.STRING: {
            return hsl2rgbString(input);
        }
        case OutputType.OBJECT: {
            return hsl2rgbObject(input);
        }
        case OutputType.ARRAY: {
            return hsl2rgbArray(input);
        }
        default: {
            return hsl2rgbObject(input);
        }
    }
}

function hsl2rgbString(input: HslTypes): string {
    const parsed = parse2hsl(input);
    const rgb = _hsl2rgb(parsed.h, parsed.s, parsed.l);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function hsl2rgbObject(input: HslTypes): RGB {
    const parsed = parse2hsl(input);
    return _hsl2rgb(parsed.h, parsed.s, parsed.l);
}

function hsl2rgbArray(input: HslTypes): [number, number, number] {
    const parsed = parse2hsl(input);
    const rgb = _hsl2rgb(parsed.h, parsed.s, parsed.l);
    return [rgb.r, rgb.g, rgb.b];
}

function _hsl2rgb(hue: number, saturation: number, lightness: number): RGB {
    saturation /= 100;
    lightness /= 100;
    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const Hue = hue / 60.0;
    const temp = chroma * (1 - Math.abs((Hue % 2) - 1));
    let rgb;
    if (isNaN(hue)) {
        rgb = [0, 0, 0];
    } else if (Hue <= 1) {
        rgb = [chroma, temp, 0];
    } else if (Hue <= 2) {
        rgb = [temp, chroma, 0];
    } else if (Hue <= 3) {
        rgb = [0, chroma, temp];
    } else if (Hue <= 4) {
        rgb = [0, temp, chroma];
    } else if (Hue <= 5) {
        rgb = [temp, 0, chroma];
    } else if (Hue <= 6) {
        rgb = [chroma, 0, temp];
    } else {
        throw new Error('Failed to convert hsl');
    }
    const amount = lightness - chroma * 0.5;
    return {
        r: Math.round(255 * (rgb[0] + amount)),
        g: Math.round(255 * (rgb[1] + amount)),
        b: Math.round(255 * (rgb[2] + amount)),
    };
}

export default hsl2rgb;
export { hsl2rgbString, hsl2rgbObject, hsl2rgbArray };
