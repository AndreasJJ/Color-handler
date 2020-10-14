import { RGB } from '../../types';
import { rgb2hslObject } from '../../rgb2hsl';
import { hsl2rgbObject } from '../../hsl2rgb';

function complementary(color: RGB): RGB {
    const hsl = rgb2hslObject(color);

    hsl.h += 180;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }

    return hsl2rgbObject(hsl);
}

export default complementary;
