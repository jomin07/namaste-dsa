// ============================================================
// MIN HEAP (priority queue)
// Stores pairs like [distance, node]. The pair with the SMALLEST
// distance is always at the top (index 0).
//
// The heap is stored in a plain array. For the item at index i:
//   parent      -> floor((i - 1) / 2)
//   left child  -> 2 * i + 1
//   right child -> 2 * i + 2
// ============================================================
class MinHeap {
  constructor() {
    this.heap = []; // the array that holds all [distance, node] pairs
  }

  // Index helpers: where are the parent / children of index i?
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  // How many items are in the heap right now
  size() {
    return this.heap.length;
  }

  // Swap two items using array destructuring
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Add a new pair:
  // 1. put it at the END of the array
  // 2. move it UP until the heap rule is restored
  push(pair) {
    this.heap.push(pair);
    this.heapifyUp();
  }

  // Bubble the last item up while it is smaller than its parent.
  // [0] is the distance, so we compare by distance only.
  // The node number (index 1) just travels along with its distance.
  heapifyUp() {
    let i = this.heap.length - 1; // start at the newly added item
    while (i > 0 && this.heap[i][0] < this.heap[this.parent(i)][0]) {
      this.swap(i, this.parent(i)); // smaller than parent -> swap upward
      i = this.parent(i); // continue from the parent's position
    }
  }

  // Remove and return the pair with the smallest distance (the root)
  pop() {
    if (this.heap.length === 0) return null; // nothing to remove
    if (this.heap.length === 1) return this.heap.pop(); // only one item

    const root = this.heap[0]; // the smallest, which we will return
    this.heap[0] = this.heap.pop(); // move the LAST item to the top...
    this.heapifyDown(); // ...then push it down to its correct place
    return root;
  }

  // Sink the root down while a child is smaller than it
  heapifyDown() {
    let i = 0; // start at the root
    while (true) {
      let smallest = i; // assume the current node is the smallest
      let left = this.left(i);
      let right = this.right(i);

      // Is the left child inside the array AND smaller than the current smallest?
      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }
      // Same check for the right child
      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
      ) {
        smallest = right;
      }

      if (smallest !== i) {
        // A child was smaller: swap with it and keep sinking
        this.swap(i, smallest);
        i = smallest;
      } else {
        break; // heap rule satisfied, we are done
      }
    }
  }
}

// ============================================================
// DIJKSTRA'S ALGORITHM
// Finds the shortest distance from `src` to every other node.
//
// graph is an adjacency list:
//   graph[u] = [[neighbor, weight], [neighbor, weight], ...]
// Weights must be non-negative.
// ============================================================
function dijkstras(graph, src) {
  let n = graph.length; // number of nodes

  // dist[v] = best known distance from src to v
  // Everything starts as Infinity (unreachable so far)
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0; // distance from the source to itself is 0

  // The priority queue always gives us the closest unvisited node next
  let pq = new MinHeap();
  pq.push([0, src]); // [distance, node]

  while (pq.size()) {
    // Take the node with the smallest distance
    let [nodeDist, node] = pq.pop();

    // STALE ENTRY CHECK:
    // The heap has no "decrease key", so when we find a shorter path
    // to a node we push a NEW entry and leave the old one behind.
    // If this popped entry is worse than the best known distance, skip it.
    if (nodeDist > dist[node]) continue;

    // Look at every outgoing edge of this node
    for (let [neighbor, weight] of graph[node]) {
      // Distance to neighbor if we go through the current node
      let newDist = dist[node] + weight;
      //         newDist = (distance to where I am now) + (distance of the next hop)

      // Say you want to reach a friend’s house:

      // You’re at the bus stop, which is 2 km from your home (dist[node] = 2)
      // From the bus stop to your friend’s house is 1 km (weight = 1)
      // So going to your friend’s house through the bus stop is 2 + 1 = 3 km (newDist = 3)

      // RELAXATION: is this path shorter than what we knew before?
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist; // record the better distance
        pq.push([newDist, neighbor]); // queue it for processing
      }
    }
  }

  return dist; // unreachable nodes stay Infinity
}

// ============================================================
// EXAMPLE
// Each inner pair is [neighbor, weight].
//   0 -> 1 (w2), 0 -> 2 (w4)
//   1 -> 3 (w7), 1 -> 2 (w1)
//   2 -> 4 (w3), 2 -> 5 (w1)
//   3 -> 6 (w1)
//   4 -> 3 (w2), 4 -> 6 (w5)
//   5 -> 3 (w3), 5 -> 6 (w8)
//   6 has no outgoing edges
// ============================================================
const graph = [
  [
    [1, 2],
    [2, 4],
  ], // node 0
  [
    [3, 7],
    [2, 1],
  ], // node 1
  [
    [4, 3],
    [5, 1],
  ], // node 2
  [[6, 1]], // node 3
  [
    [3, 2],
    [6, 5],
  ], // node 4
  [
    [3, 3],
    [6, 8],
  ], // node 5
  [], // node 6
];

console.log(dijkstras(graph, 0));
// Output: [0, 2, 3, 7, 6, 4, 8]
