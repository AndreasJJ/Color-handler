import { analogous } from '../../src/harmony';

describe('Complementary Generator', () => {
    test('it should generate the correct analogous colors given an inital color.', () => {
        expect(analogous({ r: 255, g: 255, b: 255 })).toEqual([
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
        ]);
        expect(analogous({ r: 0, g: 0, b: 0 })).toEqual([
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
        ]);
        expect(analogous({ r: 128, g: 128, b: 128 })).toEqual([
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
        ]);
        expect(analogous({ r: 150, g: 150, b: 150 })).toEqual([
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
        ]);
        expect(analogous({ r: 0, g: 255, b: 0 })).toEqual([
            { r: 0, g: 255, b: 0 },
            { r: 0, g: 255, b: 128 },
            { r: 128, g: 255, b: 0 },
        ]);
        expect(analogous({ r: 45, g: 230, b: 73 })).toEqual([
            { r: 45, g: 230, b: 73 },
            { r: 45, g: 230, b: 165 },
            { r: 109, g: 230, b: 45 },
        ]);
        expect(analogous({ r: 89, g: 0, b: 240 })).toEqual([
            { r: 89, g: 0, b: 240 },
            { r: 209, g: 0, b: 240 },
            { r: 0, g: 31, b: 240 },
        ]);
        expect(analogous({ r: 40, g: 120, b: 200 })).toEqual([
            { r: 40, g: 120, b: 200 },
            { r: 40, g: 40, b: 200 },
            { r: 40, g: 200, b: 200 },
        ]);
        expect(analogous({ r: 200, g: 34, b: 89 })).toEqual([
            { r: 200, g: 34, b: 89 },
            { r: 200, g: 62, b: 34 },
            { r: 200, g: 34, b: 172 },
        ]);
        expect(analogous({ r: 110, g: 23, b: 0 })).toEqual([
            { r: 110, g: 23, b: 0 },
            { r: 110, g: 78, b: 0 },
            { r: 110, g: 0, b: 32 },
        ]);
        expect(analogous({ r: 20, g: 89, b: 34 })).toEqual([
            { r: 20, g: 89, b: 34 },
            { r: 20, g: 89, b: 68 },
            { r: 41, g: 89, b: 20 },
        ]);
        expect(analogous({ r: 44, g: 222, b: 111 })).toEqual([
            { r: 44, g: 222, b: 111 },
            { r: 44, g: 222, b: 200 },
            { r: 66, g: 222, b: 44 },
        ]);
        expect(analogous({ r: 69, g: 240, b: 33 })).toEqual([
            { r: 69, g: 240, b: 33 },
            { r: 33, g: 240, b: 101 },
            { r: 172, g: 240, b: 33 },
        ]);
    });
});
