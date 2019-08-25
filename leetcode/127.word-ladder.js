/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if(wordList.indexOf(endWord) === -1) return 0;
  let res = Infinity;

  function helper(w, count) {
      if(isOneLetter(w, beginWord)) return res = Math.min(count + 1, res);
      let index = wordList.indexOf(w);
      if(index === -1) return;
      wordList[index] = '#';
      for(let i = 0; i < wordList.length; i++) {
          if(isOneLetter(w, wordList[i])) {
              helper(wordList[i], count + 1);
          }  
      }
      wordList[index] = w;
  }
  helper(endWord, 1);
  return res === Infinity ? 0 : res;    
};

function isOneLetter(w1, w2) {
  for(let i = 0; i < w1.length; i++) {
      if(w1.slice(0, i) + w1.slice(i + 1) === w2.slice(0, i) + w2.slice(i + 1)) return true;
  }
  return false;
}

