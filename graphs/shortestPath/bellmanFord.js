function bellmanFord(edges, V, src) {
  const dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  // Relax edges V-1 times
  for (let i = 0; i < V - 1; i++) {
    let updated = false;

    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }

    // Early stopping if no update happened
    if (!updated) break;
  }

  // Check for negative weight cycle
  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      console.log("Negative Weight cycle Detected");
      return null;
    }
  }

  return dist;
}

// Edge list: [u, v, w]
const edges = [
  [0, 1, 6],
  [0, 2, 5],
  [0, 3, 5],
  [1, 4, -1],
  [2, 1, -2],
  [2, 4, 1],
  [3, 2, -2],
  [3, 5, -1],
  [4, 6, 3],
  [5, 6, 3],
];

// Example for negative cycle case
/*
const edges = [
    [0, 1, 4],
    [1, 2, -1],
    [2, 3, -2],
    [3, 1, 0]
];
*/

const V = 7;
console.log(bellmanFord(edges, V, 0));

// Time Complexity: O(V x E) = O(n2)
// If we assume: V = n and E = n

// Space Complexity: O(V)
