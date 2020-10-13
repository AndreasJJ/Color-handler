import { RGB } from '../../types';
import { rgb2HslObject } from '../../rgb2hsl';
import { hsl2RgbObject } from '../../hsl2rgb';

function complementary(color: RGB): RGB {
    const hsl = rgb2HslObject(color);

    hsl.h += 180;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }

    return hsl2RgbObject(hsl);
}

export default complementary;
