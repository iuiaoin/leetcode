/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 */
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
  let arr1 = [],
      arr2 = [];
  while(l1) {
    arr1.unshift(l1.val);
    l1 = l1.next;
  }
  while(l2) {
    arr2.unshift(l2.val);
    l2 = l2.next;
  }
  let len1 = arr1.length,
      len2 = arr2.length,
      len = len1 > len2 ? len1 + 1 : len2 + 1,
      arr = new Array(len).fill(0),
      i = 0,
      plusOne = 0;
  while(i < len || plusOne) {
    let num = plusOne;
    if(arr1[i]) num += arr1[i];
    if(arr2[i]) num += arr2[i];
    arr[i] = num % 10;
    plusOne = parseInt(num / 10);
    i++;
  }
  if(arr[len - 1] === 0) arr.pop();
  let res = arr.map(v => new ListNode(v));
  res.reverse().reduce((pre, cur) => {
    pre.next = cur;
    return cur;
  })
  return res[0];
};

