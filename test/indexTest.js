const { assert } = require('chai')
const sinon = require('sinon');
const proxyquire = require('proxyquire');

function load(validatorMock) {
  return proxyquire('../src/index', {
    './validator': {
      validate: validatorMock,
    },
  });
}

describe('main', () => {
  it('should throw if validator throws', () => {
    // GIVEN
    const a = 0;
    const b = 6;
    const validatorMock = sinon.fake.throws('validation failed');
    const index = load(validatorMock);
    // WHEN / THEN
    assert.throws(() => index(a, b), 'validation failed');
  });
  it('should return a + b if validator does not throw', () => {
    // GIVEN
    const a = 2;
    const b = 6;
    const validatorMock = sinon.fake();
    const index = load(validatorMock);
    // WHEN 
    const result = index(a, b);
    // THEN
    assert.equal(result, a + b);
  });
});
