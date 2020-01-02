/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
var sumNumbers = function(root) {
  if(!root) return 0;
  let res = 0;
  dfs(root, '0');
  return res;

  function dfs(node, pre) {
    if(!node) return;
    let cur = node.val;
    if(!node.left && !node.right) res += parseInt(pre + cur);
    dfs(node.left, pre + cur);
    dfs(node.right, pre + cur);
  }
};
// @lc code=end

