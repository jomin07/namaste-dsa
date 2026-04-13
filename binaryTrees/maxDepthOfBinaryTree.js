// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// top down approach

var maxDepth = function (root) {
  if (!root) return 0;
  let maxD = 0;

  function traversal(curr, depth) {
    maxD = Math.max(maxD, depth);
    curr.left && traversal(curr.left, depth + 1);
    curr.right && traversal(curr.right, depth + 1);
  }
  traversal(root, 1);
  return maxD;
};

// Approach 1: (Top-Down)
// Start with the root node at depth 1.
// Traverse left and right children, increasing depth at each level.
// Keep track of the maximum depth encountered during traversal.
// Edge Case: If tree is empty (root is null), return 0.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)

//bottom-up approach

var maxDepth = function (root) {
  if (!root) return 0;

  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);

  return 1 + Math.max(leftMax, rightMax);
};

// Approach 2: Bottom Up
// Base Case: If the node is null, return 0 — it means we've reached beyond a leaf node.
// Recursive Case:
// Recursively find the max depth of the left subtree.
// Recursively find the max depth of the right subtree.
// Return 1 + the maximum of left and right subtree depths.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
