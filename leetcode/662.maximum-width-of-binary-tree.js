/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
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
/*
思路：使用bfs遍历树，将节点的pos传递到子节点，left: pos -> pos * 2,
right: pos -> pos * 2 + 1，要注意pos整型溢出的问题
*/
var widthOfBinaryTree = function(root) {
  if(!root) return 0;
  let max = 0,
      queue = [ [root, 0] ];
  while(queue.length) {
      let len = queue.length,
          left = queue[0][1],
          right = queue[len - 1][1];
      for(let i = 0; i < len; i++) {
          let arr = queue.shift(),
              node = arr[0],
              pos = arr[1] - left;
          if(node.left) queue.push([node.left, pos * 2]);
          if(node.right) queue.push([node.right, pos * 2 + 1]);
      }
      max = Math.max(max, right - left + 1);
  }
  return max;
};
