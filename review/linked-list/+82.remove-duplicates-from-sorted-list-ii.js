/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
  if(!head) return null;
  let cur = head;
  let map = new Map();
  while(cur) {
    map.set(cur.val, (map.get(cur.val) || 0) + 1);
    cur = cur.next;
  }
  let dummy = new ListNode();
  let node = dummy;
  for(let [key, value] of map) {
    if(value === 1) {
      node.next = new ListNode(key);
      node = node.next;
    }
  }
  return dummy.next;
};
// @lc code=end

