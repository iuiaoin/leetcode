/*
 * @lc app=leetcode id=623 lang=javascript
 *
 * [623] Add One Row to Tree
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
  if (d === 1) {
    let node = new TreeNode(v);
    node.left = root;
    return node;
  }
  let level = 1;
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      let {left, right} = node;
      if(level === d - 1) {
        let newLeft = new TreeNode(v);
        let newRight = new TreeNode(v);
        node.left = newLeft;
        node.right = newRight;
        newLeft.left = left;
        newRight.right = right;
      } else {
        if (left) queue.push(node.left);
        if (right) queue.push(node.right);
      }
    }
    level++;
  }
  return root;
}
// @lc code=end