var inorderTraversal = function (root) {
  let stack = [];
  let res = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
};

// Approach
// Initialize
// An empty stack to simulate recursion.
// A pointer curr starting at root.
// Traverse Left: Keep pushing nodes to the stack while moving to the left child.
// Visit Node:
// When no more left nodes, pop from the stack.
// Add the node’s value to the result array ans.
// Traverse Right: Move curr to the right child and repeat.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
