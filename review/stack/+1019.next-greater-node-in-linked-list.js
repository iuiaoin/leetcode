/*
 * @lc app=leetcode id=1019 lang=javascript
 *
 * [1019] Next Greater Node In Linked List
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
 * @return {number[]}
 */
// var nextLargerNodes = function(head) {
//   if(!head) return [];
//   let res = [];
//   let node = head;
//   while(node) {
//     res.push(0);
//     let p = node.next;
//     while(p) {
//       if(p.val > node.val) {
//         res[res.length - 1] = p.val;
//         break;
//       } else {
//         p = p.next;
//       }
//     }
//     node = node.next;
//   }
//   return res;
// };

// 栈优化
var nextLargerNodes = function(head) {
  if(!head) return [];
  let arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  let res = new Array(arr.length).fill(0);
  let stack = [];
  for(let i = 0; i < arr.length; i++) {
    while(stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      let index = stack.pop();
      res[index] = arr[i];
    }
    stack.push(i);
  }
  return res;
};
// @lc code=end

