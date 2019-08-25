/*
 * @lc app=leetcode id=333 lang=javascript
 *
 * [333] Largest BST Subtree
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
 * @return {number}
 */
var largestBSTSubtree = function(root) {
    let max = 0;
    dfs(root);
    return max;

    function dfs(node) {
      if(!node) return [ 0, Infinity, -Infinity ];
      let [ lc, lmin, lmax ] = dfs(node.left);
      let [ rc, rmin, rmax ] = dfs(node.right);
      if(lc >= 0 && rc >= 0 && node.val > lmax && node.val < rmin) {
        max = Math.max(max, lc + rc + 1);
        return [ lc + rc + 1, Math.min(node.val, lmin), Math.max(node.val, rmax) ];
      }
      return [ -1, 0, 0 ];
    }
};

