/**
 * 正则表达式匹配
 * 描述：给定字符串s和模式p，实现正则'.'和'*'的功能. '.'匹配单个任意字符,'*'匹配0或更多前一个字符
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/**
 * 从末尾开始，递归比较，s和p字符相等或p为".", 指针往前移动。p为"*"时，若"*"前的字符与s相等或为'.'
 * 则递归多个p字符和字符数为0的情况，否则返回false。注意递归出口是p先匹配完, pi === -1
 */
function isMatch(s, p) {
  return match(s.length - 1, p.length - 1);

  function match(si, pi) {
    if (pi === -1) return si === -1;
    if (si > -1 && (s[si] === p[pi] || p[pi] === '.')) {
      return match(si - 1, pi - 1);
    }
    if (p[pi] === '*') {
      if (si > -1 && (s[si] === p[pi - 1] || p[pi - 1] === '.') && match(si - 1, pi)) return true;
      return match(si, pi - 2);
    }
    return false;
  }
}

/**
 * state: dp[i][j]表示前s前i个, p前j个能否匹配成功
 * state transition:
 *   1. If p.charAt(j) == s.charAt(i) or p.charAt(j) == '.' :  dp[i][j] = dp[i-1][j-1];
 *   2. If p.charAt(j) == '*': 
 *     here are two sub conditions:
 *       if p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]  //in this case, a* only counts as empty
 *       if p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.':
 *         dp[i][j] = dp[i-1][j]      // in this case, a* counts as multiple a 
 *         or dp[i][j] = dp[i][j-1]   // in this case, a* counts as single a
 *         or dp[i][j] = dp[i][j-2]   // in this case, a* counts as empty
 * base case: dp[0][0] = true; 若p是形如'#*#*#*#*#*' ,dp[0][j] = true
 */
function isMatch(s, p) {
  let len1 = s.length;
  let len2 = p.length;
  let dp = new Array(len1 + 1).fill(null).map(v => new Array(len2 + 1).fill(false));
  dp[0][0] = true;
  for(let j = 2; j <= len2; j += 2) {
    if(p[j - 1] === '*' && dp[0][j - 2]) {
      dp[0][j] = true;
    }
  }
  for(let i = 1; i <= len1; i++) {
    for(let j = 1; j <= len2; j++) {
      if(s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if(p[j - 1] === '*') {
        if(s[i - 1] !== p[j - 2] && p[j - 2] !== '.') {
          dp[i][j] = dp[i][j - 2];
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 1] || dp[i][j - 2];
        }
      }
    }
  }
  return  dp[len1][len2];
}