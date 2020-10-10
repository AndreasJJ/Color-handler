import { RGBA, RgbaTypes } from '../types';
import { isValidRGBA } from './utilities';

function parse2Rgba(input: RgbaTypes): RGBA {
    let parsed: RGBA;
    if (typeof input === 'string') {
        try {
            const _arr = input.match(/[+-]?\d+(\.\d+)?/g);
            if (!_arr || _arr.length !== 4) {
                throw new Error();
            }
            const _arrNums = [parseInt(_arr[0]), parseInt(_arr[1]), parseInt(_arr[2]), parseFloat(_arr[3])];
            parsed = {
                r: _arrNums[0],
                g: _arrNums[1],
                b: _arrNums[2],
                a: _arrNums[3],
            };
        } catch {
            throw new Error('Unable to parse input string');
        }
    } else if (Array.isArray(input)) {
        parsed = {
            r: input[0],
            g: input[1],
            b: input[2],
            a: input[3],
        };
    } else if (typeof input === 'object' && input !== null) {
        parsed = input as RGBA;
    } else {
        throw new Error('Unsuppored input type');
    }
    if (!isValidRGBA(parsed.r, parsed.g, parsed.b, parsed.a)) {
        throw new Error('RGBA values are invalid. RGB should be between 0-255, and A should be between 0-1.');
    }
    return parsed;
}

export default parse2Rgba;
