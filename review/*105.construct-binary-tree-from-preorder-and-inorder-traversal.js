/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let i = 0;
  return dfs(0, preorder.length - 1);

  function dfs(l, r) {
    if(l > r) return null;
    let val =  preorder[i];
    i++;
    let index = inorder.indexOf(val);
    let root = new TreeNode(val);
    root.left = dfs(l, index - 1);
    root.right = dfs(index + 1, r);
    return root;
  }
};
// @lc code=end

