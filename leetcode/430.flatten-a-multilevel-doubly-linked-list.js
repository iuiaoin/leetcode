/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
/**
 * 思路：遍历list，若节点p没有child，往后移动。
 * p有child则将child尾和p.next相连，继续遍历直到p为null为止
 */
var flatten = function(head) {
  if(!head) return null;
  let p  = head;
  while(p) {
    if(!p.child) {
      p = p.next;
      continue;
    }
    let temp = p.child;
    while(temp.next) temp = temp.next;
    temp.next = p.next;
    if(p.next) p.next.prev = temp;
    p.next = p.child;
    p.next.prev = p;
    p.child = null;
  }
  return head;
};

