/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 0;
  let right = num;
  while (left <= right) {
      let mid = (left + right) >> 1;
      if (mid * mid === num) return true;
      else if (mid * mid < num) left = mid + 1;
      else right = mid - 1;
  }
  return false;
};