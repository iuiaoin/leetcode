/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.size = capacity;
  this.query = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const { cache, query } = this;
  let val = cache.get(key);
  if(!val) return -1;
  let index = query.indexOf(key);
  query.push(...query.splice(index, 1));
  return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const { cache, query, size } = this;
  if(cache.has(key)) {
    let index = query.indexOf(key);
    query.push(...query.splice(index, 1));
  } else {
    query.push(key);
    if(query.length > size) cache.delete(query.shift());
  }
  cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

