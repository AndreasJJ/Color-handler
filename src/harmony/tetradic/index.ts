import { RGB } from '../../types';
import { rgb2hslObject } from '../../rgb2hsl';
import { hsl2rgbObject } from '../../hsl2rgb';

function tetradic(color: RGB, distance = 60): [RGB, RGB, RGB, RGB] {
    const hsl = rgb2hslObject(color);

    let hue2 = hsl.h + distance;
    let hue3 = hsl.h + 180 + distance;
    let hue4 = hsl.h + 180;
    if (hue2 > 360) {
        hue2 -= 360;
    }
    if (hue3 > 360) {
        hue3 -= 360;
    }
    if (hue4 > 360) {
        hue4 -= 360;
    }

    return [
        color,
        hsl2rgbObject({ ...hsl, h: hue2 }),
        hsl2rgbObject({ ...hsl, h: hue3 }),
        hsl2rgbObject({ ...hsl, h: hue4 }),
    ];
}

export default tetradic;
