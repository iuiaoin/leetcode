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
var mergeKLists = function(lists) {
  if(!lists.length) return null;
  while(lists.length > 1) {
    let arr = [];
    let l = 0;
    let r = lists.length - 1;
    while(l <= r) {
      arr.push(mergeTwo(lists[l], lists[r]));
      l++;
      r--;
    }
    lists = arr;
  }
  return lists[0];

  function mergeTwo(l1, l2) {
    if(l1 === l2) return l1;
    let arr = [];
    while(l1 || l2) {
      if(!l2 || l1 && l1.val < l2.val) {
        arr.push(l1.val);
        l1 = l1.next;
      } else {
        arr.push(l2.val);
        l2 = l2.next;
      }
    }
    let list = arr.map(v => new ListNode(v));
    list.reduce((pre, cur) => {
      pre.next = cur;
      return cur;
    })
    return list[0];
  } 
};
// @lc code=end

