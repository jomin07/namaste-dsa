// 1319. Number of Operations to Make Network Connected

// There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.

// You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.

// Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

// Example 1:

// Input: n = 4, connections = [[0,1],[0,2],[1,2]]
// Output: 1
// Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.

// Example 2:

// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
// Output: 2

// Example 3:

// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
// Output: -1
// Explanation: There are not enough cables.

var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;
  let graph = Array.from({ length: n }, () => []);
  for (let [from, to] of connections) {
    graph[from].push(to);
    graph[to].push(from);
  }

  let noOfComponents = 0;
  let visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      noOfComponents++;
      bfs(i, visited, graph);
    }
  }
  return noOfComponents - 1;
};

function bfs(src, visited, graph) {
  let q = [src];
  while (q.length) {
    let curr = q.shift();
    for (let neighbor of graph[curr]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
      }
    }
  }
}

// Approach:
// To connect all n computers, at least n - 1 connections are required. If not, return -1.
// Build an undirected graph using the given connections.
// Use BFS to traverse the graph and count the number of connected components.
// Each BFS call marks all nodes in one component as visited.
// If there are k connected components, we need k - 1 extra connections to connect them all.
// Return noOfComponents - 1.
// Time & Space Complexity:
// Time Complexity: O(V + E)

// Space Complexity: O(V + E)

// Dry Run
// Input: n = 5, connections = [[0,1],[0,2],[3,4]]

// Step 0: Start Function: makeConnected(5, connections)

// connections.length = 3
// n - 1 = 4
// connections.length < n - 1 → false (so continue)

// Step 1: Build Graph (Adjacency List)

// graph = [
//   [1, 2],   // 0
//   [0],      // 1
//   [0],      // 2
//   [4],      // 3
//   [3]       // 4
// ]

// visited = [false, false, false, false, false]
// noOfComponents = 0

// Step 2: Traverse Nodes (for loop)

// i = 0:
// - visited[0] = false
// - noOfComponents = 1
// - Call bfs(0)

// BFS starting from node 0:
// Queue = [0]
// visited = [true, false, false, false, false]

// Pop 0:
// - Neighbor 1 → mark visited, push to queue
// - Neighbor 2 → mark visited, push to queue
// Queue = [1, 2]
// visited = [true, true, true, false, false]

// Pop 1:
// - Neighbor 0 already visited

// Pop 2:
// - Neighbor 0 already visited

// BFS ends for component starting at 0

// i = 1:
// - visited[1] = true → skip

// i = 2:
// - visited[2] = true → skip

// i = 3:
// - visited[3] = false
// - noOfComponents = 2
// - Call bfs(3)

// BFS starting from node 3:
// Queue = [3]
// visited = [true, true, true, true, false]

// Pop 3:
// - Neighbor 4 → mark visited, push to queue
// Queue = [4]
// visited = [true, true, true, true, true]

// Pop 4:
// - Neighbor 3 already visited

// BFS ends for component starting at 3

// i = 4:
// - visited[4] = true → skip

// Step 3: End

// Total Components = 2
// Required Operations = noOfComponents - 1 = 2 - 1 = 1

// Output: 1
