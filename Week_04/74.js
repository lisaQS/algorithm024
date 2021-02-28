/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  let newArray = matrix.flat();
  let left = 0;
  let right = newArray.length - 1;
  while (left <= right) {
      let mid = (left + right) >> 1;
      if (newArray[mid] > target) {
          right = mid - 1;
      } else if (newArray[mid] === target) {
          return true;
      } else {
          left = mid + 1;
      }
  }
  return false;
};