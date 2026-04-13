// 144. Binary Tree Preorder Traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [1,2,4,5,6,7,3,8,9]

// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

var preorderTraversal = function (root) {
  let res = [];
  function traversal(curr) {
    if (!curr) return;
    res.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return res;
};

// Approach
// Initialize an empty array ans to store the result.
// Define a helper function traversal(curr) that:
// Returns if the current node is null.
// Pushes the current node’s value to ans.
// Recursively calls itself on the left and then right child.
// Call traversal(root) to start the traversal from the root.
// Return the ans array containing the preorder traversal.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
