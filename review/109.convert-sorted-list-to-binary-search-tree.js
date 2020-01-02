/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if(!head) return null;
  let arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  return gen(0, arr.length - 1);
  
  function gen(l, r) {
    if(l > r) return null;
    let mid = l + r >> 1;
    let node = new TreeNode(arr[mid]);
    node.left = gen(l, mid - 1);
    node.right = gen(mid + 1, r);
    return node;
  }
};
// @lc code=end

