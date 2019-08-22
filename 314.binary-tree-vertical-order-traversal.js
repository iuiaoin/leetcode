/*
 * @lc app=leetcode id=314 lang=javascript
 *
 * [314] Binary Tree Vertical Order Traversal
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
/**
 * 思路：采用bfs并记录每一个节点的col值，左孩子col - 1，右孩子col + 1,
 * col值相同的值放在一起
 */
var verticalOrder = function(root) {
  if(!root) return [];
  let res = [];
      queue = [ [root, 0] ],
      map = { 0: [ root.val ] };
  while (queue.length) {
    let arr = queue.shift(),
        node = arr[0],
        col = arr[1];
    if(node.left) {
      queue.push([node.left, col - 1]);
      map[col - 1] = (map[col - 1] || []).concat(node.left.val);
    }
    if(node.right) {
      queue.push([node.right, col + 1]);
      map[col + 1] = (map[col + 1] || []).concat(node.right.val);
    }
  }
  return Object.entries(map).sort((a, b) => a[0] - b[0]).map(v => v[1]);
};

