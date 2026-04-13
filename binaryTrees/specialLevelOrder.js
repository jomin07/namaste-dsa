// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];

  while (q.length) {
    let levelSize = q.length;
    let levelArr = [];

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      levelArr.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    ans.push(levelArr);
  }
  return ans;
};

// Approach
// Base Case: If the tree is empty (root == null), return an empty array.
// Initialize Queue: Use a queue to process nodes level by level. Start by pushing the root node.
// Process Each Level:
// For each level, store the number of nodes (levelSize) currently in the queue.
// Process levelSize nodes by:
// Removing each node from the front of the queue.
// Adding its value to the current level array.
// Enqueue its left and right children if they exist.
// Add Level to Result: After processing one level, push the level array to the final result.
// Repeat: Continue until the queue is empty.
// Return Result: Return the array containing node values level by level.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
