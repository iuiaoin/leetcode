/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
/**
 * 思路：对nums1, nums2分别取k个数, 若长度小于k则取全部，放入最小堆，取前k个pair
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let res = [];
  let heap = new Heap((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  let len1 = nums1.length < k ? nums1.length : k;
  let len2 = nums2.length < k ? nums2.length : k;
  for(let i = 0; i < len1; i++) {
    for(let j = 0; j < len2; j++) {
      heap.add([nums1[i], nums2[j]]);
    }
  }
  let len = heap.size() < k ? heap.size() : k;
  for(let l = 0; l < len; l++) {
    res.push(heap.poll());
  }
  return res;
};


class Heap {
  constructor(comparator, maxSize) {
    this.compare = function(firstEl, secondEl) {
      return comparator(firstEl, secondEl) <= 0;
    }
    this.container = [];
    this.maxSize = maxSize;
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

