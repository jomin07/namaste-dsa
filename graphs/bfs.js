// Breadth First Search (BFS)
// Example: 1

// BFS: [0, 1, 2, 3, 4]

// Example: 2

// BFS: [1, 2, 4, 3, 5, 9, 8, 6, 7]

// Real-World Example

// BFS: [Mussoorie, Dehradun, Chandigarh, , Delhi, Agra, Jaipur]

// This solution is also considered valid.

// BFS: [Mussoorie, Dehradun, Chandigarh, , Delhi, Jaipur, Agra]

// We implement Breadth-First Search (BFS) using a queue data structure

// Start by choosing a source node (the node from where you want to begin the traversal).
// Create a visited array or set to keep track of nodes you have already visited.
// Add the starting node to the queue and mark it as visited.
// While the queue is not empty:
// Remove (poll) one node from the front of the queue.
// Check all adjacent (neighbouring) nodes of this node.
// For each adjacent node:
// If it is not visited, then:
// Mark it as visited.
// Add it to the queue.
// Repeat this process until the queue becomes empty.
// Problem Statement:
// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

//         class Node {
//             public int val;
//             public List neighbors;
//         }

// Test case format:

// For simplicity, each node’s value is the same as the node’s index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

// Example 1:

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]

// Output: [[2,4],[1,3],[2,4],[1,3]]

// Explanation: There are 4 nodes in the graph. 1st node (val = 1)’s neighbors are 2nd node (val = 2) and 4th node (val = 4). 2nd node (val = 2)’s neighbors are 1st node (val = 1) and 3rd node (val = 3). 3rd node (val = 3)’s neighbors are 2nd node (val = 2) and 4th node (val = 4). 4th node (val = 4)’s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// Example 2:

// Input: adjList = [[]]

// Output: [[]]

// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

// Example 3:
// Input: adjList = []

// Output: []

// Explanation: This an empty graph, it does not have any nodes.

// Constraints
// The number of nodes in the graph is in the range [0, 100].
// 1 <= Node.val <= 100
// Node.val is unique for each node.
// There are no repeated edges and no self-loops in the graph.
// The Graph is connected and all nodes can be visited starting from the given node.

// Approach
// If the input node is NULL → return NULL.
// Create the clone of the starting node and insert it into the map.
// Use a queue (BFS):
// Push the original root node.
// While the queue is not empty:
// Pop one node curr.
// For each neighbor n of curr:
// If n is not cloned yet:
// Create a clone of n.
// Add it to the map.
// Push n into the queue.
// Add the cloned neighbor to the neighbor list of the current cloned node.
// Return the cloned root from the map.

var cloneGraph = function (root) {
  // Edge case: empty graph, nothing to clone
  if (!root) return null;

  // BFS queue holds ORIGINAL nodes whose neighbors we still need to process
  let q = [root];

  // Map: original node -> its clone
  // Doubles as the "visited" set, so we never clone a node twice
  // and can always find the clone for any original node
  let visited = new Map();

  // Create the clone of the starting node and register it
  let cloneRoot = new Node(root.val);
  visited.set(root, cloneRoot);

  while (q.length) {
    // Take the next original node to process
    let curr = q.shift();

    // Clone of curr (always exists, because a node is only queued
    // right after its clone is created)
    let cloneCurr = visited.get(curr);

    // Go through every neighbor of the ORIGINAL node
    for (let neighbor of curr.neighbors) {
      // First time seeing this neighbor?
      if (!visited.has(neighbor)) {
        // Create its clone (without neighbors for now)
        visited.set(neighbor, new Node(neighbor.val));
        // Queue the original so its own neighbors get processed later
        q.push(neighbor);
      }

      // Runs for EVERY edge, visited or not:
      // connect clone of curr -> clone of neighbor
      // (never point a clone at an original node)
      cloneCurr.neighbors.push(visited.get(neighbor));
    }
  }

  // The clone of the starting node gives access to the whole cloned graph
  return cloneRoot;
};
