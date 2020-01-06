/*
 * @lc app=leetcode id=1273 lang=javascript
 *
 * [1273] Delete Tree Nodes
 */

// @lc code=start
/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
// var deleteTreeNodes = function(nodes, parent, value) {
//   let map = {};
//   for(let i = 1; i < nodes; i++) {
//     map[parent[i]] = (map[parent[i]] || []).concat(i);
//   }
//   let res = nodes;
//   dfs(0);
//   return res;

//   function dfs(node) {
//     let arr = map[node] || [];
//     let num = 1;
//     let val = value[node];
//     for(let i = 0; i < arr.length; i++) {
//       let [n, v] = dfs(arr[i]);
//       if(v === 0) num -= n;
//       num += n;
//       val += v;
//     }
//     if(val === 0) {
//       res -= num;
//     }
//     return [num, val];
//   }
// };

/**
 * state: dp[i]表示以i-th节点为根的子树的和不为0的节点数
 * state transition: dp[i] = sum{value[j] === 0 ? 0 : dp[j] + 1}
 */
var deleteTreeNodes = function(nodes, parent, value) {
  let dp = new Array(nodes).fill(0);
  for(let i = nodes - 1; i >= 0; i--) {
    value[parent[i]] += value[i];
    dp[parent[i]] += value[i] === 0 ? 0 : dp[i] + 1;
  }
  return value[0] === 0 ? 0 : dp[0] + 1;
};
// @lc code=end

