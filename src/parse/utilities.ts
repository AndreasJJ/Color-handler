function isValidRGBA(r: number, g: number, b: number, a: number): boolean {
    if (!isValidRGB(r, g, b) || !isValidAlpha(a)) {
        return false;
    }
    return true;
}

function isValidRGB(r: number, g: number, b: number): boolean {
    if (!isValidRGBnum(r) || !isValidRGBnum(g) || !isValidRGBnum(b)) {
        return false;
    }
    return true;
}

function isValidRGBnum(num: number): boolean {
    if (num < 0 || num > 255) {
        return false;
    }
    return true;
}

function isValidAlpha(num: number): boolean {
    if (num < 0 || num > 1) {
        return false;
    }
    return true;
}

function isValidHSL(hue: number, saturation: number, lightness: number): boolean {
    if (hue < 0 || hue > 360 || saturation < 0 || saturation > 100 || lightness < 0 || lightness > 100) {
        return false;
    }
    return true;
}

export { isValidRGBA, isValidRGB, isValidHSL };
