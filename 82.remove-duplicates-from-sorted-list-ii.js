/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * 思路：两个指针pre和cur, 如果cur和cur.next值相等的话cur往后移一位，若pre.next还是cur说明cur是不重复的，
 * pre = cur，否则的话pre.next = cur.next
 */
var deleteDuplicates = function(head) {
  if(!head) return null;
  let dummy = new ListNode(),
      pre = dummy,
      cur = head;
  dummy.next = head;
  while(cur) {
    while(cur.next && cur.val === cur.next.val) cur = cur.next;
    if(pre.next === cur) {
      pre = cur;
    } else {
      pre.next = cur.next;
    }
    cur = cur.next;
  }
  return dummy.next;
};

