/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  while(stack.length || root) {
    if(root) {
      stack.push(root);
      root = root.left;
    } else {
      let node = stack.pop();
      res.push(node.val);
      root = node.right;
    }
  }
  return res;
};
// @lc code=end

