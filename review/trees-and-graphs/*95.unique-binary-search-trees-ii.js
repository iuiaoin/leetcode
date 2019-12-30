/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n < 1) return [];
  return gen(1, n);

  function gen(start, end) {
    if(start > end) return [null];
    let trees = [];
    for(let i = start; i <= end; i++) {
      let left = gen(start, i - 1);
      let right = gen(i + 1, end);
      for(let j = 0; j < left.length; j++) {
        for(let k = 0; k < right.length; k++) {
          let node = new TreeNode(i);
          node.left = left[j];
          node.right = right[k];
          trees.push(node);
        }
      }
    }
    return trees;
  }
};
// @lc code=end

