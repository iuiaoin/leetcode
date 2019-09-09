/*
 * @lc app=leetcode id=708 lang=javascript
 *
 * [708] Insert into a Cyclic Sorted List
 */
/**
 * // Definition for a Node.
 * function Node(val,next) {
 *    this.val = val;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
/**
 * 思路：遍历list，当pre小于cur时，值在它们之间则插入，当pre大于cur时，值大于pre或小于cur时插入
 * 注意点：需要考虑节点值全都相等的情况，只要在首尾间插入即可
 */
var insert = function(head, insertVal) {
  if(!head) {
    let node = new Node(insertVal);
    node.next = node;
    return node;
  }
  let node = head,
      done = false;
  while(node) {
    let pre = node,
        cur = node.next,
        con1 = pre.val <= cur.val && insertVal >= pre.val && insertVal <= cur.val,
        con2 = pre.val > cur.val && (insertVal <= cur.val || insertVal >= pre.val);
    if(con1 || con2 || done) {
      pre.next = new Node(insertVal, cur);    
      return head;
    }
    node = node.next;
    if(node.next === head) done = true;
  }
};

