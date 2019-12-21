/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let arr1 = [];
  let arr2 = [];
  while(l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while(l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  if(arr1.length < arr2.length) [arr1, arr2] = [arr2, arr1];
  let res = [];
  let plus = 0;
  while(arr1.length || arr2.length || plus) {
    let val1 = arr1.pop() || 0;
    let val2 = arr2.pop() || 0;
    let num = val1 + val2 + plus;
    let rest = num % 10;
    plus = Math.floor(num / 10);
    res.unshift(rest);
  }
  let list = res.map(v => new ListNode(v));
  list.reduce((pre, cur) => {
    pre.next = cur;
    return cur;
  })
  return list[0];
};
// @lc code=end

