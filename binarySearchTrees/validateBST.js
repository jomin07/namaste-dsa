// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

var isValidBST = function (root) {
  function isBST(curr, low, high) {
    if (!curr) return true;
    if (
      (low !== null && low >= curr.val) ||
      (high !== null && high <= curr.val)
    ) {
      return false;
    }
    return isBST(curr.left, low, curr.val) && isBST(curr.right, curr.val, high);
  }

  return isBST(root, null, null);
};

// Approach
// Base Case: If the current node is null, return true.
// Violation Check:
// If curr.val ≤ lo or ≥ hi, it violates BST rules, so return false.
// Recursive Check:
// Left subtree must be in range (lo, curr.val)
// Right subtree must be in range (curr.val, hi)
// Return true only if both left and right subtrees are valid.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(h)(h=tree height)
