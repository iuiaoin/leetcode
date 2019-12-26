/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = new ListNode();
  let pre = dummy;
  dummy.next = head;
  let cur = head;
  while(cur) {
    if(cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = pre.next;
    }
    cur = cur.next;
  }
  return dummy.next;
};
// @lc code=end

