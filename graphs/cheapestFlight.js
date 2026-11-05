// 787. Cheapest Flights Within K Stops

// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

// Example 1:

// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
// Example 2:

// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
// Example 3:

// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The graph is shown above.
// The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.

var findCheapestPrice = function (n, flights, src, dst, k) {
  // Build adjacency list: graph[city] = [[destination, price], ...]
  let graph = Array.from({ length: n }, () => []);
  for (let [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  // minPrice[i] = cheapest cost found so far to reach city i.
  // Not a "visited" array: a city can be revisited if we reach it cheaper.
  let minPrice = new Array(n).fill(Infinity);
  minPrice[src] = 0; // Reaching the source costs nothing

  // Each queue entry is a state: [current city, cost of THIS path, flights used so far].
  // BFS processes states level by level, so paths with fewer flights come first.
  let q = [[src, 0, 0]];

  while (q.length) {
    // Take the oldest state (FIFO). Note: shift() is O(n); use an index pointer for big inputs.
    let [curr, currPrice, stops] = q.shift();

    // We've already used more flights than allowed (k stops = k + 1 flights),
    // so this path can't be extended any further.
    if (stops > k) continue;

    // Try every flight leaving the current city
    for (let [neighbor, neighborPrice] of graph[curr]) {
      // Cost of reaching the neighbor via this path
      let newPrice = currPrice + neighborPrice;

      // Only continue if this path is strictly cheaper than any found before.
      // If not, it's dominated: it uses at least as many flights AND costs at least as much.
      // This check also prevents infinite loops in graphs with cycles.
      if (newPrice < minPrice[neighbor]) {
        minPrice[neighbor] = newPrice;

        // Save this path's own state to expand later:
        // the neighbor, the cost to get there, and one more flight used.
        q.push([neighbor, newPrice, stops + 1]);
      }
    }
  }

  // Infinity means dst was never reached within the allowed stops
  return minPrice[dst] !== Infinity ? minPrice[dst] : -1;
};

// Approach
// Build an adjacency list from the flights array where each city stores its neighbors and travel cost.
// Use a BFS-style queue that keeps track of (current city, total cost, number of stops).
// Maintain a minPrice array to store the cheapest cost found so far to reach each city.
// Start from the source city with cost 0 and 0 stops.
// While processing the queue:
// Skip paths that exceed k stops.
// For each neighbor, update the cost if a cheaper price is found and push it into the queue with increased stops.
// Finally, return the minimum cost to reach dst; if unreachable within k stops, return -1.
// Time & Space Complexity
// Time Complexity: O(E x K)

// Space Complexity: O(N + E)

// Dry Run
// Input: n = 4, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1

// Step 0: Start Function: findCheapestPrice(4, flights, 0, 2, 1)

// Step 1: Build Graph (Adjacency List)

// graph = [
//   [[1, 100], [2, 500]],   // 0
//   [[2, 100]],             // 1
//   [],                     // 2
//   []                      // 3
// ]

// Step 2: Initialize minPrice array

// minPrice = [0, Infinity, Infinity, Infinity]

// Step 3: Initialize Queue

// q = [[0, 0, 0]]   // [city, cost, stops]

// --------------------------------------------------

// Step 4: Start BFS Traversal

// Dequeue → [0, 0, 0]
// stops = 0 (≤ k, continue)

// Explore neighbors of city 0:

// 1) Neighbor = 1, price = 100
//    newPrice = 0 + 100 = 100
//    100 < Infinity → update

//    minPrice = [0, 100, Infinity, Infinity]
//    q = [[1, 100, 1]]

// 2) Neighbor = 2, price = 500
//    newPrice = 0 + 500 = 500
//    500 < Infinity → update

//    minPrice = [0, 100, 500, Infinity]
//    q = [[1, 100, 1], [2, 500, 1]]

// --------------------------------------------------

// Dequeue → [1, 100, 1]
// stops = 1 (≤ k, continue)

// Explore neighbors of city 1:

// 1) Neighbor = 2, price = 100
//    newPrice = 100 + 100 = 200
//    200 < 500 → update

//    minPrice = [0, 100, 200, Infinity]
//    q = [[2, 500, 1], [2, 200, 2]]

// --------------------------------------------------

// Dequeue → [2, 500, 1]
// stops = 1 (≤ k, continue)

// City 2 has no neighbors → nothing happens

// --------------------------------------------------

// Dequeue → [2, 200, 2]
// stops = 2 (> k) → skip this path

// --------------------------------------------------

// Step 5: End BFS

// minPrice = [0, 100, 200, Infinity]

// Step 6: Return Result

// minPrice[dst] = minPrice[2] = 200
