/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
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
 * @return {boolean}
 */
/**
 * 层序遍历，当遇到有的节点时，如果出现过null返回false，否则将hasNull置为true, 若遍历完返回true
 */
var isCompleteTree = function (root) {
  if (!root) return true;
  let queue = [root],
      hasNull = false;
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      if (hasNull) return false;
      queue.push(node.left);
      queue.push(node.right);
    } else {
      hasNull = true;
    }
  }
  return true;
};
