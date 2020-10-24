import { RGB, OutputType, RgbTypes, HwbTypes } from '../types';
import { hsl2rgbObject } from '../hsl2rgb';
import { parse2hwb } from '../utilities/parse';

function hwb2rgb(input: HwbTypes, output?: OutputType): RgbTypes {
    switch (output) {
        case OutputType.STRING: {
            return hwb2rgbString(input);
        }
        case OutputType.OBJECT: {
            return hwb2rgbObject(input);
        }
        case OutputType.ARRAY: {
            return hwb2rgbArray(input);
        }
        default: {
            return hwb2rgbObject(input);
        }
    }
}

function hwb2rgbString(input: HwbTypes): string {
    const parsed = parse2hwb(input);
    const rgb = _hwb2rgb(parsed.h, parsed.w, parsed.b);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function hwb2rgbObject(input: HwbTypes): RGB {
    const parsed = parse2hwb(input);
    return _hwb2rgb(parsed.h, parsed.w, parsed.b);
}

function hwb2rgbArray(input: HwbTypes): [number, number, number] {
    const parsed = parse2hwb(input);
    const rgb = _hwb2rgb(parsed.h, parsed.w, parsed.b);
    return [rgb.r, rgb.g, rgb.b];
}

function _hwb2rgb(h: number, w: number, b: number): RGB {
    w /= 100;
    b /= 100;
    const rgb = hsl2rgbObject([h, 100, 50]);
    rgb.r = Math.round(((rgb.r / 255) * (1 - w - b) + w) * 255);
    rgb.g = Math.round(((rgb.g / 255) * (1 - w - b) + w) * 255);
    rgb.b = Math.round(((rgb.b / 255) * (1 - w - b) + w) * 255);
    return rgb;
}

export default hwb2rgb;
export { hwb2rgbString, hwb2rgbObject, hwb2rgbArray };
