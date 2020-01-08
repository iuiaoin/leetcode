class Heap {
  constructor(compator) {
    this.compare = function (el1, el2) {
      return compator(el1, el2) <= 0;
    };
    this.container = [];
  }
  size() {
    return this.container.length;
  }
  peek() {
    let c = this.container;
    if(c.length < 1) return null;
    return c[0];
  }  
  add(el) {
    let c = this.container;
    c.push(el);
    this.heapifyUp();
  }
  poll() {
    let c = this.container;
    if(c.length < 1) return null;
    if(c.length === 1) return c.pop();
    let item = c[0];
    c[0] = c.pop();
    this.heapifyDown();
    return item;
  }
  heapifyUp() {
    let c = this.container;
    let curIndex = c.length - 1;
    while(curIndex > 0 && !this.compare(c[this.parentIndex(curIndex)] ,c[curIndex])) {
      this.swap(this.parentIndex(curIndex), curIndex);
      curIndex = this.parentIndex(curIndex);
    }
  }
  heapifyDown() {
    let curIndex = 0;
    let c = this.container;
    while(this.hasLeft(curIndex)) {
      let nextIndex = null;
      if(this.hasRight(curIndex) && !this.compare(c[this.left(curIndex)], c[this.right(curIndex)])) {
        nextIndex = this.right(curIndex);
      } else {
        nextIndex = this.left(curIndex);
      }
      if(this.compare(c[curIndex], c[nextIndex])) break;
      this.swap(curIndex, nextIndex);
      curIndex = nextIndex;
    }
  }
  left(index) {
    return index * 2 + 1;
  }
  right(index) {
    return index * 2 + 2;
  }
  hasLeft(index) {
    return index * 2 + 1 < this.size();
  }
  hasRight(index) {
    return index * 2 + 2 < this.size();
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  swap(index1, index2) {
    let c = this.container;
    [c[index1], c[index2]] = [c[index2], c[index1]];
  }
}