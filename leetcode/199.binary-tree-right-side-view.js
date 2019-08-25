/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
/*
思路: 层序遍历，返回每层最右边的值
*/
var rightSideView = function(root) {
  if(!root) return [];
  let queue = [ root ],
      res = [];
  while(queue.length) {
      let len = queue.length;
      res.push(queue[len - 1].val);
      for(let i = 0; i < len; i++) {
          let node = queue.shift();
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
  }
  return res;
};

