/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = new Map()
  for (var i = 0; i < nums.length; i++) {
      var otherIndex = map.get(target - nums[i])
      if (otherIndex !== undefined) {
          return [otherIndex, i ]
      } else {
          map.set(nums[i], i)
      }
  }
 };