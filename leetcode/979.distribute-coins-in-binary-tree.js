/*
 * @lc app=leetcode id=979 lang=javascript
 *
 * [979] Distribute Coins in Binary Tree
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
 * 思路：关键在于使用后序遍历，每个叶子节点只有一个父节点，自底向上将溢出值传递并累加
 */
var distributeCoins = function(root) {
  let res = 0;
  function helper(node) {
    if(!node) return 0;
    let l = helper(node.left);
    let r = helper(node.right);
    res += Math.abs(l) + Math.abs(r);
    return l + r + node.val - 1;
  }
  helper(root);
  return res;
};

