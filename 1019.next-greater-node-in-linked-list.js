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
 * 思路：将list转化为数组，用栈存储不满足条件(栈空或值大于等于当前遍历到的值)的数组的index，
 * 满足条件时pop并赋给结果数组
 */
var nextLargerNodes = function(head) {
  if(!head) return [];
  let arr = [],
      stack = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  let res = new Array(arr.length).fill(0);
  for(let i = 0; i < arr.length; i++) {
    while(stack.length && arr[stack[stack.length - 1]] < arr[i]) res[stack.pop()] = arr[i];
    stack.push(i);
  }
  return res;
};

