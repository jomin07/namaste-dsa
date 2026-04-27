// 701. Insert into a Binary Search Tree

// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// Example 1:

// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
// Explanation: Another accepted tree is:

// Example 2:

// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
// Example 3:

// Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// Output: [4,2,7,1,3,5]

//iteration
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  let curr = root;
  while (curr) {
    if (val < curr.val) {
      if (!curr.left) {
        curr.left = new TreeNode(val);
        return root;
      }
      curr = curr.left;
    } else {
      if (!curr.right) {
        curr.right = new TreeNode(val);
        return root;
      }
      curr = curr.right;
    }
  }
};

// Time: O(h)
// Space: O(1) ✅ (iterative)

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

// ⏱ Complexity
// Time: O(h)
// Space: O(h) (recursion)
