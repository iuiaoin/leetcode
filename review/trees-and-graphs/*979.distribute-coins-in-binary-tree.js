/*
 * @lc app=leetcode id=979 lang=javascript
 *
 * [979] Distribute Coins in Binary Tree
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
var distributeCoins = function(root) {
  if(!root) return 0;
  let res = 0;
  dfs(root);
  return res;

  function dfs(node) {
    if(!node) return 0;
    let l = dfs(node.left);
    let r = dfs(node.right);
    res += Math.abs(l) + Math.abs(r);
    return l + r + node.val - 1;
  }
};
// @lc code=end

