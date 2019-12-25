/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(p.val > q.val) [p, q] = [q, p];
  return dfs(root);

  function dfs(node) {
    if(node) {
      if(node.val > p.val && node.val < q.val) return node;
      if(node.val < p.val) return dfs(node.right);
      if(node.val > q.val) return dfs(node.left);
      return node;
    }
    return null;
  }
};
// @lc code=end

