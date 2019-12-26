/*
 * @lc app=leetcode id=333 lang=javascript
 *
 * [333] Largest BST Subtree
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
var largestBSTSubtree = function (root) {
  if(!root) return 0;
  let res = 0;
  dfs(root);
  return res;

  function dfs(node) {
    if(!node) return [0, true, Infinity, -Infinity];
    let [num1, isBST1, min1, max1] = dfs(node.left);
    let [num2, isBST2, min2, max2] = dfs(node.right);
    if(isBST1 && isBST2 && node.val > max1 && node.val < min2) {
      res = Math.max(res, num1 + num2 + 1);
      return [num1 + num2 + 1, true, Math.min(min1, node.val), Math.max(max2, node.val)];
    }
    return [0, false, Infinity, -Infinity];
  }
};
// @lc code=end