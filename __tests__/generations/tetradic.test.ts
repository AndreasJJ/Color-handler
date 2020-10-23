import { tetradic } from '../../src/harmony';

describe('Complementary Generator', () => {
    test('it should generate the correct tetradic colors given an inital color.', () => {
        expect(tetradic({ r: 255, g: 255, b: 255 })).toEqual([
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
        ]);
        expect(tetradic({ r: 0, g: 0, b: 0 })).toEqual([
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
            { r: 0, g: 0, b: 0 },
        ]);
        expect(tetradic({ r: 128, g: 128, b: 128 })).toEqual([
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
            { r: 128, g: 128, b: 128 },
        ]);
        expect(tetradic({ r: 150, g: 150, b: 150 })).toEqual([
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
            { r: 150, g: 150, b: 150 },
        ]);
        expect(tetradic({ r: 0, g: 255, b: 0 })).toEqual([
            { r: 0, g: 255, b: 0 },
            { r: 0, g: 255, b: 255 },
            { r: 255, g: 0, b: 0 },
            { r: 255, g: 0, b: 255 },
        ]);
        expect(tetradic({ r: 45, g: 230, b: 73 })).toEqual([
            { r: 45, g: 230, b: 73 },
            { r: 45, g: 202, b: 230 },
            { r: 230, g: 73, b: 45 },
            { r: 230, g: 45, b: 202 },
        ]);
        expect(tetradic({ r: 89, g: 0, b: 240 })).toEqual([
            { r: 89, g: 0, b: 240 },
            { r: 240, g: 0, b: 151 },
            { r: 0, g: 240, b: 89 },
            { r: 151, g: 240, b: 0 },
        ]);
        expect(tetradic({ r: 40, g: 120, b: 200 })).toEqual([
            { r: 40, g: 120, b: 200 },
            { r: 120, g: 40, b: 200 },
            { r: 120, g: 200, b: 40 },
            { r: 200, g: 120, b: 40 },
        ]);
        expect(tetradic({ r: 200, g: 34, b: 89 })).toEqual([
            { r: 200, g: 34, b: 89 },
            { r: 200, g: 145, b: 34 },
            { r: 34, g: 89, b: 200 },
            { r: 34, g: 200, b: 145 },
        ]);
        expect(tetradic({ r: 110, g: 23, b: 0 })).toEqual([
            { r: 110, g: 23, b: 0 },
            { r: 87, g: 110, b: 0 },
            { r: 23, g: 0, b: 110 },
            { r: 0, g: 87, b: 110 },
        ]);
        expect(tetradic({ r: 20, g: 89, b: 34 })).toEqual([
            { r: 20, g: 89, b: 34 },
            { r: 20, g: 75, b: 89 },
            { r: 89, g: 34, b: 20 },
            { r: 89, g: 20, b: 75 },
        ]);
        expect(tetradic({ r: 44, g: 222, b: 111 })).toEqual([
            { r: 44, g: 222, b: 111 },
            { r: 44, g: 155, b: 222 },
            { r: 222, g: 111, b: 44 },
            { r: 222, g: 44, b: 155 },
        ]);
        expect(tetradic({ r: 69, g: 240, b: 33 })).toEqual([
            { r: 69, g: 240, b: 33 },
            { r: 33, g: 240, b: 204 },
            { r: 240, g: 33, b: 69 },
            { r: 204, g: 33, b: 240 },
        ]);
        // Custom distance
        expect(tetradic({ r: 69, g: 240, b: 33 }, 30)).toEqual([
            { r: 69, g: 240, b: 33 },
            { r: 33, g: 240, b: 101 },
            { r: 240, g: 33, b: 172 },
            { r: 204, g: 33, b: 240 },
        ]);
        expect(tetradic({ r: 44, g: 222, b: 111 }, 90)).toEqual([
            { r: 44, g: 222, b: 111 },
            { r: 44, g: 66, b: 222 },
            { r: 222, g: 200, b: 44 },
            { r: 222, g: 44, b: 155 },
        ]);
    });
});
