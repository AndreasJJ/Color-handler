import { parse2rgb } from '../utilities/parse';
import { rgb2hslObject } from '../rgb2hsl';
import { HWB, RgbTypes, OutputType, HwbTypes } from '../types';

function rgb2hwb(input: RgbTypes, output?: OutputType): HwbTypes {
    switch (output) {
        case OutputType.STRING: {
            return rgb2hwbString(input);
        }
        case OutputType.OBJECT: {
            return rgb2hwbObject(input);
        }
        case OutputType.ARRAY: {
            return rgb2hwbArray(input);
        }
        default: {
            return rgb2hwbObject(input);
        }
    }
}

function rgb2hwbString(input: RgbTypes): string {
    const parsed = parse2rgb(input);
    const hwb = _rgb2hwb(parsed.r, parsed.g, parsed.b);
    return `hwb(${hwb.h}, ${hwb.w}%, ${hwb.b}%)`;
}

function rgb2hwbObject(input: RgbTypes): HWB {
    const parsed = parse2rgb(input);
    return _rgb2hwb(parsed.r, parsed.g, parsed.b);
}

function rgb2hwbArray(input: RgbTypes): [number, number, number] {
    const parsed = parse2rgb(input);
    const hwb = _rgb2hwb(parsed.r, parsed.g, parsed.b);
    return [hwb.h, hwb.w, hwb.b];
}

function _rgb2hwb(r: number, g: number, b: number): HWB {
    const H = rgb2hslObject({ r, g, b }).h;
    const W = roundToTwoDecimals((Math.min(r, g, b) / 255) * 100);
    const B = roundToTwoDecimals((1 - Math.max(r, g, b) / 255) * 100);
    return {
        h: H,
        w: W,
        b: B,
    };
}

function roundToTwoDecimals(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

export default rgb2hwb;
export { rgb2hwbString, rgb2hwbObject, rgb2hwbArray };
