var levelOrder = function (root) {
  if (!root) return [];
  let res = [];

  function traversal(curr, level) {
    if (!res[level]) res[level] = [];

    res[level].push(curr.val);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }

  traversal(root, 0);
  return res;
};

// Approach
// Use Depth-First Search (DFS) with recursion to traverse the binary tree.
// Maintain an ans array where each index represents a level of the tree.
// At each node:
// If the current level doesn't exist in ans, create a new sub-array.
// Push the current node's value to the corresponding level in ans.
// Recursively call the function for the left and right children, increasing the level by 1.
// Finally, return the ans array containing level-wise node values.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
