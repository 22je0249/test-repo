const { calculateDiscount } = require('../src/discount');

describe('calculateDiscount', () => {
  test('should return 0 discount for regular users', () => {
    expect(calculateDiscount(100, 'regular')).toBe(0);
  });

  test('should return 20% discount for premium users', () => {
    // This test will fail because of the 'premuim' typo in src/discount.js
    expect(calculateDiscount(100, 'premium')).toBe(20);
  });

  test('should return 30% discount for vip users', () => {
    expect(calculateDiscount(200, 'vip')).toBe(60);
  });

  test('should throw error for negative prices', () => {
    expect(() => calculateDiscount(-50, 'premium')).toThrow("Price must be a non-negative number");
  });
});
