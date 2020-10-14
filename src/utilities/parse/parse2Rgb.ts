import { RGB, RgbTypes } from '../../types';
import { isValidRGB } from './utilities';

function parse2rgb(background: RgbTypes): RGB {
    let parsed: RGB;
    if (typeof background === 'string') {
        try {
            const _arr = background.replace(/[^\d,]/g, '').split(',');
            if (!_arr || _arr.length !== 3) {
                throw new Error();
            }
            const _arrNums = [parseInt(_arr[0]), parseInt(_arr[1]), parseInt(_arr[2])];
            parsed = {
                r: _arrNums[0],
                g: _arrNums[1],
                b: _arrNums[2],
            };
        } catch {
            throw new Error(`Unable to parse input string ${background}`);
        }
    } else if (Array.isArray(background)) {
        parsed = {
            r: background[0],
            g: background[1],
            b: background[2],
        };
    } else if (typeof background === 'object' && background !== null && background) {
        parsed = background as RGB;
    } else {
        throw new Error('Unsuppored input type');
    }
    if (!isValidRGB(parsed.r, parsed.g, parsed.b)) {
        throw new Error('RGBA values are invalid. RGB should be between 0-255, and A should be between 0-1.');
    }
    return parsed;
}

export default parse2rgb;
