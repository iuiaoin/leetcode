/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
  if(!l1 || !l2) return l1 || l2;
  let arr1 = [],
      arr2 = [];
  while(l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while(l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  let i = 0,
      len1 = arr1.length,
      len2 = arr2.length,
      plusOne = 0;
  let len = len1 > len2 ? len1 + 1 : len2 + 1;
  let arr = new Array(len).fill(0);
  while(i < len || plusOne) {
    let num = plusOne;
    if(arr1[i]) num += arr1[i];
    if(arr2[i]) num += arr2[i];
    arr[i++] = num % 10;
    plusOne = parseInt(num / 10);
  };
  if(arr[len - 1] === 0) arr.pop();
  let res = arr.map(v => new ListNode(v));
  res.reduce((pre, cur) => {
    pre.next = cur;
    return cur;
  })
  return res[0];
};

