// Leetcode - 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) return true;
  }
  return false;
};

// Approach:
// Use Floyd’s Cycle Detection (also called the Tortoise and Hare algorithm).
// Use two pointers: slow moves one step, fast moves two steps.
// If there is a cycle, they will eventually meet. If fast or fast.next becomes null, there’s no cycle.
// Time and Space Complexity:
// Time Complexity: O(n), where n is the number of nodes in the list.
// Space Complexity: O(1), no extra memory used.
