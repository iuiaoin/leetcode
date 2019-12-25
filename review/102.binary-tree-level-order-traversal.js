/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [root];
  while(queue.length) {
    let len = queue.length;
    let cur = [];
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      cur.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    res.push(cur);
  }
  return res;
};
// @lc code=end

