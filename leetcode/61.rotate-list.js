/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
/**
 * 思路：先遍历list拿到长度，然后双指针找到要rotate的节点，进行翻转
 */
var rotateRight = function(head, k) {
  if(!head) return head;
  let len = 0,
      node = head,
      root1 = head,
      root2 = head;
  while(node) {
    len++;
    node = node.next;
  }
  k = k % len;
  if(k === 0) return head;
  let dummy = new ListNode();
  dummy.next = root1;
  let i = 0;
  while(root1.next) {
    if(i >= k) {
      root2 = root2.next;
    }
    root1 = root1.next;
    i++;
  }
  dummy.next = root2.next;
  root2.next = null;
  root1.next = head;
  return dummy.next;
};

