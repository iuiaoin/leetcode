/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
let swapPairs = function(head) {
  if (!head || !head.next) return head;
  let newHead = new ListNode();
  newHead.next = head;
  let cur = newHead;
  while (cur.next && cur.next.next) {
    let tmp1 = cur.next;
    let tmp2 = cur.next.next;

    cur.next.next = cur.next.next.next;
    cur.next = tmp2;
    cur.next.next = tmp1;
    cur = tmp1;
  }
  return newHead.next;
};