import { RGB } from '../../types';
import { rgb2hslObject } from '../../rgb2hsl';
import { hsl2rgbObject } from '../../hsl2rgb';

function analogous(color: RGB): [RGB, RGB, RGB] {
    const hsl = rgb2hslObject(color);

    let hue2 = hsl.h + 30;
    let hue3 = hsl.h - 30;
    if (hue2 > 360) {
        hue2 -= 360;
    }
    if (hue3 < 0) {
        hue3 += 360;
    }

    return [color, hsl2rgbObject({ ...hsl, h: hue2 }), hsl2rgbObject({ ...hsl, h: hue3 })];
}

export default analogous;
