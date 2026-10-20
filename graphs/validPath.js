// 1971. Find if Path Exists in Graph

// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Example 1:

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
// Example 2:

// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.

var validPath = function (n, edges, source, destination) {
  let map = {};
  for (let [x, y] of edges) {
    if (!map[x]) map[x] = [];
    if (!map[y]) map[y] = [];

    map[x].push(y);
    map[y].push(x);
  }

  let visited = new Set();
  let q = [source];
  while (q.length > 0) {
    let curr = q.shift();
    if (curr === destination) return true;
    for (let neighbor of map[curr]) {
      if (!visited.has(neighbor)) {
        q.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
  return false;
};

// Approach - Using BFS
// Build the Graph, Convert the edges list into an adjacency list map so you can quickly find all neighbors of any node.
// Initialize BFS, Start a queue with the source node and mark it as visited.
// Traverse Level-by-Level:
// Repeatedly take a node from the queue.
// If it is the destination, return true.
// Otherwise, push all its unvisited neighbors into the queue and mark them visited.
// If BFS Ends:
// If the queue becomes empty and destination is never found, return false.

//Using DFS
var validPath = function (n, edges, source, destination) {
  let map = {};
  for (let [x, y] of edges) {
    if (!map[x]) map[x] = [];
    if (!map[y]) map[y] = [];

    map[x].push(y);
    map[y].push(x);
  }

  let visited = new Set();
  let stack = [source];
  while (stack.length > 0) {
    let curr = stack.pop();
    if (curr === destination) return true;
    for (let neighbor of map[curr]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
  return false;
};
