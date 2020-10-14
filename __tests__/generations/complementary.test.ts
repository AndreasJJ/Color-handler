import { complementary } from '../../src/harmony/';

describe('Complementary Generator', () => {
    test('it should generate the correct complementary colors given an inital color.', () => {
        expect(complementary({ r: 255, g: 255, b: 255 })).toEqual({ r: 255, g: 255, b: 255 });
        expect(complementary({ r: 0, g: 0, b: 0 })).toEqual({ r: 0, g: 0, b: 0 });
        expect(complementary({ r: 128, g: 128, b: 128 })).toEqual({ r: 128, g: 128, b: 128 });
        expect(complementary({ r: 150, g: 150, b: 150 })).toEqual({ r: 150, g: 150, b: 150 });
        expect(complementary({ r: 0, g: 255, b: 0 })).toEqual({ r: 255, g: 0, b: 255 });
        expect(complementary({ r: 45, g: 230, b: 73 })).toEqual({ r: 230, g: 45, b: 202 });
        expect(complementary({ r: 89, g: 0, b: 240 })).toEqual({ r: 151, g: 240, b: 0 });
        expect(complementary({ r: 40, g: 120, b: 200 })).toEqual({ r: 200, g: 120, b: 40 });
        expect(complementary({ r: 200, g: 34, b: 89 })).toEqual({ r: 34, g: 200, b: 145 });
        expect(complementary({ r: 110, g: 23, b: 0 })).toEqual({ r: 0, g: 87, b: 110 });
        expect(complementary({ r: 20, g: 89, b: 34 })).toEqual({ r: 89, g: 20, b: 75 });
        expect(complementary({ r: 44, g: 222, b: 111 })).toEqual({ r: 222, g: 44, b: 155 });
        expect(complementary({ r: 69, g: 240, b: 33 })).toEqual({ r: 204, g: 33, b: 240 });
    });
});
