// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Approach 2:
// Use two pointers (slow and fast) to find the middle of the linked list.
// Reverse the second half of the list.
// Compare the first and second halves node by node.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

var isPalindrome = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // Compare two halves
  let first = head,
    second = prev;
  while (second) {
    if (first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }

  return true;
};
