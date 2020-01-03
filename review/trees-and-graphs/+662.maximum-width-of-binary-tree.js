/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if(!root) return 0;
  let queue = [[root, 1]];
  let res = -Infinity;
  while(queue.length) {
    let len = queue.length;
    let left = queue[0][1];
    let right = queue[len - 1][1];
    res = Math.max(res, right - left + 1);
    for(let i = 0; i < len; i++) {
      let [node, pos] = queue.shift();
      pos -= left;
      if(node.left) queue.push([node.left, pos * 2]);
      if(node.right) queue.push([node.right, pos * 2 + 1]);
    }
  }
  return res;
};
// @lc code=end

