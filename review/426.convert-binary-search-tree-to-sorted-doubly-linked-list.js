/*
 * @lc app=leetcode id=426 lang=javascript
 *
 * [426] Convert Binary Search Tree to Sorted Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if(!root) return null;
  let arr = [];
  dfs(root);
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let l = i - 1 < 0 ? i - 1 + len : i - 1;
    let r = (i + 1) % len;
    arr[i].left = arr[l];
    arr[i].right = arr[r];
  }
  return arr[0];

  function dfs(node) {
    if(node) {
      dfs(node.left);
      arr.push(node);
      dfs(node.right);
    }
  }
};
// @lc code=end

