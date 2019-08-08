const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('total points', () => {
  it('should work on mamooth', () => {
    const actual = calculateTotalPoints(223, "mamooth", 200, [18.5, 18.5, 18.5, 19, 18.5], -6, 8.7);

    const expected = 205.8;

    assert.equal(actual, expected);
  });
  it('should work on large', () => {
    const actual = calculateTotalPoints(134, "large", 120, [19, 20, 19.5, 19, 18.5], -5.4, 0);

    const expected = 137.3;

    assert.equal(actual, expected);
  });
  it('should work on normal', () => {
    const actual = calculateTotalPoints(106.5, "normal", 98, [18.5, 18.5, 18.5, 19, 19], -13.5, 6.4);

    const expected = 125.9;

    assert.equal(actual, expected);
  });
  it('should work on positive wind factor', () => {
    const actual = calculateTotalPoints(122, "large", 120, [17.5, 18, 17.5, 18, 18], 2, 0);

    const expected = 119.1;

    assert.equal(actual, expected);
  });
  it('should work on negative wind factor', () => {
    const actual = calculateTotalPoints(122, "large", 120, [17, 17, 17.5, 17.5, 17.5], -4.9, 0);

    const expected = 110.7;

    assert.equal(actual, expected);
  });
});