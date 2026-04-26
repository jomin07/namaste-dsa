// 572. Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

var isSubtree = function (root, subRoot) {
  let mainHash = serialize(root);
  let subHash = serialize(subRoot);

  return mainHash.includes(subHash);
};

function serialize(root) {
  let hash = "";

  function traversal(root) {
    if (!root) {
      hash += "-#";
      return;
    }
    hash += "-" + root.val;
    traversal(root.left);
    traversal(root.right);
  }
  traversal(root);
  return hash;
}

// Approach
// Serialize both trees using preorder traversal (with null markers) into strings.
// Check if subRoot's serialized string is a substring of root's serialized string.
// If yes, subRoot is a subtree of root; return true, else false.
// Time Complexity:
// Time Complexity = O(n * m)

// Space Complexity:
// Space Complexity = O(n + m) recursion stack space (h=tree height)
