/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */
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
var cloneGraph = function(node) {
  if(!node) return null;
  let arr = [ node ];
  let map = { [node.val]: new Node(node.val, []) };
  let start = 0;
  while(start < arr.length) {
    let n = arr[start++];
    let clone = map[n.val];
    n.neighbors.forEach(nei => {
      if(!map[nei.val]) {
        map[nei.val] = new Node(nei.val, []);
        arr.push(nei);
      };
      clone.neighbors.push(map[nei.val]);
    });
  }
  return map[node.val];
};

