# Lumino
Still WIP

A simple library for handling conversion of color models and generating different color harmonies.

## Docs
### Transformations
#### `rgba2rgb`
Usage: ```import rgba2rgb from 'lumino/rgba2rgb'``` \
Alternative usage: ```import { rgba2rgb } from 'lumino'```

```typescript
import rgba2rgb from 'lumino/rgba2rgb';
import { OutputType } from 'lumino';

// Accepts an rgba-string, rgba object, or rgba array. It's also possible
// to specify output type to string, array or object. Object is default.
const res1 = rgba2rgb('rgb(255, 0, 0, 0.5)');
// => {r: 255, g: 128, b: 128 }
const res2 = rgba2rgb({r: 255, g: 0, b: 0, a: 0.5}, undefined, OutputType.STRING);
// => rgb(255, 128, 128)
const res3 = rgba2rgb([255, 0, 0, 0.5], undefined, OutputType.ARRAY);
// => [255, 128, 128]

// Accepts different backgrounds in rgb (default is white)
const res4 = rgba2rgb('rgb(255, 0, 0, 0.5)', 'rgb(0, 0, 0)');
const res5 = rgba2rgb('rgb(255, 0, 0, 0.5)', {r: 0, g: 0, b: 0});
const res6 = rgba2rgb('rgb(255, 0, 0, 0.5)', [0, 0, 0]);
// => {r: 128, g: 0, b: 0}
```

Alternative versions: \
Usage: ```import { rgba2rgbString } from 'lumino/rgba2rgb'``` \
Alternative usage: ```import { rgba2rgbString } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB string.

Usage: ```import { rgba2rgbObject } from 'lumino/rgba2rgb'``` \
Alternative usage: ```import { rgba2rgbObject } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB object.

Usage: ```import { rgba2rgbArray } from 'lumino/rgba2rgb'``` \
Alternative usage: ```import { rgba2rgbArray } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB array.

#### `hex2rgb`
Usage: ```import hex2rgb from 'lumino/hex2rgb'``` \
Alternative usage: ```import { hex2rgb } from 'lumino'```

```typescript
import hex2rgb from 'lumino/hex2rgb';
import { OutputType } from 'lumino';

// Accepts an hex-string, either of length 3, 4, 6 or 8 (not including the #).
// It's also possible to specify output type to string, array or object. Object is default.
const res1 = hex2rgb('#FF0000');
// => {r: 255, g: 0, b: 0 }
const res2 = hex2rgb('#F00', undefined, OutputType.STRING);
// => rgb(255, 0, 0)
const res3 = hex2rgb('#F00', undefined, OutputType.ARRAY);
// => [255, 0, 0]

// Accepts different backgrounds in hex (default is white)
const res4 = hex2rgb('#FF0000', '#000000');
const res5 = hex2rgb('#FF0000', '#000000');
const res6 = hex2rgb('#FF0000', '#000000');
// => {r: 128, g: 0, b: 0}
```

Alternative versions: \
Usage: ```import { hex2rgbString } from 'lumino/hex2rgb'``` \
Alternative usage: ```import { hex2rgbString } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB string.

Usage: ```import { hex2rgbObject } from 'lumino/hex2rgb'``` \
Alternative usage: ```import { hex2rgbObject } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB object.

Usage: ```import { hex2rgbArray } from 'lumino/hex2rgb'``` \
Alternative usage: ```import { hex2rgbArray } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB array.

#### `hex2rgba`
Usage: ```import hex2rgba from 'lumino/hex2rgba'``` \
Alternative usage: ```import { hex2rgba } from 'lumino'```

```typescript
import hex2rgba from 'lumino/hex2rgba';
import { OutputType } from 'lumino';

// Accepts an hex-string, either of length 3, 6 (automatically sets opacity to 1), 4 or 8 
// (not including the #).
// It's also possible to specify output type to string, array or object. Object is default.
const res1 = hex2rgb('#FF000099');
// => {r: 255, g: 0, b: 0, a: 0.6 }
const res2 = hex2rgb('#F009', OutputType.STRING);
// => rgb(255, 0, 0, 0.6)
const res3 = hex2rgb('#F009', OutputType.ARRAY);
// => [255, 0, 0, 0.6]
```

