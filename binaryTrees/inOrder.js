// 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function (root) {
  let res = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    res.push(curr.val);
    traversal(curr.right);
  }
  return res;
};

// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
