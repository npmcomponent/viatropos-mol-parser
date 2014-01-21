# Mol Parser

## Installation

node.js:

```bash
npm install mol-parser
```

browser:

```bash
component install viatropos/mol-parser
```

## Example

```js
var mol = require('mol-parser');
var glucose = mol(theStringBelow);
```

input:

```mol
1772-03-8.mol
  ChemDraw06210908192D

 12 11  0  0  0  0  0  0  0  0999 V2000
   -1.8563   -0.3572    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   -1.0313   -0.3572    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.6187    0.3572    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.0313    1.0717    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    0.2062    0.3572    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.6187    1.0717    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    0.6187   -0.3572    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.2062   -1.0717    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    1.4437   -0.3572    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.8563   -1.0717    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    1.8563    0.3572    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.4437    1.0717    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  2  0      
  2  3  1  0      
  3  4  1  6      
  3  5  1  0      
  5  6  1  1      
  5  7  1  0      
  7  8  1  1      
  7  9  1  0      
  9 10  1  1      
  9 11  1  0      
 11 12  1  0      
M  END
```

output:

```js
{ nodes:
   [ { x: -1.8563, y: -0.3572, z: 0, symbol: 'O' },
     { x: -1.0313, y: -0.3572, z: 0, symbol: 'C' },
     { x: -0.6187, y: 0.3572, z: 0, symbol: 'C' },
     { x: -1.0313, y: 1.0717, z: 0, symbol: 'O' },
     { x: 0.2062, y: 0.3572, z: 0, symbol: 'C' },
     { x: 0.6187, y: 1.0717, z: 0, symbol: 'O' },
     { x: 0.6187, y: -0.3572, z: 0, symbol: 'C' },
     { x: 0.2062, y: -1.0717, z: 0, symbol: 'O' } ],
  edges:
   [ { source: 0, target: 1, count: 2 },
     { source: 1, target: 2, count: 1 },
     { source: 2, target: 3, count: 1 },
     { source: 2, target: 4, count: 1 },
     { source: 4, target: 5, count: 1 },
     { source: 4, target: 6, count: 1 },
     { source: 6, target: 7, count: 1 },
     { source: 6, target: 8, count: 1 },
     { source: 8, target: 9, count: 1 },
     { source: 8, target: 10, count: 1 },
     { source: 10, target: 11, count: 1 } ],
  name: '1772-03-8.mol',
  program: 'ChemDraw06210908192D' }
```

## Notes

- MIME type: `chemical/x-mdl-molfile`

## Licence

MIT