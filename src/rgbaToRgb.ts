enum OutputType {
    STRING = "string",
    OBJECT = "object",
    ARRAY = "array",
}

interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface RGB {
    r: number;
    g: number;
    b: number;
}

type Input = string | RGBA | [number, number, number, number];
type Output = string | RGB | [number, number, number];
type Background = Output;

function rgba2rgb(input: Input, background: Background = {r: 255, g: 255, b: 255}, output?: OutputType): Output  {
    switch(output) {
        case OutputType.STRING: {
            return rgba2rgbString(input, background);
        }
        case OutputType.OBJECT: {
            return rgba2rgbObjekt(input, background);
        }
        case OutputType.ARRAY: {
            return rgba2rgbArray(input, background);
        }
        default: {
            return rgba2rgbObjekt(input, background);
        }
    }
};

function rgba2rgbString(input: Input, background: Background = {r: 255, g: 255, b: 255}): string {
    const output = _rgba2rgb(parseInput2RGBA(input), parseInput2RGB(background));
    return `rgb(${output.r}, ${output.g}, ${output.b})`;
};

function rgba2rgbObjekt(input: Input, background: Background = {r: 255, g: 255, b: 255}): RGB {
    return _rgba2rgb(parseInput2RGBA(input), parseInput2RGB(background));
};

function rgba2rgbArray(input: Input, background: Background = {r: 255, g: 255, b: 255}): [number, number, number] {
    const output = _rgba2rgb(parseInput2RGBA(input), parseInput2RGB(background));
    return [output.r, output.g, output.b];
};

function parseInput2RGBA(input: Input): RGBA {
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
            throw new Error("Unable to parse input string");
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
        throw new Error("Unsuppored input type");
    }
    if (!isValidRGBA(parsed.r, parsed.g, parsed.b, parsed.a)) {
        throw new Error("RGBA values are invalid. RGB should be between 0-255, and A should be between 0-1.");
    }
    return parsed;
};

function parseInput2RGB(background: Background): RGB {
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
            throw new Error("Unable to parse input string");
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
        throw new Error("Unsuppored input type");
    }
    if (!isValidRGB(parsed.r, parsed.g, parsed.b)) {
        throw new Error("RGBA values are invalid. RGB should be between 0-255, and A should be between 0-1.");
    }
    return parsed;
}

function isValidRGBA(r: number, g: number, b: number, a: number) {
    if (!isValidRGB(r, g, b) || !isValidAlpha(a)) {
        return false;
    }
    return true;
}

function isValidRGB(r: number, g: number, b: number) {
    if (!isValidRGBnum(r) || !isValidRGBnum(g) || !isValidRGBnum(b)) {
        return false;
    }
    return true;
}

function isValidRGBnum(num: number) {
    if (num < 0 || num > 255) {
        return false;
    }
    return true;
}

function isValidAlpha(num: number) {
    if (num < 0 || num > 1) {
        return false;
    }
    return true;
}

function _rgba2rgb(value: RGBA, background: RGB): RGB {
    return {
        r: Math.round((1 - value.a) * background.r + value.a * value.r),
        g: Math.round((1 - value.a) * background.g + value.a * value.g),
        b: Math.round((1 - value.a) * background.b + value.a * value.b),
    };
};

export default rgba2rgb;
export {
    rgba2rgbString,
    rgba2rgbObjekt,
    rgba2rgbArray
};
