// Topological Sort
// It is a linear ordering of nodes of a DAG(Directed Acyclic Graph) such that for every directed edge (u -> v), node u comes before v.

// Example
// An adjacency list represents a graph.

//         const adj = [
//             [],          // 0
//             [],          // 1
//             [3],         // 2 -> 3
//             [1],         // 3 -> 1
//             [0, 1],      // 4 -> 0, 1
//             [0, 2]       // 5 -> 0, 2
//         ]

function topologicalSortDFS(n, graph) {
  let ans = [];
  let visited = new Set();

  function dfs(curr) {
    visited.add(curr);

    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    ans.push(curr);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }

  return ans.reverse();
}

const n = 6;
const adj = [
  [], // 0
  [], // 1
  [3], // 2 -> 3
  [1], // 3 -> 1
  [0, 1], // 4 -> 0, 1
  [0, 2], // 5 -> 0, 2
];

//   5   4   2   3   1   0
//   |   |   |   ^   ^   ^
//   |   |   +---+   |   |   2 -> 3
//   |   |           |   |   3 -> 1
//   |   +-----------+---+   4 -> 1, 4 -> 0
//   +---------------------  5 -> 2, 5 -> 0

console.log(topologicalSortDFS(n, adj)); // [ 5, 4, 2, 3, 1, 0 ]

// Reversing is needed because a node is pushed to res only after all the nodes it points to are finished. So every node lands in the list after its dependents, which is the opposite of what we want.

// Simple example
// 0 -> 1 -> 2

// adj = [[1], [2], []]

// Trace of dfs(0):

// dfs(0)
//   dfs(1)
//     dfs(2)
//       no neighbors
//       push 2     // res = [2]
//     push 1       // res = [2, 1]
//   push 0         // res = [2, 1, 0]

// res = [2, 1, 0]

// Why that is wrong

// A topological order needs u before v for every edge u -> v.

// Edge 0 -> 1: in [2, 1, 0], 1 comes before 0. Wrong.
// Edge 1 -> 2: 2 comes before 1. Wrong.

// The list is exactly backwards: the last node of the chain is first.

// The rule behind it

// In DFS, a node can only be pushed after everything reachable from it has been pushed. So for any edge u -> v, v is always pushed before u. That means v appears before u in res, the opposite of what a topological order needs.

// Reversing flips every one of those pairs:

// [2, 1, 0].reverse()  ->  [0, 1, 2]

// Now 0 is before 1 and 1 is before 2, so every edge goes left to right.

// Alternative to reversing

// If you don’t want to call .reverse(), you can use res.unshift(curr) instead of res.push(curr). It inserts at the front, so the list is built in the correct order directly. unshift is O(n) per call, though, so push plus a single reverse() at the end is faster.
