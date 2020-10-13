import { RGBA, OutputType, RgbaTypes } from '../types';

function hex2rgba(hex: string, output?: OutputType): RgbaTypes {
    switch (output) {
        case OutputType.STRING: {
            return hex2rgbaString(hex);
        }
        case OutputType.OBJECT: {
            return hex2rgbaObject(hex);
        }
        case OutputType.ARRAY: {
            return hex2rgbaArray(hex);
        }
        default: {
            return hex2rgbaObject(hex);
        }
    }
}

function hex2rgbaString(hex: string): string {
    const rgba = _hex2rgba(hex);
    return `rgb(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}

function hex2rgbaObject(hex: string): RGBA {
    return _hex2rgba(hex);
}

function hex2rgbaArray(hex: string): [number, number, number, number] {
    const rgba = _hex2rgba(hex);
    return [rgba.r, rgba.g, rgba.b, rgba.a];
}

function _hex2rgba(hex: string): RGBA {
    const hexPattern = /^#(?:[0-9a-fA-F]{3}){1,2}(?:[0-9a-fA-F]{2})?$/;

    if (typeof hex !== 'string' || !hexPattern.test(hex)) {
        throw new TypeError('Invalid hex string');
    }

    hex = hex.replace('#', '');

    let alphaHex = 'FF';
    if (hex.length === 8) {
        alphaHex = hex.slice(6, 8);
        hex = hex.slice(0, 6);
    } else if (hex.length === 4) {
        alphaHex = hex[3];
        alphaHex += alphaHex;
        hex = hex.slice(0, 3);
    }
    const a = parseInt(alphaHex, 16) / 255;

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const hexVal = parseInt(hex, 16);
    const r = hexVal >> 16;
    const g = (hexVal >> 8) & 255;
    const b = hexVal & 255;

    return {
        r,
        g,
        b,
        a,
    };
}

export default hex2rgba;
export { hex2rgbaString, hex2rgbaObject, hex2rgbaArray };
