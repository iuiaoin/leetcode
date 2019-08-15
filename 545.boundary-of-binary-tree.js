/*
 * @lc app=leetcode id=545 lang=javascript
 *
 * [545] Boundary of Binary Tree
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
 * 思路：分成3个子问题，求左边界、叶子、右边界
 */
var boundaryOfBinaryTree = function(root) {
  if(!root) return [];
  if(!root.left && !root.right) return [root.val];
  let res = [];
  let left = leftBoundary(root);
  leaves(root, res);
  let right = rightBoundary(root);
  return left.concat(res, right);
};
function leftBoundary(root) {
  let arr = [];
  let node = root;
  arr.push(node.val);
  node = node.left;
  while(node) {
    if(node.left) {
      arr.push(node.val);
      node = node.left;
    } else if(node.right) {
      arr.push(node.val);
      node = node.right;
    } else {
      break;
    }
  }
  return arr;
}
function leaves(root, res) {
  if(root) {
    if(!root.left && !root.right) res.push(root.val);
    leaves(root.left, res);
    leaves(root.right, res);
  }
}
function rightBoundary(root) {
  let arr = [];
  root = root.right;
  while(root) {
    if(root.right) {
      arr.unshift(root.val);
      root = root.right;
    } else if(root.left) {
      arr.unshift(root.val);
      root = root.left;
    } else {
      break;
    }
  }
  return arr;
}