Alternative versions: \
Usage: ```import { hex2rgabString } from 'lumino/hex2rgba'``` \
Alternative usage: ```import { hex2rgbaString } from 'lumino'``` \
Description: Works as the main function, but only returns a RGBA string.

Usage: ```import { hex2rgbaObject } from 'lumino/hex2rgba'``` \
Alternative usage: ```import { hex2rgbaObject } from 'lumino'``` \
Description: Works as the main function, but only returns a RGBA object.

Usage: ```import { hex2rgbaArray } from 'lumino/hex2rgba'``` \
Alternative usage: ```import { hex2rgabArray } from 'lumino'``` \
Description: Works as the main function, but only returns a RGBA array.

#### `hsl2rgb`
Usage: ```import hsl2rgb from 'lumino/hsl2rgb'``` \
Alternative usage: ```import { hsl2rgb } from 'lumino'```

```typescript
import hsl2rgb from 'lumino/hsl2rgb';

// Accepts an hsl-string, hsl object, or hsl array. It's also possible
// to specify output type to string, array or object. Object is default.
const res1 = hsl2rgb('hsl(0, 0%, 100%)');
// => {r: 255, g: 255, b: 255}
const res2 = hsl2rgb({h: 209, s: 100, l: 57.8}, undefined, OutputType.STRING);
// => rgb(40, 150, 255)
const res3 = hsl2rgb([120, 100, 50], undefined, OutputType.ARRAY);
// => [0, 255, 0]
```

Alternative versions: \
Usage: ```import { hsl2rgbString } from 'lumino/hsl2rgb'``` \
Alternative usage: ```import { hsl2rgbString } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB string.

Usage: ```import { hsl2rgbObject } from 'lumino/hsl2rgb'``` \
Alternative usage: ```import { hsl2rgbObject } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB object.

Usage: ```import { hsl2rgbArray } from 'lumino/hsl2rgb'``` \
Alternative usage: ```import { hsl2rgbArray } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB array.

#### `rgb2hsl`
Usage: ```import rgb2hsl from 'lumino/rgb2hsl'``` \
Alternative usage: ```import { rgb2hsl } from 'lumino'```

```typescript
import rgb2hsl from 'lumino/rgb2hsl';

// Accepts an rgb-string, rgb object, or rgb array. It's also possible
// to specify output type to string, array or object. Object is default.
const res1 = rgb2hsl('rgb(255, 255, 255)');
// => {h: 0, s: 0%, l: 100%}
const res2 = rgb2hsl({r: 40, g: 150, b: 255}, undefined, OutputType.STRING);
// => hsl(209, 100%, 57.8%)
const res3 = rgb2hsl([0, 255, 0], undefined, OutputType.ARRAY);
// => [120, 100, 50]
```

Alternative versions: \
Usage: ```import { rgb2hslString } from 'lumino/rgb2hsl'``` \
Alternative usage: ```import { rgb2hslString } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB string.

Usage: ```import { rgb2hslObject } from 'lumino/rgb2hsl'``` \
Alternative usage: ```import { rgb2hslObject } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB object.

Usage: ```import { rgb2hslArray } from 'lumino/rgb2hsl'``` \
Alternative usage: ```import { rgb2hslArray } from 'lumino'``` \
Description: Works as the main function, but only returns a RGB array.

### Generators
#### `complementary`
Usage: ```import complementary from 'lumino/harmony/complementary'``` \
Alternative usage: ```import { complementary } from 'lumino'```

```typescript
import complementary from 'lumino/harmony/complementary';

// Takes in a RGB object and returns a RGB object of the complementary color
const res1 = complementary({r: 0, g: 0, b: 0});
// => {r: 0, g: 0, b: 0}
const res2 = complementary({r: 128, g: 128, b: 128});
// => {r: 128, g: 128, b: 128}
const res3 = complementary({r: 45, g: 230, b: 73});
// => {r: 230, g: 45, b:202}
const res4 = complementary({r: 89, g: 0, b: 240});
// => {r: 152, g: 240, b: 0}
```

## TODO
### Conversion
* HSL to RGBA 
* HWB to RGB
* HWB to RGBA
* CMYK to RGB
* CMYK to RGBA
* RGBA to HEX
* RGBA to HWB
* RGBA to CMYK

### Harmony Generation
* Monochromatic
* Analogous
* Split complementary
* Triadic
* Tetradic
