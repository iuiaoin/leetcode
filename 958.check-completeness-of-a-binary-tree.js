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
 * 层序遍历，当遇到有的节点时，如果出现过null返回false，如果是最后一层返回true，否则如果出现了null返回false
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

