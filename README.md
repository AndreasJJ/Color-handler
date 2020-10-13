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

// Accepts an rgba-string, rgba object, or rgba array. It's also possible
// to specify output type to string, array or object. Object is default.
const res1 = hex2rgb('#FF0000');
// => {r: 255, g: 0, b: 0 }
const res2 = hex2rgb('#FF0000', undefined, OutputType.STRING);
// => rgb(255, 0, 0)
const res3 = hex2rgb('#FF0000', undefined, OutputType.ARRAY);
// => [255, 0, 0]
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

#### `hsl2rgb`
Usage: ```import hsl2rgb from 'lumino/hsl2rgb'``` \
Alternative usage: ```import { hsl2rgb } from 'lumino'```

#### `rgb2hsl`
Usage: ```import rgb2hsl from 'lumino/rgb2hsl'``` \
Alternative usage: ```import { rgb2hsl } from 'lumino'```

### Generators
#### `complementary`
Usage: ```import complementary from 'lumino/harmony/complementary'``` \
Alternative usage: ```import { complementary } from 'lumino'```


## TODO
### Conversion
* HSL to RGBA 
* HWB to RGB
* HWB to RGBA
* CMYK to RGB
* CMYK to RGBA
* NCOL to RGB
* NCOL to RGBA
* RGBA to HEX
* RGBA to HWB
* RGBA to CMYK
* RGBA to NCOL

### Harmony Generation
* Monochromatic
* Analogous
* Split complementary
* Triadic
* Tetradic
