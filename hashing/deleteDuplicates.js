// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1, 2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1, 2, 3]

var deleteDuplicates = function (head) {
  if (!head) return head;
  let curr = head;
  while (curr && curr.next) {
    if (curr.val !== curr.next.val) {
      curr = curr.next;
    } else {
      curr.next = curr.next.next;
    }
  }
  return head;
};

// Approach:
// Iterate through the linked list with a current pointer.
// For each node, compare its value with the next node.
// If they are equal, skip the next node using curr.next = curr.next.next.
// Otherwise, move to the next node.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)
