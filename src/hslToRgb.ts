import { RGB, OutputType, HslTypes, RgbTypes } from './types';
import { parse2Hsl } from './parse';

// Hue ∈ [0, 360], saturation ∈ [0, 100], and lightness L ∈ [0, 100]
function hsl2Rgb(input: HslTypes, output?: OutputType): RgbTypes {
    switch (output) {
        case OutputType.STRING: {
            return hsl2RgbString(input);
        }
        case OutputType.OBJECT: {
            return hsl2RgbObject(input);
        }
        case OutputType.ARRAY: {
            return hsl2RgbArray(input);
        }
        default: {
            return hsl2RgbObject(input);
        }
    }
}

function hsl2RgbString(input: HslTypes): string {
    const parsed = parse2Hsl(input);
    const rgb = _hsl2Rgb(parsed.h, parsed.s, parsed.l);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function hsl2RgbObject(input: HslTypes): RGB {
    const parsed = parse2Hsl(input);
    return _hsl2Rgb(parsed.h, parsed.s, parsed.l);
}

function hsl2RgbArray(input: HslTypes): [number, number, number] {
    const parsed = parse2Hsl(input);
    const rgb = _hsl2Rgb(parsed.h, parsed.s, parsed.l);
    return [rgb.r, rgb.g, rgb.b];
}

function _hsl2Rgb(hue: number, saturation: number, lightness: number): RGB {
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

export default hsl2Rgb;
export { hsl2RgbString, hsl2RgbObject, hsl2RgbArray };
