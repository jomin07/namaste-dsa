class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getSize() {
    return this.heap.length;
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
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);

      if (this.heap[i].priority > this.heap[parentIndex].priority) {
        this.swap(i, parentIndex);
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let largest = this.heap[0];

    this.swap(0, this.heap.length - 1);

    this.heap.pop();

    this.heapifyDown(0);

    return largest;
  }

  heapifyDown(i) {
    let n = this.getSize();

    while (true) {
      let left = this.getLeftChildIndex(i);
      let right = this.getRightChildIndex(i);

      let largest = i;

      if (left < n && this.heap[left].priority > this.heap[largest].priority) {
        largest = left;
      }

      if (
        right < n &&
        this.heap[right].priority > this.heap[largest].priority
      ) {
        largest = right;
      }

      if (largest !== i) {
        this.swap(i, largest);
        i = largest;
      } else {
        break;
      }
    }
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.heap[0];
  }
}

// Time Complexity
// Operation	Complexity
// enqueue	O(log n)
// dequeue	O(log n)
// peek	O(1)
// isEmpty	O(1)

const pq = new MaxPriorityQueue();
pq.enqueue("A", 122);
pq.enqueue("B", 112);
pq.enqueue("C", 152);
pq.enqueue("D", 112);
pq.enqueue("E", 32);

console.log(pq);
console.log(pq.dequeue());
console.log(pq.dequeue());
