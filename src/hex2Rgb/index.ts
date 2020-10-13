import { OutputType, RGB, RgbTypes } from '../types';
import { hex2rgbaObject } from '../hex2rgba';
import rgba2rgb, { rgba2rgbString, rgba2rgbObject, rgba2rgbArray } from '../rgba2rgb';

function hex2rgb(hex: string, output?: OutputType): RgbTypes {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject('#FFFFFF');
    return rgba2rgb(colorRGBA, backgroundRGBA, output);
}

function hex2rgbString(hex: string): string {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject('#FFFFFF');
    return rgba2rgbString(colorRGBA, backgroundRGBA);
}

function hex2rgbObject(hex: string): RGB {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject('#FFFFFF');
    return rgba2rgbObject(colorRGBA, backgroundRGBA);
}

function hex2rgbArray(hex: string): [number, number, number] {
    const colorRGBA = hex2rgbaObject(hex);
    const backgroundRGBA = hex2rgbaObject('#FFFFFF');
    return rgba2rgbArray(colorRGBA, backgroundRGBA);
}

export default hex2rgb;
export { hex2rgbString, hex2rgbObject, hex2rgbArray };
