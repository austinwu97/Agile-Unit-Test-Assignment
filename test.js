const operations = require('./operations.js');
const assert = require('assert');


it('correctly calculates the sum of -3 and -5, which should be -8', () => {
  assert.equal(operations.add(-3, -5), -8);
});

it('correctly calculates the difference of 3 and 5, which should be -2', () => {
  assert.equal(operations.subtract(3, 5), -2);
});

it('correctly calculates the product of 7 and 4, which should be 28', () => {
  assert.equal(operations.multiply(7, 4), 28);
});

it('correctly calculates the quotient of 9 and 2, which should be 4.5', () => {
  assert.equal(operations.divide(9, 2), 4.5);
});