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
 * 思路：用map存储x,y坐标，寻找构成的矩形中的最小值
 */
var minAreaRect = function(points) {
  let map = {};
  let res = Infinity;
  for(let i = 0; i < points.length ;i++) {
    let [x, y] = points[i];
    if(map[x]) {
      map[x].add(y);
    } else {
      map[x] = new Set([y]);
    }
  }
  let arr = Object.keys(map);
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      let x1 = arr[i];
      let x2 = arr[j];
      let temp = [];
      for(v of map[x1]) {
        if(map[x2].has(v)) temp.push(v);
      }
      if(temp.length > 1) {
        let len = Infinity;
        for(let k = 0; k < temp.length - 1; k++) {
          for(let l = k + 1; l < temp.length; l++) {
            len = Math.min(len, Math.abs(temp[l] - temp[k]));
          }
        }
        res = Math.min(res, len * Math.abs(x2 - x1));
      }
    }
  }
  return res === Infinity ? 0 : res;
};
// @lc code=end

