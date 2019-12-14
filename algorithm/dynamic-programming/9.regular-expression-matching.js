/**
 * 正则表达式匹配
 * 描述：给定字符串s和模式p，实现正则'.'和'*'的功能. '.'匹配单个任意字符,'*'匹配0或更多前一个字符
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  return match(s.length - 1, p.length - 1);

  function match(si, pi) {
    if(pi === -1) return si === -1;
    if(si > -1 && (s[si] === p[pi] || p[pi] === '.')) {
      return match(si - 1, pi - 1);
    }
    if(p[pi] === '*') {
      if(si > -1 && (s[si] === p[pi - 1] || p[pi - 1] === '.') && match(si - 1, pi)) return true;
      return match(si, pi - 2);
    }
    return false;
  }
}