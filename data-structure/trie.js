// 字典树(前缀树)

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this._root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let cur = this._root;
  for(let i = 0; i < word.length; i++) {
    if(!cur[word[i]]) cur[word[i]] = new Trie();
    cur = cur[word[i]];
  }
  cur.isWord = true;
};

Trie.prototype._traverse = function(word) {
  let cur = this._root;
  for(let i = 0; i < word.length; i++) {
    if(!cur[word[i]]) return null;
    cur = cur[word[i]];
  }
  return cur;
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this._traverse(word);
  return !!node && !!node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !!this._traverse(prefix);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


 /**
  * 简单版本的思路：
  * 构造这样一个对象:
  * {
  *   'a': {
  *     'b': {
  *       isWord: true
  *     }
  *   }
  * }
  */