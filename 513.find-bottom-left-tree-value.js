/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
 */
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
/**
 * bfs返回最后一层第一个节点的值
 */
var findBottomLeftValue = function(root) {
  if(!root) return -1;
  let queue = [ root ];
  let res;
  while(queue.length) {
    let len = queue.length;
    res = queue[0].val;
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }
  return res;
};

