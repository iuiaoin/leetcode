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
  let found = false;
  let res = null;
  dfs(root);
  return res;

  function dfs(node) {
    if(node) {
      dfs(node.left);
      if(found && !res) return res = node;
      if(node === p) found = true;
      dfs(node.right);
    }
  }
};
// @lc code=end

