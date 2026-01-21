// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let slow = sentinel;
  let fast = slow;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return sentinel.next;
};

// Approach (Optimized Two-Pointer):
// Use a dummy node before the head to handle edge cases easily.
// Move the first pointer n steps ahead.
// Move both first and second pointers until first reaches the end.
// Now second is just before the node to be deleted. Skip it using second.next = second.next.next.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)
