// 103. Binary Tree Zigzag Level Order Traversal
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let level = 0;
  let q = [root];

  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      if (level % 2 === 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    level++;
    ans.push(levelArr);
  }
  return ans;
};

// Approach
// Use a Queue (q) for level-order traversal (BFS).
// Track the current level (level) to know the direction:
// Even levels: Left to Right → use push().
// Odd levels: Right to Left → use unshift() to insert at the beginning.
// For each level:
// Process all nodes in the current level (levelSize)
// Collect their values in levelArr.
// Add their children to the queue.
// After processing the level, push levelArr to ans and increase level.
// Return the final result array ans.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(h) recursion stack space (h=tree height)
