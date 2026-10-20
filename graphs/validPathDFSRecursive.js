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
  function dfs(curr) {
    if (curr === destination) return true;
    for (let neighbor of map[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        if (dfs(neighbor)) {
          return true;
        }
      }
    }
    return false;
  }

  return dfs(source);
};

// Approach
// Build the Graph, Convert edges into a graph using a map where each node stores its neighbors.
// Use DFS to explore, Start DFS from source.
// Track visited nodes: Maintain a visited set to avoid revisiting nodes and infinite loops.
// DFS logic
// If current node is the destination, return true.
// Visit all unvisited neighbors recursively.
// If any recursive call returns true, propagate it upward.
// If DFS ends with no match Return false.
// Dry Run
// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5

//         Graph Structure (Adjacency List): 0 → [1, 2] 1 → [0] 2 → [0] 3 → [5, 4] 5 → [3, 4] 4 → [5, 3]
//         Initialize: visited = { } Start DFS: dfs(0) • curr = 0 • mark visited = {0} • neighbors = [1, 2]
//         Explore neighbor 1: dfs(1) • curr = 1 • mark visited = {0,1} • neighbors = [0] • 0 already visited →
//         return false Explore neighbor 2: dfs(2) • curr = 2 • mark visited = {0,1,2} • neighbors = [0] • 0 already visited →
//         return false All neighbors of 0 explored → no path found

//         Final Answer: false
// Output: false
