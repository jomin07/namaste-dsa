class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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

  heapifyDown(i) {
    let n = this.heap.length;

    while (true) {
      let left = this.getLeftIndex(i);
      let right = this.getRightIndex(i);

      if (left >= n) break;
      let smallerChild = left;

      if (right < n && this.heap[right] < this.heap[left]) {
        smallerChild = right;
      }

      if (this.heap[i] <= this.heap[smallerChild]) break;

      this.swap(i, smallerChild);
      i = smallerChild;
    }
  }

  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
}

let heap = new MinHeap();
heap.insert(5);
heap.insert(20);
heap.insert(4);
heap.insert(10);
heap.insert(1);
heap.insert(0);
console.log(heap.peek());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.heap);

// 🔹 insert(val)
// insert(val)
// What happens?
// Add element at end → O(1)
// heapifyUp() may move element upward

// In worst case, it moves from:

// leaf → root

// Height of heap:

// h=logn

// So:

// ✅ Time Complexity
// O(log n)
// ✅ Space Complexity
// O(1)

// Because iterative approach is used (no recursion stack).

// 🔹 extract()
// extract()
// What happens?
// Remove root → O(1)
// Move last element to root → O(1)
// heapifyDown() moves downward

// Worst case:

// root → leaf

// Height again:

// h=logn

// ✅ Time Complexity
// O(log n)
// ✅ Space Complexity
// O(1)

// Again iterative.

// 🔹 peek()
// peek()

// Just returns root:

// this.heap[0]
// ✅ Time Complexity
// O(1)
// ✅ Space Complexity
// O(1)
// 🔹 heapifyUp()

// Worst case:

// leaf → root
// ✅ TC
// O(log n)
// ✅ SC
// O(1)
// 🔹 heapifyDown()

// Worst case:

// root → deepest leaf
// ✅ TC
// O(log n)
// ✅ SC
// O(1)
// 🔹 Overall Summary
// Operation	Time Complexity	Space Complexity
// insert	O(log n)	O(1)
// extract	O(log n)	O(1)
// peek	O(1)	O(1)
// heapifyUp	O(log n)	O(1)
// heapifyDown	O(log n)	O(1)
