// 797. All Paths From Source to Target
// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example 1:

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
// Example 2:

// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

var allPathsSourceTarget = function (graph) {
  if (graph.length < 2) return graph;
  let start = 0;
  let end = graph.length - 1;
  let res = [];

  function dfs(curr, path) {
    if (curr === end) {
      res.push([...path]);
      return;
    }

    for (let neighbor of graph[curr]) {
      path.push(neighbor);
      dfs(neighbor, path);
      path.pop();
    }
  }

  dfs(start, [start]);
  return res;
};

// Approach
// Treat the graph as a directed adjacency list.
// Start DFS from node 0 and aim to reach the last node (n − 1).
// Maintain a current path list to track the nodes visited on the current route.
// Whenever we reach the target node, store a copy of the current path in the result.
// For each neighbor of the current node,
// add the neighbor to the path,
// recursively explore it,
// then backtrack by removing the neighbor after returning.
