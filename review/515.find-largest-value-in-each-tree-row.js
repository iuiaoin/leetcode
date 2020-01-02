/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if(!root) return [];
  let queue = [root];
  let res = [];
  while(queue.length) {
    let len = queue.length;
    let max = -Infinity;
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    res.push(max);
  }
  return res;
};
// @lc code=end

