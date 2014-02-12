
/**
 * Expose `mol`.
 */

module.exports = mol;

/**
 * Parse the Mol file format (for chemicals/molecules).
 *
 * @param {String} str
 * @api public
 */

function mol(str) {
  var nodes = []; // atoms
  var edges = []; // edges
  var lines = str.split('\n');

  var data = {
    nodes: nodes,
    edges: edges
  };

  var name = lines[0].trim();
  var program = lines[1].trim();
  if (name) data.name = name;
  if (program) data.program = program;

  var nnodes = +lines[3].substr(0, 3);
  var nedges = +lines[3].substr(3, 3);

  for (var i = 4, n = 4 + nnodes; i < n; ++i) {
    var line = lines[i].trim().split(/\s+/);

    nodes.push({
      x: +line[0],
      y: +line[1],
      z: +line[2],
      symbol: line[3]
    });
  }

  for (var i = 4 + nnodes, n = 4 + nnodes + nedges; i < n; ++i) {
    var line = lines[i].trim().split(/\s+/);

    edges.push({
      source: +line[0] - 1,
      target: +line[1] - 1,
      count: +line[2]
    });
  }

  return data;
}