/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
/**
 * 思路：bfs将每层的最大值推入结果数组
 */
var largestValues = function(root) {
  if(!root) return [];
  let res = [],
      queue = [ root ];
  while(queue.length) {
    let len = queue.length,
        max = -Infinity;
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    res.push(max);
  }
  return res;
};

