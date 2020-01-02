/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  if(!root) return [];
  addParent(root, null);

  function addParent(node, parent) {
    if(!node) return;
    node.parent = parent;
    addParent(node.left, node);
    addParent(node.right, node);
  }
  let queue = [target];
  let dis = 0;
  let res = [];
  let set = new Set();
  while(queue.length) {
    let len = queue.length;
    if(dis > K) break;
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      set.add(node);
      if(dis === K) res.push(node.val);
      if(node.parent && !set.has(node.parent)) queue.push(node.parent);
      if(node.left && !set.has(node.left)) queue.push(node.left);
      if(node.right && !set.has(node.right)) queue.push(node.right);
    }
    dis++;
  }
  return res;
};
// @lc code=end

