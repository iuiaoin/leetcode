var findWords = function(board, words) {
  let res = [];
  if(!words.length || !board[0]) return res;
  let m = board.length;
  let n = board[0].length;
  let root = buildTrie();
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      searchWord(root, i, j);
    }
  }
  return res;

  function searchWord(node, i, j) {
    if(node.word) {
      res.push(node.word);
      node.word = null;
    };
    if(i < 0 || i > m - 1 || j < 0 || j > n - 1 || board[i][j] === '#' || !node[board[i][j]]) return; 
    
    let c = board[i][j];
    board[i][j] = '#';
    searchWord(node[c], i - 1, j);
    searchWord(node[c], i + 1, j);
    searchWord(node[c], i, j - 1);
    searchWord(node[c], i, j + 1);
    board[i][j] = c;
  }

  // function buildTrie() {
  //   let root = {};
  //   for(let word of words) {
  //     let node = root;
  //     Array.from(word).forEach(c => node = node[c] ? node[c] : node[c] = {});
  //     node.word = word;
  //   }
  //   return root;
  // }

  function buildTrie()  {
    let root = {};
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let node = root;
      for(let j = 0; j < word.length; j++) {
        const c = word.charAt(j);
        if(!node[c]) node[c] = {};
        node = node[c];
      }
      node.word = word;
    }
    return root;
  }
};