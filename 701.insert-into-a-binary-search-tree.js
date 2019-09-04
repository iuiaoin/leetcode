/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
/**
 * 思路：利用bst性质寻找到合适的插入点
 */
var insertIntoBST = function(root, val) {
  if(!root) return new TreeNode(val);
  let node = root;
  while(node) {
    if(val < node.val) {
      if(node.left) {
        node = node.left;
      } else {
        node.left = new TreeNode(val);
        break;
      }
    } else {
      if(node.right) {
        node = node.right;
      } else {
        node.right = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};

