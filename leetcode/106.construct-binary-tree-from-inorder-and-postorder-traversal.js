/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/**
 * 思路：postorder末尾的节点为根节点，用它分割inorder，
 * 左右边分别为左右子树
 */
var buildTree = function(inorder, postorder) {
  let len = postorder.length,
      postIndex = len - 1;

  function build(l, r) {
    if(l > r) return null;
    let node = new TreeNode(postorder[postIndex--]);
    let index = inorder.indexOf(node.val);
    node.right = build(index + 1, r);
    node.left = build(l, index - 1);
    return node;
  }
  return build(0, len - 1);
};

