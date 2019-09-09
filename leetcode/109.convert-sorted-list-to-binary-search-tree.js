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
 * 思路：将list转化维数组，递归的取中间的值作为root，左右两边的数组作为新的数组来构建bst
 */
var sortedListToBST = function(head) {
  if(!head) return null;
  let arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }

  function gen(arr) {
    if(!arr.length) return null;
    let l = 0,
        r = arr.length - 1,
        mid = (l + r) >> 1;

    let node = new TreeNode(arr[mid]);
    node.left = gen(arr.slice(0, mid));
    node.right = gen(arr.slice(mid + 1));
    return node;
  }

  return gen(arr);
};

