/*
 * @lc app=leetcode id=285 lang=javascript
 *
 * [285] Inorder Successor in BST
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  let res = null;
  dfs(root);
  return res;

  function dfs(node) {
    if(node) {
      dfs(node.left);
      if(node.val > p.val && !res) return res = node;
      dfs(node.right);
    }
  }
};
// @lc code=end

