/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return root;
  let query = [ root ];
  while(query.length) {
    let len = query.length;
    for(let i = 0; i < len; i++) {
      let node = query.shift();
      if(i !== len - 1) node.next = query[0];
      if(node.left) query.push(node.left);
      if(node.right) query.push(node.right);
    }
  }
  return root;
};

