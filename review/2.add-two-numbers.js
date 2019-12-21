/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  let cur = dummy;
  dummy.next = cur;
  let plus = 0;
  while(l1 || l2 || plus) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let num = val1 + val2 + plus;
    let rest = num % 10;
    plus = Math.floor(num / 10);
    cur.next = new ListNode(rest);
    cur = cur.next;
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  return dummy.next;
};
// @lc code=end

