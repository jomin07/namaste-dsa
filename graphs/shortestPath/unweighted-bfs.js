function shortestDistance(graph, src) {
  let n = graph.length;
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  let q = [src];
  while (q.length) {
    let curr = q.shift();
    for (let neighbor of graph[curr]) {
      if (dist[neighbor] == Infinity) {
        dist[neighbor] = dist[curr] + 1;
        q.push(neighbor);
      }
    }
  }
  return dist;
}

const graph = [
  [1, 2], // 0
  [3], // 1
  [4], // 2
  [5], // 3
  [3], // 4
  [], // 5
];
console.log(shortestDistance(graph, 0)); //[ 0, 1, 1, 2, 2, 3 ]

// Shortest Path [Unweighted Graph]

// Here, We have to do ‘Level Order Traversal’

// Time Complexity: O(V + E)
// Space Complexity: O(E)
// Here: V = Vertices, E = Edges
// Note:
// If you have an undirected graph, you can represent it as a directed graph by adding edges in both directions.

// To get the actual path
// Version 1: Store the full path in the queue (simple)

function shortestPathSimple(graph, src, dest) {
  // Tracks nodes we've already discovered so we never queue a node twice
  const visited = new Set([src]);

  // Each queue entry is a COMPLETE path from src to some node
  // e.g. [[0]] -> later [[0, 1], [0, 2]] -> and so on
  const q = [[src]];

  while (q.length) {
    // Take the oldest path in the queue (FIFO = BFS order)
    const path = q.shift();

    // The node we're currently standing on is the last one in the path
    const curr = path[path.length - 1];

    // BFS reaches nodes in order of distance, so the first time we
    // hit dest, this path is guaranteed to be a shortest one
    if (curr === dest) return path;

    for (const neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        // Mark on discovery (not on pop) so no other path can queue it again
        visited.add(neighbor);

        // Copy the current path and extend it with the neighbor
        q.push([...path, neighbor]);
      }
    }
  }

  // Queue emptied without reaching dest -> no path exists
  return [];
}

// Pros: very short, easy to explain, no reversing step.
// Cons: copying the path for every node costs extra time and memory (up to O(V²) in the worst case).

// Version 2: Parent array (efficient)

function shortestPathParent(graph, src, dest) {
  const n = graph.length;

  // parent[i] = the node we came from when we first discovered i
  // -1 means "not discovered yet" (and stays -1 for src, which has no parent)
  const parent = new Array(n).fill(-1);

  // Tracks discovered nodes. We need this separate from parent
  // because src has parent -1 but is still visited.
  const visited = new Array(n).fill(false);
  visited[src] = true;

  const q = [src];
  let head = 0; // pointer to the front of the queue (avoids slow q.shift())

  while (head < q.length) {
    const curr = q[head++]; // dequeue in O(1)

    // Found the destination, no need to explore further
    if (curr === dest) break;

    for (const neighbor of graph[curr]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;

        // Remember how we got here. This is the key step for path recovery.
        parent[neighbor] = curr;

        q.push(neighbor);
      }
    }
  }

  // If dest was never discovered (and isn't src itself), there's no path
  if (!visited[dest]) return [];

  // Rebuild the path by walking backwards: dest -> ... -> src
  const path = [];
  for (let node = dest; node !== -1; node = parent[node]) {
    path.push(node);
  }

  // We collected it backwards, so flip it to get src -> ... -> dest
  return path.reverse();
}

// Pros: O(V + E) time and O(V) memory, the standard approach for large graphs.
// Cons: two extra steps (store parents, then reconstruct and reverse).

const graph = [
  [1, 2], // 0
  [3], // 1
  [4], // 2
  [5], // 3
  [3], // 4
  [], // 5
];

console.log(shortestPathSimple(graph, 0, 5)); // [0, 1, 3, 5]
console.log(shortestPathParent(graph, 0, 5)); // [0, 1, 3, 5]

console.log(shortestPathSimple(graph, 0, 4)); // [0, 2, 4]
console.log(shortestPathParent(graph, 0, 4)); // [0, 2, 4]

console.log(shortestPathSimple(graph, 5, 0)); // [] (unreachable)
console.log(shortestPathParent(graph, 5, 0)); // [] (unreachable)

console.log(shortestPathParent(graph, 0, 0)); // [0] (src === dest)
