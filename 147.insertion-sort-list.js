/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
/**
 * 思路：构造头节点，通过遍历它来构造新的有序链表
 */
var insertionSortList = function(head) {
  if(!head) return null;
  let dummy = new ListNode(0),
      pre = dummy,
      cur = head;
  while(cur) {
    let next = cur.next;
    while(pre.next && pre.next.val < cur.val) pre = pre.next;
    cur.next = pre.next;
    pre.next = cur;
    pre = dummy;
    cur = next;
  }
  return dummy.next;
};

