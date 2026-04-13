// 145. Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

var postorderTraversal = function (root) {
  let res = [];

  function traversal(curr) {
    if (!curr) return;

    traversal(curr.left);
    traversal(curr.right);
    res.push(curr.val);
  }

  traversal(root);
  return res;
};

// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
