/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */
/*
思路：直接存入map中比较是否有相同结构即可
*/
var findDuplicateSubtrees = function(root) { 
  if(!root) return [];
  let res = [],
      map = {};
  find(root);
  return res;
  
  function find(node) {
      if(!node) return '#';
      let str = node.val + find(node.left) + find(node.right);
      map[str] = (map[str] || 0) + 1;
      if(map[str] === 2) res.push(node);
      return str;
  }
};

