// 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function (root) {
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return isMirror(root.left, root.right);
};

// Approach: Bottom Up
// Use a helper function isMirror(left, right) to compare two nodes.
// The tree is symmetric if:
// Both left and right subtrees are null → return true.
// Only one is null → return false.
// Their values match and:
// Left’s left subtree mirrors Right’s right subtree.
// Left’s right subtree mirrors Right’s left subtree.
// Start the comparison with root.left and root.right.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
