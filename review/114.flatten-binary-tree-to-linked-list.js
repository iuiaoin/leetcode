/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(!root) return;
  let stack = [root];
  let arr = [];
  while(stack.length) {
    let node = stack.pop();
    arr.push(node);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  for(let i = 0; i < arr.length - 1; i++) {
    arr[i].left = null;
    arr[i].right = arr[i + 1];
  }
};
// @lc code=end

