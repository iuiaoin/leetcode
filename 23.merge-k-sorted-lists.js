/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(!lists || !lists.length) return null;
  let res = lists, tmp;
  while (res.length > 1) {
    tmp = [];
    for (let i = 0; i < res.length; i = i + 2) {
      tmp.push(mergeTwo(res[i], res[i + 1]));
    }
    res = tmp;
  }
  return res[0];
};

function mergeTwo(l1, l2) {
  if(!l1 || !l2) return l1 || l2;
  let dummy = new ListNode();
  let cur = dummy;
  dummy.next = cur;
  while(l1 && l2) {
    if(l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if(l1 || l2) cur.next = l1 || l2;
  return dummy.next;
}
