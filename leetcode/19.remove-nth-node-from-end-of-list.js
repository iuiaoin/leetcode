/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  let p = dummy;
  dummy.next = p;
  p.next = head;
  let i = 0;
  while(head) {
    if(i >= n) p = p.next;
    head = head.next;
    i++;
  }  
  p.next = p.next.next;
  return dummy.next;
};

