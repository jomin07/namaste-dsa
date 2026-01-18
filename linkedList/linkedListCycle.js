// Leetcode - 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

var hasCycle = function (head) {
  let set = new Set();
  let curr = head;

  while (curr) {
    if (!set.has(curr)) {
      set.add(curr);
      curr = curr.next;
    } else {
      return true;
    }
  }
  return false;
};

// Time and Space Complexity:
// Time Complexity: O(n), where n is the number of nodes in the list.
// Space Complexity: O(n), in the worst case we store all nodes in a set.
