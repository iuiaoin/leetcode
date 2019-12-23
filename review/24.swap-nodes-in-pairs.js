/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(!head || !head.next) return head;
  let root = head.next;
  let pre = head;
  let cur = head.next;
  while(cur) {
    let temp1 = cur.next;
    let temp2 = temp1 ? temp1.next : null;
    cur.next = pre;
    pre.next = temp2 ? temp2 : temp1;
    pre = temp1;
    cur = temp2;
  }
  return root;
};
// @lc code=end

