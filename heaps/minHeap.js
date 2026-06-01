class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);

      if (this.heap[i] < this.heap[parentIndex]) {
        this.swap(i, parentIndex);
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }
}

const heap = new MinHeap();
heap.insert(5);
console.log(heap);
heap.insert(10);
console.log(heap);
heap.insert(20);
console.log(heap);
heap.insert(30);
console.log(heap);
heap.insert(1);

console.log(heap);
