const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculate style points', () => {
  it('should work with even scores', () => {
    const actual = calculateStylePoints([19, 19, 19, 19, 19]);

    const expected = 57;
    
    assert.equal(actual, expected)
  })
  it('should work with different scores', () => {
    const actual = calculateStylePoints([18.5, 19, 18.5, 18.5, 18]);

    const expected = 55.5;
    
    assert.equal(actual, expected)
  })
  it('should work 2 equal lowest scores', () => {
    const actual = calculateStylePoints([17.5, 17.5, 17.5, 17, 17]);

    const expected = 52;
    
    assert.equal(actual, expected)
  })
  it('should work with 2 equal highest scores', () => {
    const actual = calculateStylePoints([18, 17.5, 18, 17.5, 17]);

    const expected = 53;
    
    assert.equal(actual, expected)
  })
})