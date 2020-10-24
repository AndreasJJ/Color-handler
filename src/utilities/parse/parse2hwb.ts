import { HWB, HwbTypes } from '../../types';
import { isValidHWB } from './utilities';

function parse2hwb(input: HwbTypes): HWB {
    let parsed;
    if (typeof input === 'string') {
        try {
            const pattern = /hwb\(([+-]?\d+(\.\d+)?), ?([+-]?\d+(\.\d+)?)\%, ?([+-]?\d+(\.\d+)?)\%\)/g;
            const regexRes = pattern.exec(input);

            if (regexRes) {
                parsed = {
                    h: parseFloat(regexRes[1]),
                    w: parseFloat(regexRes[3]),
                    b: parseFloat(regexRes[5]),
                };
            } else {
                throw new Error('Unable to parse input string');
            }
        } catch {
            throw new Error('Unable to parse input string');
        }
    } else if (Array.isArray(input)) {
        parsed = {
            h: input[0],
            w: input[1],
            b: input[2],
        };
    } else if (typeof input === 'object' && input !== null) {
        parsed = input as HWB;
    } else {
        throw new Error('Unsuppored input type');
    }

    if (!isValidHWB(parsed.h, parsed.w, parsed.b)) {
        throw new Error('HWB values are invalid.');
    }
    return parsed;
}

export default parse2hwb;
