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