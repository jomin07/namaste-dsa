// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself(i.e., symmetric around its center).

var isSymmetric = function (root) {
  let q = [root.left, root.right];
  while (q.length) {
    let p1 = q.shift();
    let p2 = q.shift();

    if (!p1 && !p2) continue;
    if (!p1 || !p2) return false;

    if (p1.val !== p2.val) return false;

    q.push(p1.left, p2.right);
    q.push(p1.right, p2.left);
  }
  return true;
};

// Approach
// Use a queue to compare nodes in mirror positions.
// Start by pushing root.left and root.right into the queue.
// While the queue has elements:
// Pop two nodes p1 and p2.
// If both are null, continue (they're symmetric).
// If only one is null or their values don’t match, return false.
// Enqueue their children in mirror order:
// p1.left with p2.right
// p1.right with p2.left
// If all mirror pairs match, return true.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
