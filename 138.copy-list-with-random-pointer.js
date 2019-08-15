/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
// 

var copyRandomList = function (head) {
  if(!head) return null;
  let node = head;
  let cache = new Map();
  while(node) {
    cache.set(node, { val: node.val });
    node = node.next;
  }
  for(let n of cache.keys()) {
    cache.get(n).next = n.next ? cache.get(n.next) : null;
    cache.get(n).random = n.random ? cache.get(n.random) : null;
  }
  return cache.get(head);
};