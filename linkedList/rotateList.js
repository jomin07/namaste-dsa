// 61. Rotate List
// Given the head of a linked list, rotate the list to the right by k places.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;

  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  k = k % length;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
};

// Approach:
// First, compute the length of the list.
// Adjust k using modulo: k = k % length.
// Use two pointers: move one k steps ahead, then move both until the first reaches the end.
// Rewire the pointers to rotate the list, breaking it at the new tail.
