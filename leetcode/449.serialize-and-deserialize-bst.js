/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '';
  let data = '';
  ! function helper(node) {
    if (!node) {
      data += 'null,';
    } else {
      data += node.val + ',';
      helper(node.left);
      helper(node.right);
    }
  }(root);
  return data.slice(0, data.length - 1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  let arr = data.split(',');
  function helper() {
    let val = arr.shift();
    if (val === 'null') return null;
    let node = new TreeNode(val);
    node.left = helper();
    node.right = helper();
    return node;
  };
  return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */