/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if(!root) return res;
  let query = [ root ];
  while(query.length) {
    let arr = [];
    let len = query.length;
    for(let i = 0; i < len; i++) {
      let node = query.shift();
      arr.push(node.val);
      if(node.left) query.push(node.left);
      if(node.right) query.push(node.right);
    }
    res.push(arr);
  }
  return res;
};