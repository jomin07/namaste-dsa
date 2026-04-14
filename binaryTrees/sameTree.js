// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

// Approach
// Base Case:
// If both nodes are null, they are the same – return true.
// If one is null and the other is not – return false.
// Recursive Case:
// Check if current nodes have the same value.
// Recursively check their left subtrees and right subtrees.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
