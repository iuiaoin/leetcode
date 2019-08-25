/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
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
var reverseList = function(head) {
  if(!head || !head.next) return head;
  let pre = null,
      cur = head;
  while(cur) {
    let t1 = cur.next;
    cur.next = pre;
    pre = cur;
    cur = t1;
  }
  return pre;
};

