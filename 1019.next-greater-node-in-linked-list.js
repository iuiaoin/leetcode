/*
 * @lc app=leetcode id=1019 lang=javascript
 *
 * [1019] Next Greater Node In Linked List
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
 * @return {number[]}
 */
/**
 * 两个指针p,q，p记录遍历到的位置，q寻找next larger number
 */
var nextLargerNodes = function(head) {
  if(!head) return [];
  let p = head,
      res = [];
  while(p) {
    let q = p.next;
    while(q && q.val <= p.val) q = q.next;
    res.push(q ? q.val : 0);
    p = p.next;
  }
  return res;
};

