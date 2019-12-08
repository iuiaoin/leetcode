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
 * 思路：由于parent的index一定比本身的小，所以倒序遍历parent，累加子树值的和并计数(其实就是dp)
 */
var deleteTreeNodes = function (nodes, parent, value) {
  let res = new Array(nodes).fill(0);
  for(let i = nodes - 1; i > 0; i--) {
    value[parent[i]] += value[i];
    res[parent[i]] += value[i] === 0 ? 0 : res[i] + 1;
  }
  return res[0] === 0 ? 0 : res[0] + 1;
};
