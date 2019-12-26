/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  let cur = dummy;
  dummy.next = cur;
  cur.next = head;
  let p = cur;
  while(cur) {
    if(n < 0) p = p.next;
    cur = cur.next;
    n--;
  }
  p.next = p.next.next;
  return dummy.next;
};
// @lc code=end

