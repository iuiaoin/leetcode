/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
var rob = function(root) {
  if(!root) return 0;
  return Math.max(...dfs(root));

  function dfs(node) {
    if(!node) return [0, 0];
    let left = dfs(node.left);
    let right = dfs(node.right);
    let res = [];
    res[0] = node.val + left[1] + right[1];
    res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return res;
  }
};
// @lc code=end

