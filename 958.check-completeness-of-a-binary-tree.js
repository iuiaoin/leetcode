/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
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
 * @return {boolean}
 */
/**
 * 层序遍历，当遇到null值是判断是否是在最后一层且右边全为null值
 */
var isCompleteTree = function(root) {
  if(!root) return true;
  let queue = [ root ];
  while(queue.length) {
    let len = queue.length,
        hasNull = false;
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      if(node) {
        if(hasNull) return false;
        queue.push(node.left);
        queue.push(node.right);
      } else {
        hasNull = true;
      }
    }
    if(queue.every(v => v === null)) {
      return true;
    } else if(hasNull) {
      return false;
    }
  }
};

