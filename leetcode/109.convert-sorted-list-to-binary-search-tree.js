/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */
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
/**
 * 思路：遍历list获得长度，以l和r为参数进行中序递归来构建树，得到的即bst
 */
var sortedListToBST = function(head) {
  if(!head) return null;
  let len = 0,
      node = head;
  while(node) {
    node = node.next;
    len++;
  }
  return gen(0, len - 1);

  function gen(l, r) {
    if(l > r) return null;
    let mid = (l + r) >> 1;
    let left = gen(l, mid - 1);
    let node = new TreeNode(head.val);
    node.left = left;
    head = head.next;
    node.right = gen(mid + 1, r);
    return node;
  }
};

