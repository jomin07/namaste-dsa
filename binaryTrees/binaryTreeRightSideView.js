// 199. Binary Tree Right Side View

// Example 1:

// Input: root = [1,2,3,null,5,null,4]

// Output: [1, 3, 4]

//recursive
var rightSideView = function (root) {
  let ans = [];

  function dfs(root, level) {
    if (!root) return;

    if (ans.length === level) {
      ans.push(root.val);
    }

    dfs(root.right, level + 1);
    dfs(root.left, level + 1);
  }

  dfs(root, 0);
  return ans;
};

//iterative
var rightSideView = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  while (q.length) {
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
      i === 0 && ans.push(curr.val);
    }
  }
  return ans;
};

// Approach
// If the tree is empty, return an empty array.
// Use a queue q for level-order traversal (BFS).
// For each level:
// Store the number of nodes (levelSize).
// Traverse all nodes at this level.
// Since you push right first, the first node (i == 0) is the rightmost node of that level → store it in ans.
// Push right child first, then left, to ensure rightmost nodes are visited first in the next level.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(w) Where w is the maximum width of the tree
