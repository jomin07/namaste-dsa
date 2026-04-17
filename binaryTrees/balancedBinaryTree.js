// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.

var isBalanced = function (root) {
  function calculateHeight(curr) {
    if (!curr) return 0;

    let leftHeight = calculateHeight(curr.left);
    if (leftHeight === -1) return -1;
    let rightHeight = calculateHeight(curr.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return 1 + Math.max(leftHeight, rightHeight);
  }
  return calculateHeight(root) !== -1;
};

// 🧠 Short Answer

// return -1 doesn’t magically stop everything.

// 👉 It stops the current function call, and because every parent call checks for -1, they also immediately return, creating a chain reaction stop.

// 🔍 Let’s see the key lines
// let leftHeight = calculateHeight(curr.left);
// if(leftHeight === -1) return -1;

// 👉 This is the real “stop mechanism”

// 🔥 Step-by-step flow

// Imagine this tree:

//         1
//        /
//       2
//      /
//     3
//    /
//   4
// Step 1: At node 4
// return 1
// Step 2: At node 3
// left = 1, right = 0 → OK
// return 2
// Step 3: At node 2
// left = 2, right = 0 → diff = 2 ❌
// return -1

// 👉 🚨 imbalance detected here

// Step 4: Back to node 1
// let leftHeight = calculateHeight(curr.left); // returns -1
// if(leftHeight === -1) return -1;

// 👉 Immediately returns
// 👉 Right subtree is NEVER called

// ⚡ This is the key idea
// if(leftHeight === -1) return -1;

// 👉 This line prevents:

// calculateHeight(curr.right); ❌ never runs
// 🧠 Important Insight

// return -1 alone doesn’t stop everything

// 👉 The checking condition (if(leftHeight === -1)) is what propagates the stop upward

// 🔁 Chain Reaction
// Node 2 → returns -1
// Node 1 → sees -1 → returns -1
// Top → sees -1 → DONE
// 💡 Analogy

// Think of -1 like a red signal 🚨

// Child says: “I’m broken”
// Parent says: “Okay, I won’t proceed”
// Entire recursion unwinds immediately
// 🚀 One-line memory trick

// “Return -1 AND check for it → that’s what stops recursion early”

// Time Complexity:z
