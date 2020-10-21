import { CMYK, CmykTypes } from '../../types';
import { isValidCMYK } from './utilities';

function parse2cmyk(input: CmykTypes): CMYK {
    let parsed;
    if (typeof input === 'string') {
        try {
            const pattern = /cmyk\((?<cyan>[+-]?\d+(\.\d+)?)\%, ?(?<magenta>[+-]?\d+(\.\d+)?)\%, ?(?<yellow>[+-]?\d+(\.\d+)?)\%, ?(?<key>[+-]?\d+(\.\d+)?)\%\)/g;
            const regexRes = pattern.exec(input);
            if (regexRes?.groups) {
                const cyan = regexRes.groups['cyan'];
                const magenta = regexRes.groups['magenta'];
                const yellow = regexRes.groups['yellow'];
                const key = regexRes.groups['key'];

                if (cyan && magenta && yellow && key) {
                    parsed = {
                        c: parseFloat(cyan),
                        m: parseFloat(magenta),
                        y: parseFloat(yellow),
                        k: parseFloat(key),
                    };
                } else {
                    throw Error();
                }
            } else {
                throw Error();
            }
        } catch {
            throw new Error('Unable to parse input string');
        }
    } else if (Array.isArray(input)) {
        parsed = {
            c: input[0],
            m: input[1],
            y: input[2],
            k: input[3],
        };
    } else if (typeof input === 'object' && input !== null) {
        parsed = input as CMYK;
    } else {
        throw new Error('Unsuppored input type');
    }

    if (!isValidCMYK(parsed.c, parsed.m, parsed.y, parsed.k)) {
        throw new Error('CMYK values are invalid. They should be between 0-100.');
    }
    return parsed;
}

export default parse2cmyk;
