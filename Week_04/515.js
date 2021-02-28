/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let result = [];
  if (!root) return [];
  let queue = [root];
  while (queue.length) {
      let level = [];
      let count = queue.length;
      let maxValue = Number.MIN_SAFE_INTEGER;
      for (let i = 0; i < count; i++) {
          let current = queue.pop();
          maxValue = Math.max(maxValue, current.val);
          current.left && queue.unshift(current.left);
          current.right && queue.unshift(current.right);
      }
      result.push(maxValue);
  }
  return result;
};