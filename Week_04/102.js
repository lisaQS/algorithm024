/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];
  if (root) {
      let queue = [root];
      while (queue.length > 0) {
          let level = [];
          let length = queue.length;
          for (let i = 0; i < length; i++) {
              let current = queue.pop();
              level.push(current.val);
              if (current.left) queue.unshift(current.left);
              if (current.right) queue.unshift(current.right);
          }
          result.push(level);
      }
  }
  return result;
};