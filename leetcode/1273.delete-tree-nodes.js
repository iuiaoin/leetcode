/*
 * @lc app=leetcode id=1273 lang=javascript
 *
 * [1273] Delete Tree Nodes
 */

/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
/**
 * 思路：遍历parent, 存储父子节点，dfs计算每个子树的和
 */
var deleteTreeNodes = function (nodes, parent, value) {
  let map = {};
  for (let i = 1; i < nodes; i++) {
    let val = parent[i];
    map[val] = (map[val] || []).concat(i);
  };
  return dfs(0)[1];

  function dfs(i) {
    let arr = map[i] || [];
    let sum = value[i];
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      let [s, c] = dfs(arr[j]);
      sum += s;
      count += c;
    }
    return [sum, sum === 0 ? 0 : count];
  }
};
