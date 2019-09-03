/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
 * 思路：dfs将每个节点的值通过参数传入，若遇到叶子则组成path并累加
 */
var sumNumbers = function(root) {
  let res = 0;
  function pathToLeaf(node, path) {
    if(node) {
      path += node.val;
      if(!node.left && !node.right) res += parseInt(path);
      pathToLeaf(node.left, path);
      pathToLeaf(node.right, path);
    }
  }
  pathToLeaf(root, '');
  return res;
};

