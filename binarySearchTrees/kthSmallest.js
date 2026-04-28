// 230. Kth Smallest Element in a BST

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

var kthSmallest = function (root, k) {
  let count = 0;
  let ans = null;
  function traversal(curr) {
    if (ans !== null) return;
    if (!curr) return;
    curr.left && traversal(curr.left);
    count++;
    if (count === k) ans = curr.val;
    curr.right && traversal(curr.right);
  }

  traversal(root);
  return ans;
};

// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(h)(h=tree height)
