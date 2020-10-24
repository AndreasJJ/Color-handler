import { splitComplementary } from '../../src/harmony';

describe('Complementary Generator', () => {
    test('it should generate the correct split-complementary colors given an inital color.', () => {
        expect(splitComplementary({ r: 255, g: 255, b: 255 })).toEqual([
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
        ]);
        expect(splitComplementary({ r: 0, g: 0, b: 0 })).toEqual([
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
        ]);
        expect(splitComplementary({ r: 128, g: 128, b: 128 })).toEqual([
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
        ]);
        expect(splitComplementary({ r: 150, g: 150, b: 150 })).toEqual([
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
        ]);
        expect(splitComplementary({ r: 0, g: 255, b: 0 })).toEqual([
            { r: 0, g: 255, b: 0 },
            { r: 255, g: 0, b: 128 },
            { r: 128, g: 0, b: 255 },
        ]);
        expect(splitComplementary({ r: 45, g: 230, b: 73 })).toEqual([
            { r: 45, g: 230, b: 73 },
            { r: 230, g: 45, b: 109 },
            { r: 165, g: 45, b: 230 },
        ]);
        expect(splitComplementary({ r: 89, g: 0, b: 240 })).toEqual([
            { r: 89, g: 0, b: 240 },
            { r: 31, g: 240, b: 0 },
            { r: 240, g: 209, b: 0 },
        ]);
        expect(splitComplementary({ r: 40, g: 120, b: 200 })).toEqual([
            { r: 40, g: 120, b: 200 },
            { r: 200, g: 200, b: 40 },
            { r: 200, g: 40, b: 40 },
        ]);
        expect(splitComplementary({ r: 200, g: 34, b: 89 })).toEqual([
            { r: 200, g: 34, b: 89 },
            { r: 34, g: 172, b: 200 },
            { r: 34, g: 200, b: 62 },
        ]);
        expect(splitComplementary({ r: 110, g: 23, b: 0 })).toEqual([
            { r: 110, g: 23, b: 0 },
            { r: 0, g: 32, b: 110 },
            { r: 0, g: 110, b: 78 },
        ]);
        expect(splitComplementary({ r: 20, g: 89, b: 34 })).toEqual([
            { r: 20, g: 89, b: 34 },
            { r: 89, g: 20, b: 41 },
            { r: 68, g: 20, b: 89 },
        ]);
        expect(splitComplementary({ r: 44, g: 222, b: 111 })).toEqual([
            { r: 44, g: 222, b: 111 },
            { r: 222, g: 44, b: 66 },
            { r: 200, g: 44, b: 222 },
        ]);
        expect(splitComplementary({ r: 69, g: 240, b: 33 })).toEqual([
            { r: 69, g: 240, b: 33 },
            { r: 240, g: 33, b: 172 },
            { r: 101, g: 33, b: 240 },
        ]);
    });
});
