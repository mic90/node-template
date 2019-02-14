const validator = require('./validator');

function main(a, b) {
  validator.validate(a, b);
  return a + b;
}

module.exports = main;
