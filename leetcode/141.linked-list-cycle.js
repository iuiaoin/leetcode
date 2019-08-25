/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head || !head.next) return false;
  let node1 = head,
      node2 = head.next;
  while(node1 && node2) {
    if(node1 === node2) return true;
    node1 = node1.next;
    if(!node2.next) return false;
    node2 = node2.next.next;
  }
  return false;
};

