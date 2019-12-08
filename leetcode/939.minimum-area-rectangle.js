/*
 * @lc app=leetcode id=939 lang=javascript
 *
 * [939] Minimum Area Rectangle
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * 思路：用map存坐标，遍历points，寻找对角线的点，然后在map中查找是否有对应的另外两个点，如果有则将其作为候选矩形
 */
var minAreaRect = function(points) {
  let map = {};
  for(let i = 0; i < points.length ;i++) {
    let [x, y] = points[i];
    if(map[x]) {
      map[x].add(y);
    } else {
      map[x] = new Set([y]);
    }
  }
  let res = Infinity;
  for(let i = 0; i < points.length - 1; i++) {
    for(let j = i + 1; j < points.length; j++) {
      let p1 = points[i];
      let p2 = points[j];
      if(p1[0] === p2[0] || p1[1] === p2[1]) continue;
      if(map[p1[0]].has(p2[1]) && map[p2[0]].has(p1[1])) {
        res = Math.min(res, Math.abs(p1[0] - p2[0]) * Math.abs(p1[1] - p2[1]));
      }
    }
  }
  return res === Infinity ? 0 : res;
};
// @lc code=end

