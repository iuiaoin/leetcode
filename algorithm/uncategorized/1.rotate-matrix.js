/**
 * 旋转矩阵
 * 描述：给定一个n*n的矩阵，向右旋转90度
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 * 顺时针转90度
 * 首先从上到下反转，然后交换主对角线两边的值
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
 */
function rotate(matrix) {
  matrix.reverse();
  let n = matrix.length;
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

/**
 * 逆时针转90度
 * 首先从左到右反转，然后交换主对角线两边的值
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
 */
function rotate(matrix) {
  let n = matrix.length;
  for(let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}