/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//1. 暴力解法,使用额外的数组来存放正确的顺序，然后一个一个copy回原来的数组
// var rotate = function(nums, k) {
//     const length = nums.length;
//     let newArray = new Array(length);
//     for(let i = 0; i < length; i++) {
//         newArray[ (i + k) % length] = nums[i];
//     }
//     for (let i = 0; i < length; i++) {
//         nums[i] =  newArray[i];
//     }
// };

//2. 使用api
// var rotate = function(nums, k) {
//    nums.splice(0,0, ...nums.splice(-(k % nums.length), k) ) 
// }

//3. 翻转数组
//Step1，数组全部翻转
//Step2，[0, k % nums.length - 1]做翻转，[k % nums.length, nums.length - 1]做翻转
const reverse = (nums, start, end) => {
  while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
  }
}

var rotate = function(nums, k) {
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k % nums.length - 1);
  reverse(nums, k % nums.length, nums.length - 1);
}
