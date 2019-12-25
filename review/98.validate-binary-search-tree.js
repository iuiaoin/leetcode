/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if(!root) return true;
  let stack = [];
  let val = -Infinity;
  while(stack.length || root) {
    if(root) {
      stack.push(root);
      root = root.left;
    } else {
      let node = stack.pop();
      if(node.val <= val) return false;
      val = node.val;
      root = node.right;
    }
  }
  return true;
};
// @lc code=end

