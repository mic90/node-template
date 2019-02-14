const { assert } = require('chai')
const sinon = require('sinon');
const proxyquire = require('proxyquire')
const validator = require('../src/validator');

describe('validator', () => {
  it('should throw if first argument is > 5', () => {
    // GIVEN
    const a = 6;
    const b = 0;
    // WHEN / THEN
    assert.throws(() => validator.validate(a, b), 'First argument value is greater than expected');
  })
  it('should throw if second argument is < 10', () => {
    // GIVEN
    const a = 4;
    const b = 0;
    // WHEN / THEN
    assert.throws(() => validator.validate(a, b), 'Second argument value is lower than expected');
  })
  it('should do nothing if arguments are valid', () => {
    // GIVEN
    const a = 4;
    const b = 11;
    // WHEN
    const result = validator.validate(a, b);
    // THEN
    assert.equal(result, undefined);
  })
});
