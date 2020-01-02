/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if(!root) return new TreeNode(val);
  let node = null;
  let org = root;
  while(root) {
    node = root;
    if(root.val < val) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  if(node.val < val) {
    node.right = new TreeNode(val);
  } else {
    node.left = new TreeNode(val);
  }
  return org;
};
// @lc code=end

