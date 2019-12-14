/**
 * 最长公共子串
 * 描述: 给定两个数组，返回最长公共子数组的长度
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
/**
 * state: dp[i][j]以A[i - 1],B[j - 1]结尾的lcs
 * state transition: A[i] === B[j], dp[i - 1][j - 1] + 1; dp[i][j] = 0
 * base case: dp[0][0] = 0
 */
function findLength(A, B) {
  let len1 = A.length;
  let len2 = B.length;
  let dp = new Array(len1 + 1).fill(null).map(v => new Array(len2).fill(0));
  let res = 0;
  for(let i = 1; i <= len1; i++) {
    for(let j = 1; j <= len2; j++) {
      if(A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      res = Math.max(dp[i][j], res);
    }
  }
  return res;
}