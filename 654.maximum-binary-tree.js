/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
/**
 * 思路：构造递归返回tree，参数是数组，返回值是最大值构造的节点
 */
var constructMaximumBinaryTree = function(nums) {
  if(!nums || !nums.length) return null;
  let max = Math.max(...nums);
  let index = nums.indexOf(max);
  let node = new TreeNode(max);
  node.left = constructMaximumBinaryTree(nums.slice(0, index));
  node.right = constructMaximumBinaryTree(nums.slice(index + 1));
  return node;
};

