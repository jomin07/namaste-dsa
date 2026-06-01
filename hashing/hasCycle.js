// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node(0 - indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

//hash approach
var hasCycle = function (head) {
  if (!head) return false;
  let set = new Set();

  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }

  return false;
};

// Approach:
// Use a Set to track visited nodes.
// While traversing, if we encounter a node already in the set, we’ve found a cycle.
// If we reach null, there’s no cycle.
// Time and Space Complexity:
// Time Complexity: O(n), where n is the number of nodes in the list.
// Space Complexity: O(n), in the worst case we store all nodes in a set.

//Floyd’s Cycle Detection
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

// Approach:
// Use Floyd’s Cycle Detection (also called the Tortoise and Hare algorithm).
// Use two pointers: slow moves one step, fast moves two steps.
// If there is a cycle, they will eventually meet. If fast or fast.next becomes null, there’s no cycle.
// Time and Space Complexity:
// Time Complexity: O(n), where n is the number of nodes in the list.
// Space Complexity: O(1), no extra memory used
