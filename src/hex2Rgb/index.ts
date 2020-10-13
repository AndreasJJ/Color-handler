import { OutputType, RGB, RgbTypes } from '../types';
import { hex2rgbaObject } from '../hex2Rgba';
import rgba2rgb, { rgba2rgbString, rgba2rgbObject, rgba2rgbArray } from '../rgba2Rgb';

function hex2rgb(hex: string, background = '#FFFFFF', output?: OutputType): RgbTypes {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject(background);
    return rgba2rgb(colorRGBA, backgroundRGBA, output);
}

function hex2rgbString(hex: string, background = '#FFFFFF'): string {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject(background);
    return rgba2rgbString(colorRGBA, backgroundRGBA);
}

function hex2rgbObject(hex: string, background = '#FFFFFF'): RGB {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject(background);
    return rgba2rgbObject(colorRGBA, backgroundRGBA);
}

function hex2rgbArray(hex: string, background = '#FFFFFF'): [number, number, number] {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject(background);
    return rgba2rgbArray(colorRGBA, backgroundRGBA);
}

export default hex2rgb;
export { hex2rgbString, hex2rgbObject, hex2rgbArray };
