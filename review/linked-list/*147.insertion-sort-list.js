/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function (head) {
  if (!head) return null;
  let dummy = new ListNode();
  let pre = dummy;
  let cur = head;
  while(cur) {
    let temp = cur.next;
    while(pre.next && pre.next.val < cur.val) pre = pre.next;
    cur.next = pre.next;
    pre.next = cur;
    cur = temp;
    pre = dummy;
  }
  return dummy.next;
};
// @lc code=end