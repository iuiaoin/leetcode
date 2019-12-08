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
  let map = new Map();
  for (let i = nodes - 1; i > 0; i--) {
    let val = parent[i];
    if (map.has(val)) {
      map.get(val).push(i);
    } else {
      map.set(val, [i])
    }
  };
  getValue(0);
  let res = 0;
  dfs(0);
  return res;

  function dfs(i) {
    if (value[i] === 0) return;
    res++;
    if (map.has(i)) {
      let arr = map.get(i);
      for (let j = 0; j < arr.length; j++) {
        dfs(arr[j]);
      }
    }
  }

  function getValue(i) {
    if (!map.has(i)) {
      return value[i];
    } else {
      let sum = value[i];
      let arr = map.get(i);
      for (let j = 0; j < arr.length; j++) {
        sum += getValue(arr[j]);
      }
      value[i] = sum;
      return sum;
    }
  }
};
