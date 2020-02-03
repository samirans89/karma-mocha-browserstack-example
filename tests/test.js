describe('Odd number check test suite', function() {
    it('should check 1 is odd', function() {
      assert.isTrue(isOdd(1), 'One is an odd number');
    });
    it('should check 0 is not odd', function() {
      assert.isFalse(isOdd(0), 'Zero is not an odd number');
    });
});

describe('Even number check test suite', function() {
    it('should check 1 is even', function() {
      assert.isFalse(isEven(1), 'One is not an even number');
    });
    it('should check 0 is even', function() {
      assert.isTrue(isEven(0), 'Zero is an even number');
    });
});

describe('Addition check test suite', function() {
    it('should add 4 + 3 and check response is 7', function() {
      assert.isTrue(add(4,3,7), 'Addition of 4 and 3 is 7');
    });
    it('should add 2 + 3 and check response is 5', function() {
      assert.isTrue(add(2,3,5), 'Addition of 2 and 3 is 5');
    });
});
