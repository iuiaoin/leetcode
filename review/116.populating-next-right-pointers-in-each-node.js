/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
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
      let node = queue.shift();
      if(i < len - 1) node.next = queue[0];
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }
  return root;
};
// @lc code=end

