/*
 * @lc app=leetcode id=351 lang=javascript
 *
 * [351] Android Unlock Patterns
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：用二维数组skip来存储数字之间相隔的数字，visit来存储数字是否被访问过，
 * dfs来计算m到n之间的解锁数，参数当前数字，还剩多少步，1、3、7、9，2、4、6、8是对称的
 */
var numberOfPatterns = function(m, n) {
  let skip = new Array(10).fill(null).map(v => new Array(10).fill(0));
  skip[1][3] = skip[3][1] = 2;
  skip[1][7] = skip[7][1] = 4;
  skip[3][9] = skip[9][3] = 6;
  skip[7][9] = skip[9][7] = 8;
  skip[1][9] = skip[9][1] = skip[2][8] = skip[8][2] = skip[3][7] = skip[7][3] = skip[4][6] = skip[6][4] = 5;
  let visit = new Array(10).fill(false);
  let res = 0;
  for(let i = m; i <= n; i++) {
    res += dfs(1, i - 1) * 4;
    res += dfs(2, i - 1) * 4;
    res += dfs(5, i - 1);
  }
  return res;

  function dfs(cur, len) {
    let count = 0;
    if(len === 0) return 1;
    visit[cur] = true;
    for(let i = 1; i <= 9; i++) {
      if(!visit[i] && (skip[cur][i] === 0 || visit[skip[cur][i]])) {
        count += dfs(i, len - 1);
      }
    }
    visit[cur] = false;
    return count;
  }
};

