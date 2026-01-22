// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode();
  let resHead = res;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newNode = new ListNode(digit);
    res.next = newNode;
    res = res.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return resHead.next;
};

// Approach:
// Initialize a dummy node to build the result list and a carry variable set to 0.
// Traverse both linked lists simultaneously. For each node, compute the sum of values plus carry.
// Create a new node with sum % 10 and update carry to sum / 10.
// Continue until both lists are exhausted and carry becomes 0.
// Time and Space Complexity:
// Time Complexity: O(n) where n is the length of the longer list.
// Space Complexity: O(n) for the new list created.
