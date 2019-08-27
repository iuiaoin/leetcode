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
 * 层序遍历，标记节点的位置pos，遍历完之后比较pos和节点总数是否相等
 */
var isCompleteTree = function (root) {
  if (!root) return true;
  let queue = [[root, 1]],
      count = 0,
      pos;
  while (queue.length) {
    count++;
    let arr = queue.shift(),
        node = arr[0];
    pos = arr[1];
    if(node.left) queue.push([node.left, pos * 2]);
    if(node.right) queue.push([node.right, pos * 2 + 1]);
  }
  return pos === count;
};
