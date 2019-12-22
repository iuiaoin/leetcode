  /*
 * @lc app=leetcode id=419 lang=javascript
 *
 * [419] Battleships in a Board
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  if(!board.length || !board[0].length) return 0;
  let m = board.length;
  let n = board[0].length;
  let res = 0;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(board[i][j] === 'X') {
        if(i > 0 && board[i - 1][j] === 'X' || j > 0 && board[i][j - 1] === 'X') continue;
        res++;
      }
    }
  }
  return res;
};
// @lc code=end

