/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
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
 * @return {boolean}
 */
// 序列化
var isCompleteTree = function(root) {
  if(!root) return true;
  let queue = [root];
  let arr = [];
  while(queue.length) {
    let node = queue.shift();
    arr.push(node);
    if(node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  let index = arr.indexOf(null);
  for(let i = index; i < arr.length; i++) {
    if(arr[i] !== null) return false;
  }
  return true;
};
// @lc code=end

