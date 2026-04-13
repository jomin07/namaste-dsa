var postorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let curr = root;
  let lastVisited = null;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    let peekNode = stack[stack.length - 1];

    if (peekNode.right && peekNode.right !== lastVisited) {
      curr = peekNode.right;
    } else {
      res.push(peekNode.val);
      lastVisited = stack.pop();
    }
  }
  return res;
};

// Approach
// Use a stack to simulate recursion.
// Traverse left subtree first, pushing nodes into the stack.
// Peek top node:
// If it has a right child not yet visited, traverse right subtree.
// Else, process the node (postorder: left → right → root).
// Track the last visited node to avoid revisiting right subtrees.
// Continue until all nodes are processed.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(h) where: h where, h is the height of the tree.
