/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
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
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  while (lists.length > 1) {
    let arr = [];
    let l = 0;
    let r = lists.length - 1;
    while (l <= r) {
      arr.push(mergeTwo(lists[l], lists[r]));
      l++;
      r--;
    }
    lists = arr;
  }
  return lists[0];

  function mergeTwo(l1, l2) {
    if (l1 === l2) return l1;
    let dummy = new ListNode();
    let cur = dummy;
    dummy.next = cur;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    if (l1 || l2) cur.next = l1 || l2;
    return dummy.next;
  }
}
// @lc code=end