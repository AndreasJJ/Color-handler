import { RGB } from '../../types';
import { rgb2hslObject } from '../../rgb2hsl';
import { hsl2rgbObject } from '../../hsl2rgb';

function triadic(color: RGB): [RGB, RGB, RGB] {
    const distance = 120;
    const hsl = rgb2hslObject(color);

    let hue2 = hsl.h + distance;
    let hue3 = hsl.h + distance * 2;
    if (hue2 > 360) {
        hue2 -= 360;
    }
    if (hue3 > 360) {
        hue3 -= 360;
    }

    return [color, hsl2rgbObject({ ...hsl, h: hue2 }), hsl2rgbObject({ ...hsl, h: hue3 })];
}

export default triadic;
