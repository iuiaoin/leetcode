/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
/**
 * 思路：遍历list将值不重复的节点记录下来，然后组成新的链表
 */
var deleteDuplicates = function(head) {
  if(!head) return null;
  let map = new Map();
  while(head) {
    let val = map.get(head.val) || 0;
    map.set(head.val, val + 1);
    head = head.next;
  }
  let list = [];
  for(let [key, value] of map) {
    if(value === 1) list.push(new ListNode(key));
  }
  if(!list.length) return null;
  list.reduce((pre, cur) => {
    pre.next = cur;
    cur.next = null;
    return cur;
  })
  return list[0];
};

