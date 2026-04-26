// 700. Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Example 1:

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:

// Input: root = [4,2,7,1,3], val = 5
// Output: []

var searchBST = function (root, val) {
  function search(curr) {
    if (!curr || curr.val === val) return curr;

    if (val < curr.val) return search(curr.left);
    if (val > curr.val) return search(curr.right);
  }
  return search(root);
};

//without helper or closure
var searchBST = function (root, val) {
  if (!root || root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
};

// ⏱ Time Complexity (TC)

// 👉 O(h)

// You go down one path only (left or right)
// Cases:
// Balanced BST: O(log n) ✅
// Skewed BST: O(n) ❌
// 💾 Space Complexity (SC)

// 👉 O(h) (because of recursion stack)

// Cases:
// Balanced BST: O(log n)
// Skewed BST: O(n)
