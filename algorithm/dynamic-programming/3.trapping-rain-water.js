/**
 * 雨水收集
 * 描述：给定n个代表海拔图的非负整数，其中每个条的宽度为1，计算下雨后它能捕获多少水
 * @param {number[]} height
 * @return {number}
 */
/**
 * 基本思路是对于height中每个元素往左和往右分别找最大高度，然后两者的较小值与height[i]的差即为该格子捕获的雨水
 * 存储最大高度(dp)，右侧同理
 * left[i]为i左侧的最大值
 * left[i] = max{left[i - 1], height[i]}
 * left[0] = height[i];
 */
function trap(height) {
  let len = height.length;
  let left = new Array(len).fill(0);
  let right = new Array(len).fill(0);
  left[0] = height[0];
  right[len - 1] = height[len - 1];
  for(let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }
  for(let i = len - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  } 
  let res = 0;
  for(let i = 0; i < len; i++) {
    res += Math.min(left[i], right[i]) - height[i];
  }
  return res;
}