/*
 * @lc app=leetcode id=426 lang=javascript
 *
 * [426] Convert Binary Search Tree to Sorted Doubly Linked List
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
/*
思路：中序遍历tree，将栈pop出来的节点与之前的节点相连
*/
var treeToDoublyList = function(root) {
  if(!root) return null;
  let stack = [],
      pre = null,
      head = null,
      end = null;
  while(stack.length || root) {
      if(root) {
          stack.push(root);
          root = root.left;
      } else {
          let node = stack.pop();
          root = node.right;
          if(!stack.length && !root) end = node;
          if(head === null) head = node;
          if(pre !== null) {
              pre.right = node;
              node.left = pre;
          }
          pre = node;
      }
  }
  head.left = end;
  end.right = head;
  return head;
};