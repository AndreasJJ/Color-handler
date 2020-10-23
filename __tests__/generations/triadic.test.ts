import { triadic } from '../../src/harmony';

describe('Complementary Generator', () => {
    test('it should generate the correct triadic colors given an inital color.', () => {
        expect(triadic({ r: 255, g: 255, b: 255 })).toEqual([
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
        ]);
        expect(triadic({ r: 0, g: 0, b: 0 })).toEqual([
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
        ]);
        expect(triadic({ r: 128, g: 128, b: 128 })).toEqual([
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
        ]);
        expect(triadic({ r: 150, g: 150, b: 150 })).toEqual([
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
        ]);
        expect(triadic({ r: 0, g: 255, b: 0 })).toEqual([
            { r: 0, g: 255, b: 0 },
            { r: 0, g: 0, b: 255 },
            { r: 255, g: 0, b: 0 },
        ]);
        expect(triadic({ r: 45, g: 230, b: 73 })).toEqual([
            { r: 45, g: 230, b: 73 },
            { r: 73, g: 45, b: 230 },
            { r: 230, g: 73, b: 45 },
        ]);
        expect(triadic({ r: 89, g: 0, b: 240 })).toEqual([
            { r: 89, g: 0, b: 240 },
            { r: 240, g: 89, b: 0 },
            { r: 0, g: 240, b: 89 },
        ]);
        expect(triadic({ r: 40, g: 120, b: 200 })).toEqual([
            { r: 40, g: 120, b: 200 },
            { r: 200, g: 40, b: 120 },
            { r: 120, g: 200, b: 40 },
        ]);
        expect(triadic({ r: 200, g: 34, b: 89 })).toEqual([
            { r: 200, g: 34, b: 89 },
            { r: 89, g: 200, b: 34 },
            { r: 34, g: 89, b: 200 },
        ]);
        expect(triadic({ r: 110, g: 23, b: 0 })).toEqual([
            { r: 110, g: 23, b: 0 },
            { r: 0, g: 110, b: 23 },
            { r: 23, g: 0, b: 110 },
        ]);
        expect(triadic({ r: 20, g: 89, b: 34 })).toEqual([
            { r: 20, g: 89, b: 34 },
            { r: 34, g: 20, b: 89 },
            { r: 89, g: 34, b: 20 },
        ]);
        expect(triadic({ r: 44, g: 222, b: 111 })).toEqual([
            { r: 44, g: 222, b: 111 },
            { r: 111, g: 44, b: 222 },
            { r: 222, g: 111, b: 44 },
        ]);
        expect(triadic({ r: 69, g: 240, b: 33 })).toEqual([
            { r: 69, g: 240, b: 33 },
            { r: 33, g: 69, b: 240 },
            { r: 240, g: 33, b: 69 },
        ]);
    });
});
