/*
 * @lc app=leetcode id=623 lang=javascript
 *
 * [623] Add One Row to Tree
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
/*
思路：层序遍历树，到达d - 1层时，将该层节点的左右子节点保存，然后构造新的一层
*/
var addOneRow = function(root, v, d) {
  if(d === 1) {
      let node = new TreeNode(v);
      node.left = root;
      return node;
  }
  if(!root) return null;
  let queue = [ root ],
      level = 1;
  while(queue.length) {
      let len = queue.length;
      for(let i = 0; i < len ; i++) {
          let node = queue.shift();
          if(level === d - 1) {
              let left = node.left,
                  right = node. right;
              node.left = new TreeNode(v);
              node.left.left = left;
              node.right = new TreeNode(v);
              node.right.right = right;
          } else {
              if(node.left) queue.push(node.left);
              if(node.right) queue.push(node.right);
          }
      }
      level++;
  }
  return root;
};

