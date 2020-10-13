# Lumino
Still WIP

A simple library for handling conversion of color models and generating different color harmonies.

## Docs
### Transformations
#### `rgba2rgb`
Usage: ```import rgba2rgb from 'lumino/rgba2rgb'``` \
Alternative usage: ```import { rgba2rgb } from 'lumino'```

#### `hex2rgb`
Usage: ```import hex2rgb from 'lumino/hex2rgb'``` \
Alternative usage: ```import { hex2rgb } from 'lumino'```

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
