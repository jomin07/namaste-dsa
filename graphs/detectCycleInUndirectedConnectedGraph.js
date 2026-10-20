// Detect Cycle in Undirected Connected Graph
// Example: 1

// True

// Example: 2

// False

// Example: 3

// True

// Adjacent Lists
// 0: 1
// 1: 4, 2
// 2: 1, 3
// 3: 2, 4
// 4: 1, 3
// Visited nodes: [0, 1, 4, 3, 2] So, It's not possible. Hence It is not a cycle.

// Find Cycle ?
// Note: To keep a track of parent of each node.

// Parent:
// Start from Node ‘A’

// A: Null
// B: A
// C: A
// D: C
// E: D
// H: E
// G: E
// F: H
// A cycle exists if:
//             visited[node] == true AND node != parent

function hasCycle(edges) {
  let graph = {};
  for (let [x, y] of edges) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }
  graph[x].push(y);
  graph[y].push(x);

  let visited = new Set();
  let dfs = (curr, parent) => {
    visited.add(curr);
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        return dfs(neighbor, curr);
      } else if (neighbor != parent) {
        //cycle exists
        return true;
      }
    }
    return false;
  };
  return dfs(0, -1);
}

console.log(
  hasCycle([
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
);
// true -> 0-1-2-0 forms a cycle

console.log(
  hasCycle([
    [0, 1],
    [1, 2],
    [2, 3],
  ]),
);
// false -> no back edge

console.log(
  hasCycle([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
  ]),
);
// true -> 1-2-3-4-1 forms a cycle
