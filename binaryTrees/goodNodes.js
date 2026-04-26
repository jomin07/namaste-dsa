// 1448. Count Good Nodes in Binary Tree

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

var goodNodes = function (root) {
  let ans = 0;
  function traversal(curr, maxSoFar) {
    if (!curr) return 0;
    if (curr.val >= maxSoFar) {
      ans++;
      maxSoFar = curr.val;
    }
    traversal(curr.left, maxSoFar);
    traversal(curr.right, maxSoFar);
  }
  traversal(root, -Infinity);
  return ans;
};

// Approach
// Use DFS traversal starting from the root.
// Keep track of the maximum value seen so far (maxSeenSoFar) along the path.
// For each node:
// If node.val >= maxSeenSoFar, it’s a good node → increment count.
// Update maxSeenSoFar to Math.max(curr.val, maxSeenSoFar).
// Recurse for left and right children.
// Return the total count of good nodes.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n) recursion stack space (h=tree height)
