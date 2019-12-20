/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  if(!nodeA || !nodeB) return null;
  while(nodeA || nodeB) {
    if(!nodeA) nodeA = headB;
    if(!nodeB) nodeB = headA;
    if(nodeA === nodeB) return nodeA;
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return null;
};
// @lc code=end

