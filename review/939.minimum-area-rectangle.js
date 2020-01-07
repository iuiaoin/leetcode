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
// var minAreaRect = function(points) {
//   let len = points.length;
//   if(len < 4) return 0;
//   let res = Infinity;
//   for(let i = 0; i < len; i++) {
//     for(let j = i + 1; j < len; j++) {
//       let [x1, y1] = points[i];
//       let [x2, y2] = points[j];
//       if(x1 !== x2 && y1 !== y2) {
//         let exist1 = false;
//         let exist2 = false;
//         for(let k = 0; k < len; k++) {
//           let [x3, y3] = points[k];
//           if(x3 === x1 && y3 === y2) exist1 = true;
//           if(x3 === x2 && y3 === y1) exist2 = true;
//         }
//         if(exist1 && exist2) res = Math.min(res, Math.abs((x2 - x1) * (y2 - y1)));
//       }
//     }
//   }
//   return res === Infinity ? 0 : res;
// };

// map优化
var minAreaRect = function(points) {
  let len = points.length;
  if(len < 4) return 0;
  let res = Infinity;
  let map = {};
  for(let i = 0; i < len; i++) {
    let p = points[i];
    map[p[0]] = (map[p[0]] || new Set()).add(p[1]);
  }
  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      let p1 = points[i];
      let p2 = points[j];
      if(p1[0] === p2[0] || p1[1] === p2[1]) continue;
      if(map[p1[0]].has(p2[1]) && map[p2[0]].has(p1[1])) {
        res = Math.min(res, Math.abs((p1[0] - p2[0]) * (p1[1] - p2[1])));
      }
    }
  }
  return res === Infinity ? 0 : res;
};
// @lc code=end

