/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;
  let map = new Map();
  dfs(node);
  return map.get(node);

  function dfs(node) {
    if (map.has(node)) return map.get(node);
    let item = new Node(node.val, []);
    map.set(node, item);
    let arr = node.neighbors;
    for (let i = 0; i < arr.length; i++) {
      item.neighbors.push(dfs(arr[i]));
    }
    return item;
  }
};
// @lc code=end