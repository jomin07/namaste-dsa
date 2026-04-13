// 144. Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root];
  let ans = [];

  while (stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);
    if (curr && curr.right) stack.push(curr.right);
    if (curr && curr.left) stack.push(curr.left);
  }
  return ans;
};
