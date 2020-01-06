/*
 * @lc app=leetcode id=351 lang=javascript
 *
 * [351] Android Unlock Patterns
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
  let skip = new Array(10).fill(null).map(v => new Array(10).fill(0));
  skip[1][3] = skip[3][1] = 2;
  skip[1][7] = skip[7][1] = 4;
  skip[3][9] = skip[9][3] = 6;
  skip[7][9] = skip[9][7] = 8;
  skip[1][9] = skip[9][1] = skip[2][8] = skip[8][2] = skip[3][7] = skip[7][3] = skip[4][6] = skip[6][4] = 5;
  let res = 0;
  let visit = new Array(10).fill(false);
  for(let i = m; i <= n; i++) {
    res += dfs(1, i) * 4;
    res += dfs(2, i) * 4;
    res += dfs(5, i);
  }
  return res;

  function dfs(cur, step) {
    if(step === 1) return 1;
    visit[cur] = true;
    let num = 0;
    for(let i = 1; i <= 9; i++) {
      if(!visit[i] && (skip[cur][i] === 0 || visit[skip[cur][i]])) {
        num += dfs(i, step - 1);
      }
    }
    visit[cur] = false;
    return num;
  }
};
// @lc code=end

