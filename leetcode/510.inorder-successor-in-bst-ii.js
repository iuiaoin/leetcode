/*
 * @lc app=leetcode id=510 lang=javascript
 *
 * [510] Inorder Successor in BST II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right,parent) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.parent = parent;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
/**
 * 思路：如果node有right则往下寻找left，否则往上寻找parent使自己是其的左孩子
 */
var inorderSuccessor = function(node) {
  let pre = node;
  let cur = node.right;
  if(cur) {
    while(cur) {
      pre = cur;
      cur = cur.left;
    }
    return pre;
  }
  
  while(node.parent) {
    if(node.parent.left === node) return node.parent;
    node = node.parent;
  }
  return null;
};
// @lc code=end

