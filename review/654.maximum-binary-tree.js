/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if(!nums.length) return null;
  return gen(0, nums.length - 1);

  function gen(l, r) {
    if(l > r) return null;
    let val = -Infinity;
    let index = -1;
    for(let i = l; i <= r; i++) {
      if(nums[i] > val) {
        val = nums[i];
        index = i;
      }
    }
    let node = new TreeNode(val);
    node.left = gen(l, index - 1);
    node.right = gen(index + 1, r);
    return node;
  }
};
// @lc code=end

