/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return null;
  let queue = [root];
  while(queue.length) {
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      if(i < len - 1) queue[i].next = queue[i + 1];
      if(queue[i].left) queue.push(queue[i].left);
      if(queue[i].right) queue.push(queue[i].right);
    }
    queue = queue.slice(len);
  }
  return root;
};
// @lc code=end

