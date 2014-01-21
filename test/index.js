var mol = 'undefined' == typeof window
  ? require('..')
  : require('mol-parser'); // how to do this better?

var assert = require('assert');
var fs = require('fs');

describe('molParser', function(){
  it('should parse glucose', function(){
    var str = fs.readFileSync('./test/glucose.mol', 'utf-8');
    var glucose = mol(str);
    var expected = { nodes:
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
      program: 'ChemDraw06210908192D' };

    assert.deepEqual(glucose, expected);
  });
});