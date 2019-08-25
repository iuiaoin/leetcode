/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
/**
 * 思路：将节点推入数组，分别从数组头部和尾部获取节点直到数组为空
 */
var reorderList = function(head) {
  if(!head) return;
  let arr = [],
      node = head;
  while(node) {
    arr.push(node);
    node = node.next;
  }
  let r = null;
  while(arr.length) {
    let l = arr.shift();
    if(r) r.next = l;
    r = arr.pop();
    if(!l) return r.next = null;
    if(!r) return l.next = null;
    if(!arr.length) r.next = null;
    l.next = r;
  }
};

