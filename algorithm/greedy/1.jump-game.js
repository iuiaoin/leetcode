/**
 * 跳跃游戏
 * 描述：给定一个非负数组代表在其位置可以跳的最远的长度，从起始位置开始，判断是否能达到最后一位置
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 思路：把能够达到lastPos的index称为good index,问题就转化为0是不是good index.
 * 从lastPos向左遍历，如果遇到good index则更新lastPos，看lastPos最后是否等于0.
 */
function canJump(nums) {
  let lastPos = nums.length - 1;
  for(let i = lastPos; i >= 0; i--) {
    if(i + nums[i] >= lastPos) lastPos = i;
  }
  return lastPos === 0;
}