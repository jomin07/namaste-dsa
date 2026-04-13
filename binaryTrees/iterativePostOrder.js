var postorderTraversal = function (root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];
  let res = [];

  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr.val);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  let n = s2.length;

  for (let i = n - 1; i >= 0; i--) {
    res.push(s2.pop());
  }

  return res;
};

// Approach
// Use two stacks: s1 for processing nodes and s2 for storing them in reverse postorder.
// Push root to s1.
// While s1 is not empty:
// Pop from s1, push to s2.
// Push left child (if any) to s1.
// Push right child (if any) to s1.
// After processing, pop from s2 and store node values in ans (this gives postorder).
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
