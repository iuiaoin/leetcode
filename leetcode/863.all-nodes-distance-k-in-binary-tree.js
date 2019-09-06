/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
/**
 * 思路：遍历tree给每个节点添加parent节点，然后从target开始使用bfs寻找距离为k的节点
 */
var distanceK = function (root, target, K) {
  function addParent(node, parent) {
    if (node) {
      node.parent = parent;
      addParent(node.left, node);
      addParent(node.right, node);
    }
  }
  addParent(root, null);
  let dis = 0,
    res = [],
    queue = [target],
    set = new Set();
  while (queue.length) {
    let len = queue.length;
    if (dis > K) break;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      set.add(node);
      if (dis === K) res.push(node.val);
      if (node.parent && !set.has(node.parent)) queue.push(node.parent);
      if (node.left && !set.has(node.left)) queue.push(node.left);
      if (node.right && !set.has(node.right)) queue.push(node.right);
    }
    dis++;
  }
  return res;
};