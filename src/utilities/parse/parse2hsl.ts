import { HSL, HslTypes } from '../../types';
import { isValidHSL } from './utilities';

function parse2hsl(input: HslTypes): HSL {
    let parsed;
    if (typeof input === 'string') {
        try {
            const _arr = input.match(/[+-]?\d+(\.\d+)?/g);
            if (!_arr || _arr.length !== 3) {
                throw new Error();
            }
            const _arrNums = [parseFloat(_arr[0]), parseFloat(_arr[1]), parseFloat(_arr[2])];
            parsed = {
                h: _arrNums[0],
                s: _arrNums[1],
                l: _arrNums[2],
            };
        } catch {
            throw new Error('Unable to parse input string');
        }
    } else if (Array.isArray(input)) {
        parsed = {
            h: input[0],
            s: input[1],
            l: input[2],
        };
    } else if (typeof input === 'object' && input !== null) {
        parsed = input as HSL;
    } else {
        throw new Error('Unsuppored input type');
    }

    if (!isValidHSL(parsed.h, parsed.s, parsed.l)) {
        throw new Error(
            'HSL values are invalid. Hue should be between 0-360, and saturation/lightness should be between 0-100.',
        );
    }
    return parsed;
}

export default parse2hsl;
