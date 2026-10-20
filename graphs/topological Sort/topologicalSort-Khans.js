// Kahn’s Algorithm (BFS) (Topological Sort) [DAG]
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

// Indegree
// Node 0 → indegree 2
// Node 1 → indegree 2
// Node 2 → indegree 1
// Node 3 → indegree 1
// Node 4 → indegree 0
// Node 5 → indegree 0

function topologicalSortBFS(n, graph) {
  let indegree = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let node of graph[i]) {
      indegree[node]++;
    }
  }
  let q = [];
  let ans = [];
  //   Push indegree = 0 elements in queue
  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }

  //   while(q.length) take out curr element from queue and explore neighbors, reduce indegree

  while (q.length) {
    let curr = q.shift();
    ans.push(curr);
    for (let neighbor of graph[curr]) {
      indegree[neighbor]--;
      if (indegree[neighbor] == 0) {
        q.push(neighbor);
      }
    }
  }

  if (ans.length != n) {
    console.log("Graph has a cycle, and topo sort is not possible.");
    return [];
  }
  return ans;
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
console.log(topologicalSortBFS(n, adj));
