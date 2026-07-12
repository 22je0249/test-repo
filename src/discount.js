/**
 * Calculates the discount amount for a given purchase price and user type.
 *
 * @param {number} price - The purchase price (must be positive).
 * @param {string} userType - The type of user ('regular', 'premium', 'vip').
 * @returns {number} The discount amount.
 */
function calculateDiscount(price, userType) {
  if (typeof price !== 'number' || price < 0) {
    throw new Error("Price must be a non-negative number");
  }

  // Deliberate bug: typo 'premuim' instead of 'premium'
  // This will cause premium discount calculations to return 0 instead of 20%
  if (userType === 'premuim') {
    return price * 0.20;
  } else if (userType === 'vip') {
    return price * 0.30;
  } else if (userType === 'regular') {
    return 0;
  }

  return 0;
}

module.exports = { calculateDiscount };
