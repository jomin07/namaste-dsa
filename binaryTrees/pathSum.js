// 112. Path Sum
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

//top down

var hasPathSum = function (root, targetSum) {
  function traversal(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) {
      return sum + root.val === targetSum;
    }

    sum += root.val;
    return traversal(root.left, sum) || traversal(root.right, sum);
  }
  return traversal(root, 0);
};

// Approach 1: (Top-Down)
// At each node, we add the current node's value to the running sum (currSum).
// If we reach a leaf node and the sum equals the targetSum, we update ans = true.
// We recursively check both left and right subtrees.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)

// Approach 2: Bottom Up
// Base Case:
// If the node is null, return false.
// If it’s a leaf node (no left or right child), check if node.val === targetSum.
// Recursive Case:
// Subtract the current node's value from targetSum.
// Recursively check left and right subtrees with the updated sum.
// Return:
// Return true if any path in left or right subtree matches the condition.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
