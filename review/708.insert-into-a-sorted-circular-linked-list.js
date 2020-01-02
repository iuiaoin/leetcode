/*
 * @lc app=leetcode id=708 lang=javascript
 *
 * [708] Insert into a Sorted Circular Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
  if(!head) {
    let node = new Node(insertVal);
    node.next = node;
    return node;
  }
  if(head === head.next) {
    let node = new Node(insertVal);
    node.next = head;
    head.next = node;
    return head;
  }
  let tail = null;
  let root = null;
  let node = head;
  while(node) {
    if(node.val > node.next.val || node.next === head) {
      tail = node;
      root = node.next;
      tail.next = null;
      break;
    }
    node = node.next;
  }
  let dummy = new Node();
  dummy.next = root;
  let pre = dummy;
  while(root) {
    if(insertVal < root.val) {
      let node = new Node(insertVal);
      pre.next = node;
      node.next = root;
      tail.next = dummy.next;
      return head;
    }
    pre = pre.next;
    root = root.next;
  }
  let newNode = new Node(insertVal);
  pre.next = newNode;
  newNode.next = dummy.next;
  return head;
};
// @lc code=end

