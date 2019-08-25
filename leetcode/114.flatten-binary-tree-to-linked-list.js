/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(!root) return null;
  let res = [];
  function preOrder(root) {
    if(root) {
      res.push(root);
      preOrder(root.left);
      preOrder(root.right);
    }
  }
  preOrder(root);
  res.reduce((pre, cur) => {
    pre.left = null;
    pre.right = cur;
    return cur;
  })
  let last = res[res.length - 1];
  last.left = last.right = null;
  return res[0];
};

