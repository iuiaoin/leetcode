/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if(!head) return null;
  let dummy = new ListNode();
  let pre = dummy;
  dummy.next = pre;
  pre.next = head;
  while(head) {
    if(head.val === val) {
      pre.next = head.next;
    } else {
      pre = pre.next;
    }
    head = head.next;
  }
  return dummy.next;
};

