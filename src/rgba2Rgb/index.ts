import { RGBA, RGB, OutputType, RgbaTypes, RgbTypes } from '../types';
import { parse2Rgb, parse2Rgba } from '../utilities/parse';

function rgba2rgb(input: RgbaTypes, background: RgbTypes = { r: 255, g: 255, b: 255 }, output?: OutputType): RgbTypes {
    switch (output) {
        case OutputType.STRING: {
            return rgba2rgbString(input, background);
        }
        case OutputType.OBJECT: {
            return rgba2rgbObject(input, background);
        }
        case OutputType.ARRAY: {
            return rgba2rgbArray(input, background);
        }
        default: {
            return rgba2rgbObject(input, background);
        }
    }
}

function rgba2rgbString(input: RgbaTypes, background: RgbTypes = { r: 255, g: 255, b: 255 }): string {
    const output = _rgba2rgb(parse2Rgba(input), parse2Rgb(background));
    return `rgb(${output.r}, ${output.g}, ${output.b})`;
}

function rgba2rgbObject(input: RgbaTypes, background: RgbTypes = { r: 255, g: 255, b: 255 }): RGB {
    return _rgba2rgb(parse2Rgba(input), parse2Rgb(background));
}

function rgba2rgbArray(input: RgbaTypes, background: RgbTypes = { r: 255, g: 255, b: 255 }): [number, number, number] {
    const output = _rgba2rgb(parse2Rgba(input), parse2Rgb(background));
    return [output.r, output.g, output.b];
}

function _rgba2rgb(value: RGBA, background: RGB): RGB {
    const a = Math.round((value.a + Number.EPSILON) * 100) / 100;
    return {
        r: Math.round((1 - a) * background.r + a * value.r),
        g: Math.round((1 - a) * background.g + a * value.g),
        b: Math.round((1 - a) * background.b + a * value.b),
    };
}

export default rgba2rgb;
export { rgba2rgbString, rgba2rgbObject, rgba2rgbArray };
