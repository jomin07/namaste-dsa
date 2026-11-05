function floydWarshall(V, edges) {
  // Initial dist array
  const dist = Array.from({ length: V }, (_, i) =>
    Array.from({ length: V }, (_, j) => (i === j ? 0 : Infinity)),
  );

  // Fill initial distances from edges
  for (let [i, j, w] of edges) {
    dist[i][j] = w;
  }

  // Floyd-Warshall algorithm
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
      }
    }
  }

  return dist;
}

const edges = [
  [0, 1, 2],
  [1, 0, 7],
  [1, 2, 3],
  [2, 1, 8],
  [2, 3, 2],
  [3, 0, 1],
  [3, 1, 5],
];

console.log(floydWarshall(4, edges));
// Time Complexity: O(V3)
// Space Complexity: O(V2)
