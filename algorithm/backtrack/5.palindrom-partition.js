/**
 * 回文分割
 * 描述：给定字符串s，分割s，使得每个子字符串都是回文。返回s的所有可能的子字符串
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  let res = [];
  backtrack([], 0);
  return res;

  function backtrack(cur, start) {
    if(start === s.length) return res.push(cur.slice());
    for(let i = start; i < s.length; i++) {
      let str = s.slice(start, i + 1);
      if(!isPali(str)) continue;
      cur.push(str);
      backtrack(cur, i + 1);
      cur.pop();
    }
  } 

  function isPali(s) {
    if(s.length <= 1) return true;
    let l = 0;
    let r = s.length - 1;
    while(l < r) {
      if(s[l] !== s[r]) return false;
      l++;
      r--;
    } 
    return true;
  }
}