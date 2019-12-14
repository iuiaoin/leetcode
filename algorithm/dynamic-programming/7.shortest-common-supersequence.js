/**
 * 最短公共父序列
 * 描述：给定两个字符串，返回它们的最短公共子序列(其中一个)
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/**
 * 先找出str1和str2的LCS，然后把其余部分拼接上去
 * 在dpArr中存lcs每个char的位置信息，最后根据它来拼接(unnecessary)
 */
function shortestCommonSupersequence(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let dp = new Array(len1 + 1).fill(null).map(v => new Array(len2 + 1).fill(0));
  let dpArr = new Array(len1 + 1).fill(null).map(v => new Array(len2 + 1).fill(''));
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        let mark = dpArr[i - 1][j - 1] ? '|' : '';
        dpArr[i][j] = `${dpArr[i - 1][j - 1]}${mark}${str1[i - 1]},${i - 1},${j - 1}`;
      } else {
        if (dp[i - 1][j] < dp[i][j - 1]) {
          dp[i][j] = dp[i][j - 1];
          dpArr[i][j] = dpArr[i][j - 1];
        } else {
          dp[i][j] = dp[i - 1][j];
          dpArr[i][j] = dpArr[i - 1][j];
        }
      }
    }
  }
  let lcs = dpArr[len1][len2].split('|');
  let res = '';
  let s1 = 0;
  let s2 = 0;
  for (let i = 0; i < lcs.length; i++) {
    let [char, j, k] = lcs[i].split(',');
    j = +j;
    k = +k;
    res += str1.slice(s1, j) + str2.slice(s2, k) + char;
    s1 = j + 1;
    s2 = k + 1;
  }
  res += str1.slice(s1) + str2.slice(s2);
  return res;
};


/**
 * 使用dp直接返回lcs
 * 遍历lcs来将str1和str2的字符拼上去
 */
function shortestCommonSupersequence(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let dp = new Array(len1 + 1).fill(null).map(v => new Array(len2 + 1).fill(''));
  for(let i = 0; i < len1; i++) {
    for(let j = 0; j < len2; j++) {
      if(str1[i] === str2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + str1[i];
      } else {
        dp[i + 1][j + 1] = dp[i][j + 1].length > dp[i + 1][j].length ? dp[i][j + 1] : dp[i + 1][j];
      }
    }
  }
  let lcs = dp[len1][len2];
  let i = 0;
  let j = 0;
  let res = '';
  for(let char of lcs) {
    while(str1[i] !== char) {
      res += str1[i++];
    }
    while(str2[j] !== char) {
      res += str2[j++];
    }
    res += char;
    i++;
    j++;
  }
  return res + str1.slice(i) + str2.slice(j);
}