/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let readIndex = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i-1]) {
//             nums[readIndex] = nums[i];
//             readIndex ++; 
//         }
//     }
//     return readIndex;
// };
var removeDuplicates = function(nums) {
  let readIndex = 0, writeIndex = 0;
  while(readIndex < nums.length) {
      if (nums[readIndex] !== nums[writeIndex]) {
          writeIndex ++;
          nums[writeIndex] = nums[readIndex];
      }
      readIndex ++;
  }
  return writeIndex + 1;
}