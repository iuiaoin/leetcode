/**
 * 组合
 * 描述：给定整数n, k，输出由1~n组成的k个数的左右可能的组合
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  let nums = [];
  for(let i = 1; i <= n; i++) {
    nums.push(i);
  }
  let res = [];
  backtrack([], 0);
  return res;

  function backtrack(cur, start) {
    if(cur.length === k) return res.push(cur.slice());
    for(let i = start; i < n; i++) {
      cur.push(nums[i]);
      backtrack(cur, i + 1);
      cur.pop();
    }
  }
}