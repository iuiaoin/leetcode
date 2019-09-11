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
 * 思路：list转array排序后构造新链表
 */
var insertionSortList = function(head) {
  if(!head) return null;
  let arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  let list = arr.sort((a, b) => a - b).map(v => new ListNode(v));
  list.reduce((pre, cur) => {
    pre.next = cur;
    return cur;
  })
  return list[0];
};

