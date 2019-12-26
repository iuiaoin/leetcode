/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head) return null;
  let slow = head;
  let fast = head;
  let cur = null;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      cur = slow;
      break;
    }
  }
  if(!cur) return null;
  let node = head;
  while(node !== cur) {
    node = node.next;
    cur = cur.next;
  }
  return node;
};
// @lc code=end

