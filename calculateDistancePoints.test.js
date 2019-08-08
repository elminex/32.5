const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('distance points', () => {
  describe('mamooth size', () => {
    it('should work with distance longer than k-point', () => {
      const actual = calculateDistancePoints(226, "mamooth", 200);

      const expected = 151.2;

      assert.equal(actual, expected);
    })
    it('should work with distance shorter than k-point', () => {
      const actual = calculateDistancePoints(170, "mamooth", 200);

      const expected = 84;

      assert.equal(actual, expected);
    })
    it('should work with distance with a fraction', () => {
      const actual = calculateDistancePoints(208.5, "mamooth", 200);

      const expected = 130.2;

      assert.equal(actual, expected);
    })
    it('should work with distance equal to k-point', () => {
      const actual = calculateDistancePoints(200, "mamooth", 200);

      const expected = 120;

      assert.equal(actual, expected);
    })
  })
  describe('large size', () => {
    it('should work with distance longer than k-point', () => {
      const actual = calculateDistancePoints(134, "large", 120);

      const expected = 85.2;

      assert.equal(actual, expected);
    })
    it('should work with distance shorter than k-point', () => {
      const actual = calculateDistancePoints(111, "large", 120);

      const expected = 43.8;

      assert.equal(actual, expected);
    })
    it('should work with distance with a fraction', () => {
      const actual = calculateDistancePoints(123.5, "large", 120);

      const expected = 66.3;

      assert.equal(actual, expected);
    })
    it('should work with distance equal to k-point', () => {
      const actual = calculateDistancePoints(120, "large", 120);

      const expected = 60;

      assert.equal(actual, expected);
    })
  })
  describe('normal size', () => {
    it('should work with distance longer than k-point', () => {
      const actual = calculateDistancePoints(111, "normal", 98);

      const expected = 86;

      assert.equal(actual, expected);
    })
    it('should work with distance shorter than k-point', () => {
      const actual = calculateDistancePoints(92, "normal", 98);

      const expected = 48;

      assert.equal(actual, expected);
    })
    it('should work with distance with a fraction', () => {
      const actual = calculateDistancePoints(103.5, "normal", 98);

      const expected = 71;

      assert.equal(actual, expected);
    })
    it('should work with distance equal to k-point', () => {
      const actual = calculateDistancePoints(98, "normal", 98);

      const expected = 60;

      assert.equal(actual, expected);
    })
  })
})