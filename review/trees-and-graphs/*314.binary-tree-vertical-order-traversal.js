/*
 * @lc app=leetcode id=314 lang=javascript
 *
 * [314] Binary Tree Vertical Order Traversal
 */

// @lc code=start
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

 // O(nlogn)
// var verticalOrder = function(root) {
//   if(!root) return [];
//   let map = {};
//   let res = [];
//   let queue = [[root, 0]];
//   while(queue.length) {
//     let [node, col] = queue.shift();
//     map[col] = (map[col] || []).concat(node.val);
//     if(node.left) queue.push([node.left, col - 1]);
//     if(node.right) queue.push([node.right, col + 1]);
//   }
//   let arr = Object.entries(map).sort((a, b) => a[0] - b[0]);
//   for(let i = 0; i < arr.length; i++) {
//     res.push(arr[i][1]);
//   }
//   return res;
// };

// O(n)
var verticalOrder = function(root) {
  if(!root) return [];
  let map = {};
  let res = [];
  let queue = [[root, 0]];
  let min = 0;
  let max = 0;
  while(queue.length) {
    let [node, col] = queue.shift();
    min = Math.min(min, col);
    max = Math.max(max, col);
    map[col] = (map[col] || []).concat(node.val);
    if(node.left) queue.push([node.left, col - 1]);
    if(node.right) queue.push([node.right, col + 1]);
  }
  for(let i = min; i <= max; i++) {
    res.push(map[i]);
  }
  return res;
};
// @lc code=end

