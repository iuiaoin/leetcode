/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function (root) {
  let res = [];
  recursion(root, 0, res);
  return res;
};

function recursion(node, level, res) {
  if(!node) return;
  if(!res[level]) res.push([]);
  if(level % 2 === 0) {
     res[level].push(node.val);
  } else {
    res[level].unshift(node.val);
  }
  recursion(node.left, level + 1, res);
  recursion(node.right, level + 1, res);
}