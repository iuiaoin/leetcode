/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null;
  // 记住头部
  let l1 = headA,
      l2 = headB;
  while(l1 || l2) {
    if(!l1) l1 = headB;
    if(!l2) l2 = headA;
    if(l1 === l2) return l1;
    l1 = l1.next;
    l2 = l2.next;
  }
  return null;
};

