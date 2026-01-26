// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  let curr = head;
  let nextNode = curr.next;

  while (curr && curr.next) {
    curr.next = nextNode.next;
    nextNode.next = curr;
    prev.next = nextNode;

    prev = curr;
    curr = curr.next;
    nextNode = curr && curr.next;
  }

  return sentinel.next;
};

// Approach:
// Use a dummy node before the head to handle edge cases easily.
// Use pointers to swap pairs by rewiring node connections.
// Iterate through the list two nodes at a time and swap them.
// Time and Space Complexity:
// Time Complexity: O(n), where n is the number of nodes in the linked list. We visit each node once.
// Space Complexity: O(1), constant extra space is used (just a few pointers).

// var swapPairs = function (head) {
//   if (!head || !head.next) return head;

//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let prev = dummy;

//   while (prev.next && prev.next.next) {
//     let first = prev.next;
//     let second = first.next;

//     first.next = second.next;
//     second.next = first;
//     prev.next = second;

//     prev = first;
//   }
//   return dummy.next;
// };
