// 1976. Number of Ways to Arrive at Destination

// You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.

// You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.

// Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 109 + 7.

// Example 1:

// Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
// Output: 4
// Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
// The four ways to get there in 7 minutes are:
// - 0 ➝ 6
// - 0 ➝ 4 ➝ 6
// - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
// - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
// Example 2:

// Input: n = 2, roads = [[1,0,10]]
// Output: 1
// Explanation: There is only one way to go from intersection 0 to intersection 1, and it takes 10 minutes.

var countPaths = function (n, roads) {
  const MOD = 1e9 + 7;
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const pq = new MinPriorityQueue((x) => x[0]);
  const minW = new Array(n).fill(Infinity);
  const pathCount = new Array(n).fill(0);

  pq.push([0, 0]);
  minW[0] = 0;
  pathCount[0] = 1;

  while (!pq.isEmpty()) {
    const [currW, curr] = pq.pop();
    if (currW > minW[curr]) continue; // optional: skip stale entries

    // Dijkstra's Algorithm
    for (const [neighbor, neighborW] of graph[curr]) {
      const newW = currW + neighborW;
      // new shortest path
      if (newW < minW[neighbor]) {
        minW[neighbor] = newW;
        pathCount[neighbor] = pathCount[curr];
        pq.push([newW, neighbor]);
        // alternative shortest path
      } else if (newW === minW[neighbor]) {
        pathCount[neighbor] = (pathCount[neighbor] + pathCount[curr]) % MOD;
      }
    }
  }

  return pathCount[n - 1];
};

// Approach
// Build an adjacency list from the given roads.
// Use Dijkstra’s algorithm to find the shortest distance from node 0 to all nodes.
// Along with distance (minW), maintain pathCount[i] = number of shortest paths to node i.
// Initialize:
// minW[0] = 0, pathCount[0] = 1
// Min-heap (priority queue) with [0, 0]
// For each extracted node:
// If a shorter path to a neighbor is found, update its distance and copy the path count.
// If an equal shortest path is found, add the path count (mod 109 + 7).
// Final answer is pathCount[n-1], the number of shortest paths to the destination.
// Time & Space Complexity
// Time Complexity: O((V + E) log V)

// Here, V = n (number of nodes), E = roads.length

// Space Complexity: O(V + E)

// Dry Run
// Input: n = 3, roads = [[0,1,1],[1,2,1],[0,2,2]]

// Step 0: Start Function countPaths(3, roads)

// Step 1: Build Graph (Adjacency List)
// graph = [ [[1, 1], [2, 2]], [[0, 1], [2, 1]], [[1, 1], [0, 2]] ]

// Step 2: Initialize Variables minW = [Infinity, Infinity, Infinity]
// pathCount = [0, 0, 0] Priority Queue (pq): pq = [[0, 0]] minW[0] = 0 pathCount[0] = 1

// Step 3: First Pop from Priority Queue [currW, curr] = [0, 0]

// Step 4: Explore Neighbors of Node 0 Neighbor = 1 Edge Weight = 1

// newW = 0 + 1 = 1 1 < Infinity → update shortest path minW = [0, 1, Infinity]
// pathCount = [1, 1, 0] pq.push([1, 1])
// Neighbor = 2 Edge Weight = 2
// newW = 0 + 2 = 2 2 < Infinity → update shortest path minW = [0, 1, 2]
// pathCount = [1, 1, 1] pq.push([2, 2])

// Step 5: Second Pop from Priority Queue [currW, curr] = [1, 1]

// Step 6: Explore Neighbors of Node 1 Neighbor = 0 Edge Weight = 1

// newW = 1 + 1 = 2 2 > minW[0] → ignore this path Neighbor = 2
// Edge Weight = 1 newW = 1 + 1 = 2 newW == minW[2]
// Alternate shortest path found pathCount[2] = pathCount[1] + pathCount[2] pathCount[2] = 1 + 1 = 2

// Step 7: Third Pop from Priority Queue [currW, curr] = [2, 2]

// Step 8: Explore Neighbors of Node 2 Neighbor = 1
// Edge Weight = 1 newW = 2 + 1 = 3 3 > minW[1] → ignore Neighbor = 0
// Edge Weight = 2 newW = 2 + 2 = 4 4 > minW[0] → ignore

// Step 9: End of Dijkstra Loop Priority Queue is empty Step 10:

// Final State minW = [0, 1, 2] pathCount = [1, 1, 2]

// Step 11: Return Result pathCount[n - 1] = pathCount[2] = 2

// Output: 2

// Time complexity: O((V + E) log V), where V = n (nodes) and E = roads.length (edges).

// Building the graph: O(E). Each road is added twice, once per direction.
// Dijkstra loop: each node is popped and processed at most once in effect, and each edge is looked at twice (once from each endpoint), so the edge scans total O(E).
// Priority queue pushes: a push happens only when a strictly shorter path is found, so at most one per edge direction, which is up to 2E pushes. Each push and pop costs O(log(queue size)). The queue size is at most 2E, and log(2E) is O(log E), which is O(log V) since E ≤ V².
// Total: O(E log V) for the heap work, plus O(V) for popping each node. Written together, O((V + E) log V).
// Without the stale-entry check, the stale pops still happen but their inner loops do no useful work. The bound is the same, though the check saves real time in practice. With the check, each node’s neighbor loop runs only for the entry with the final distance, so the edge scans really are O(E).

// Space complexity: O(V + E)

// graph (adjacency list): O(V + E), since it holds 2E edge entries across V lists.
// minW and pathCount: O(V) each.
// Priority queue: up to O(E) entries at once, because duplicates for the same node can pile up.
// Total: O(V + E).
