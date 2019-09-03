// 数组乱序-洗牌算法

/**
 * 从第一个元素开始，随机选择一个元素交换，直至第一个
 * @param {*} arr 
 */
function disorder(arr) {
  let len = arr.length,
      cur = 0;
  while(cur < len) {
    let random = Math.floor(Math.random() * len);
    [arr[cur], arr[random]] = [arr[random], arr[cur]];
    cur++;
  }
  return arr;
}