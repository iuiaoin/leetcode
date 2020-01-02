/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return null;
  let stack = [];
  let dummy = new Node();
  dummy.next = head;
  let node = dummy;
  while (node.next || stack.length) {
    if (node.next) {
      if (node.next.child) {
        if (node.next.next) stack.push(node.next.next);
        node.next.next = node.next.child;
        node.next.child.prev = node.next;
        node.next.child = null;
      }
    } else {
      let p = stack.pop();
      node.next = p;
      p.prev = node;
    }
    node = node.next;
  }
  return dummy.next;
};
// @lc code=end