/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function(root) {
  if(!root) return [];
  let queue = [ root ];
  let res = [];
  let level = 0;
  while(queue.length) {
    let len = queue.length;
    let cur = [];
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      cur.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    if(level % 2) cur.reverse();
    res.push(cur);
    level++;
  }
  return res;
};
// @lc code=end

