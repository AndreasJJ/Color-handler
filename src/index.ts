import { OutputType } from './types';
import rgba2rgb, { rgba2rgbString, rgba2rgbObject, rgba2rgbArray } from './rgba2rgb';
import hex2rgb, { hex2rgbString, hex2rgbObject, hex2rgbArray } from './hex2rgb';
import hex2rgba, { hex2rgbaString, hex2rgbaObject, hex2rgbaArray } from './hex2rgba';
import hsl2rgb, { hsl2rgbString, hsl2rgbObject, hsl2rgbArray } from './hsl2rgb';
import rgb2hsl, { rgb2hslString, rgb2hslObject, rgb2hslArray } from './rgb2hsl';
import rgb2cmyk, { rgb2cmykString, rgb2cmykObject, rgb2cmykArray } from './rgb2cmyk';
import cmyk2rgb, { cmyk2rgbString, cmyk2rgbObject, cmyk2rgbArray } from './cmyk2rgb';
import rgb2hwb, { rgb2hwbString, rgb2hwbObject, rgb2hwbArray } from './rgb2hwb';
import { complementary, triadic, tetradic, splitComplementary } from './harmony';

export {
    rgba2rgb,
    rgba2rgbString,
    rgba2rgbObject,
    rgba2rgbArray,
    hex2rgb,
    hex2rgbString,
    hex2rgbObject,
    hex2rgbArray,
    hex2rgba,
    hex2rgbaString,
    hex2rgbaObject,
    hex2rgbaArray,
    OutputType,
    hsl2rgb,
    hsl2rgbString,
    hsl2rgbObject,
    hsl2rgbArray,
    rgb2hsl,
    rgb2hslString,
    rgb2hslObject,
    rgb2hslArray,
    rgb2cmyk,
    rgb2cmykString,
    rgb2cmykObject,
    rgb2cmykArray,
    cmyk2rgb,
    cmyk2rgbString,
    cmyk2rgbObject,
    cmyk2rgbArray,
    rgb2hwb,
    rgb2hwbString,
    rgb2hwbObject,
    rgb2hwbArray,
    complementary,
    triadic,
    tetradic,
    splitComplementary,
};
