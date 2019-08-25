/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(!root || root === p || root === q) return root;
  let s = [];
  let stack = [ root ];
  while(stack.length) {
    let node = stack.pop();
    if(node === p) {
      if(preOrder(node, q)) return node;
      while(s.length) {
        let n = s.pop();
        if(preOrder(n, q)) return n;
      }
    } else if(node === q) {
      if(preOrder(node, p)) return node;
      while(s.length) {
        let n = s.pop();
        if(preOrder(n, p)) return n;
      }
    }
    s.push(node);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
};

function preOrder(root, n) {
  let stack = [ root ];
  while(stack.length) {
    let node = stack.pop();
    if(node === n) return true;
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
}

