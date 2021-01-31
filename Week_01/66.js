/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length;
  for (let i = length - 1; i >= 0; i--) {
      digits[i]++;
      digits[i] %= 10;
      if (digits[i] !== 0) {
          return digits;
      }
  }
  digits[0] = 1;
  digits.push(0);
  return digits;
};