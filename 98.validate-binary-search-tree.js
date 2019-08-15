/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */
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
var isValidBST = function (root) {
    if (!root) return true;
    if(!compare(root.left, root.val, 'less')) return false;
    if(!compare(root.right, root.val, 'greater')) return false;
    return isValidBST(root.left) && isValidBST(root.right);
  };

  function compare(node, val, type) {
    if (node) {
      if(type === 'less') {
        if (node.val >= val) return false;
      } else {
        if (node.val <= val) return false;
      }
      if (!compare(node.left, val, type)) return false;
      if (!compare(node.right, val, type)) return false;
    }
    return true;
}
