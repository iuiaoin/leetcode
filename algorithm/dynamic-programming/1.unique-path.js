/**
 * 独特路径
 * 描述：m * n的矩阵，只能往右和往下，从(0, 0)到(m - 1, n - 1)有几种不同的路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * dp[i][j]表示i, j的路径数
 * dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * dp[i][0] = dp[0][j] = 1
 */
function uniquePaths(m, n) {
  let dp = new Array(m).fill(null).map(v => new Array(n).fill(0));
  dp[0].fill(1);
  for(let i = 0; i < m; i++) dp[i][0] = 1;
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}