/*
 * @lc app=leetcode id=1026 lang=javascript
 *
 * [1026] Maximum Difference Between Node and Ancestor
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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  if(!root) return 0;
  let res = 0;
  dfs(root, Infinity, -Infinity);
  return res;

  function dfs(root, min, max) {
    if(!root) return;
    if(root.val < min) min = root.val;
    if(root.val > max) max = root.val;
    res = Math.max(res, max - min);
    dfs(root.left, min, max);
    dfs(root.right, min, max);
  }
};
// @lc code=end

