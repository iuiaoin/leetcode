/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */
// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
/**
 * 思路：Dijkstra算法求最短路径
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  let prices = {};
  for(let f of flights) {
    if(!prices[f[0]]) prices[f[0]] = {};
    prices[f[0]][f[1]] = f[2];
  }
  let heap = new Heap((a, b) => a[0] - b[0]);
  heap.add([0, src, K + 1]);
  while(heap.size()) {
    let top = heap.poll();
    let price = top[0];
    let city = top[1];
    let stops = top[2];
    if(city == dst) return price;
    if(stops > 0) {
      let adj = prices[city] || {};
      Object.keys(adj).forEach((a) => {
        heap.add([price + adj[a], a, stops - 1]);
      })
    }
  }
  return -1;
};

class Heap {
  constructor(comparator) {
    this.compare = function(firstEl, secondEl) {
      return comparator(firstEl, secondEl) <= 0;
    }
    this.container = [];
  }
  size() {
    return this.container.length;
  }
  add(item) {
    this.container.push(item);
    this.heapifyUp();
  }
  peek() {
    if(!this.container.length) return null;
    return this.container[0];
  }
  poll() {
    if(!this.container.length) return null;
    if(this.container.length === 1) return this.container.pop();
    let item = this.container[0];
    this.container[0] = this.container.pop();
    this.heapifyDown();
    return item;
  }
  heapifyUp() {
    let curIndex = this.container.length - 1;
    while(curIndex > 0 && !this.compare(this.parent(curIndex), this.container[curIndex])) {
      this.swap(curIndex, this.getParentIndex(curIndex));
      curIndex = this.getParentIndex(curIndex);  
    }
  }
  heapifyDown() {
    let curIndex = 0,
        nextIndex = null;
    while(this.hasLeftChild(curIndex)) {
      if(this.hasRightChild(curIndex) && this.compare(this.rightChild(curIndex), this.leftChild(curIndex))) {
        nextIndex = this.getRightChildIndex(curIndex);
      } else {
        nextIndex = this.getLeftChildIndex(curIndex);
      }
      if(this.compare(this.container[curIndex], this.container[nextIndex])) break;
      this.swap(curIndex, nextIndex);
      curIndex = nextIndex;
    }
  }
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.size();
  }
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.size();
  }
  leftChild(parentIndex) {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }
  rightChild(parentIndex) {
    return this.container[this.getRightChildIndex(parentIndex)];
  }
  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  parent(childIndex) {
    return this.container[this.getParentIndex(childIndex)];
  }
  swap(index1, index2) {
    [this.container[index1], this.container[index2]] = [this.container[index2], this.container[index1]];
  }
}
// @lc code=end