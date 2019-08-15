/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
/**
 * 思路：将数组按照字符串从左到右大小排序，最后组成string返回
 */
var largestNumber = function(nums) {
  if(!nums.length) return '0';
  nums.sort((a, b) => {
    a = a.toString();
    b = b.toString();
    let len = Math.min(a.length, b.length);
    for(let i = 0; i < len; i++) {
      if(a[i] !== b[i]) return b[i] - a[i];
    }
    return b + a - (a + b);
  }) 
  while(nums[0] === 0) {
    nums.shift();
  }
  let res = nums.join('');
  return res ? res : '0';
};

