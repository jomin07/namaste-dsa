// 1584. Min Cost to Connect All Points

// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

// Example 1:

// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation:

// We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.
// Example 2:

// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18

var minCostConnectPoints = function (points) {
  let n = points.length;
  let pq = new MinPriorityQueue((x) => x[0]);

  let minCost = 0;
  let visited = new Array(n).fill(false);
  pq.push([0, 0]);
  let edgesUsed = 0;

  while (edgesUsed < n) {
    let [nodeDist, node] = pq.pop();
    if (visited[node]) continue;
    visited[node] = true;
    minCost = minCost + nodeDist;
    edgesUsed++;

    for (let nextNode = 0; nextNode < n; ++nextNode) {
      if (!visited[nextNode]) {
        let nextDist =
          Math.abs(points[node][0] - points[nextNode][0]) +
          Math.abs(points[node][1] - points[nextNode][1]);

        pq.push([nextDist, nextNode]);
      }
    }
  }
  return minCost;
};

// Approach
// We want to connect all points with the minimum total cost. The cost between two points is their Manhattan distance. This is essentially a Minimum Spanning Tree (MST) problem.
// Start from any point (here, point 0).
// Maintain a priority queue of edges [distance, node] to pick the smallest edge each time.
// Keep track of visited points to avoid cycles.
// Each time we pick the smallest edge to an unvisited point, add its distance to minCost and mark the point visited.
// Push all edges from the newly visited point to unvisited points into the priority queue.
// Repeat until all points are visited.
// The sum of all chosen edge distances (minCost).
// Time & Space Complexity
// Time Complexity: O(n2log n)

// Space Complexity: O(n2)

// Dry Run
// Input: points = [[0,0],[2,2],[3,10],[5,2]]

//     Step 0: Start Function: minCostConnectPoints(points)

//     Step 1: Initialize Variables n = 4 visited = [false, false, false, false] minCost = 0 edgesUsed = 0 pq = [[0, 0]] // [distance, node]

//     Step 2: Start while loop (edgesUsed < n) Pop pq → [0, 0] node = 0, nodeDist = 0 visited[0] = true minCost = 0 + 0 = 0
//     edgesUsed = 0 + 1 = 1
//     Explore neighbors of node 0: - nextNode = 1 → distance = |0-2| + |0-2| = 4 → push [4,1] - nextNode = 2 → distance = |0-3| + |0-10| = 13 → push [13,2] - nextNode = 3 → distance = |0-5| + |0-2| = 7 → push [7,3] pq = [[4,1],[13,2],[7,3]]

//     Step 3: Next iteration Pop pq → [4, 1] node = 1,
//     nodeDist = 4 visited[1] = true minCost = 0 + 4 = 4
//     edgesUsed = 1 + 1 = 2
//     Explore neighbors of node 1: - nextNode = 2 → distance = |2-3| + |2-10| = 9 → push [9,2] - nextNode = 3 → distance = |2-5| + |2-2| = 3 → push [3,3] pq = [[3,3],[7,3],[13,2],[9,2]]

//     Step 4: Next iteration Pop pq → [3,3] node = 3,
//     nodeDist = 3 visited[3] = true minCost = 4 + 3 = 7
//     edgesUsed = 2 + 1 = 3
//     Explore neighbors of node 3: - nextNode = 2 → distance = |5-3| + |2-10| = 10 → push [10,2] pq = [[7,3],[9,2],[13,2],[10,2]]

//     Step 5: Next iteration Pop pq → [7,3]
//     node 3 already visited → skip Pop pq → [9,2] node = 2,
//     nodeDist = 9 visited[2] = true minCost = 7 + 9 = 16
//     edgesUsed = 3 + 1 = 4
//     All nodes visited → exit while loop

//     Step 6: Return Result minCost = 16
// Output: 16
