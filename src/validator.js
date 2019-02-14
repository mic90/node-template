const ErrFirstArgBigger = new Error('First argument value is greater than expected');
const ErrSecondArgLower = new Error('Second argument value is lower than expected');

function validate(a, b) {
  if (a > 5) {
    throw ErrFirstArgBigger;
  }
  if (b < 10) {
    throw ErrSecondArgLower;
  }
}

module.exports = {
  validate,
};
