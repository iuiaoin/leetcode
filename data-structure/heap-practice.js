class Heap {
  constructor(func) {
    this.container = [];
    this.compare = function(firstEl, SecondEl) {
      return func(firstEl, SecondEl) <= 0;
    }
  }
  size() {
    return this.container.length;
  }
  add(el) {
    this.container.push(el);
    this.heapifyUp();
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
    let index = this.size() - 1;
    while(this.hasParent(index) && !this.compare(this.parent(index), this.container[index])) {
      [this.container[index], this.container[this.getParentIndex(index)]] = [this.container[this.getParentIndex(index)], this.container[index]];
      index = this.getParentIndex(index);
    };
  }
  heapifyDown() {
    let index = 0;
    while(this.hasLeftChild(index)) {
      let childIndex = this.getleftChildIndex(index);
      if(this.hasRightChild(index) && this.compare(this.container[this.getrightChildIndex(index)], this.container[childIndex])) {
        childIndex = this.getrightChildIndex(index);
      }
      if(!this.compare(this.container[index], this.container[childIndex])) {
        [this.container[index], this.container[childIndex]] = [this.container[childIndex], this.container[index]];
        index = childIndex;
      } else {
        break;
      }
    }
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  parent(index) {
    return this.container[this.getParentIndex(index)];
  }
  hasLeftChild(index) {
    return !!this.container[index * 2  + 1];
  }
  getleftChildIndex(index) {
    return index * 2 + 1;
  }
  hasRightChild(index) {
    return !!this.container[index * 2 + 2];
  }
  getrightChildIndex(index) {
    return index * 2 + 2;
  }
}