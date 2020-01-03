/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
// var findDuplicateSubtrees = function(root) {
//   if(!root) return [];
//   let map = new Map();
//   let res = [];
//   dfs(root);
//   for(let [key, value] of map) {
//     if(value.length > 1) res.push(value[0]);
//   }
//   return res;

//   function dfs(node) {
//     if(node) {
//       let queue = [node];
//       let s = '';
//       while(queue.length) {
//         let n = queue.shift();
//         if(n) {
//           s += `,${n.val}`;
//           queue.push(n.left);
//           queue.push(n.right);
//         } else {
//           s += `,null`;
//         }
//       }
//       map.set(s, (map.get(s) || []).concat(node));
//       dfs(node.left);
//       dfs(node.right);
//     }
//   }
// };

// 自底向上返回
var findDuplicateSubtrees = function(root) {
  if(!root) return [];
  let res = [];
  let map = {};
  dfs(root);
  return res;
  
  function dfs(node) {
    if(!node) return '#';
    let str = node.val + dfs(node.left) + dfs(node.right);
    map[str] = (map[str] || 0) + 1;
    if(map[str] === 2) res.push(node);
    return str;
  }
};
// @lc code=end

