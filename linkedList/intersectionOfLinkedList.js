// Leetcode - 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

var getIntersectionNode = function (headA, headB) {
  let set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};

// Time and Space Complexity:
// Time Complexity: O(n + m), where n and m are lengths of listA and listB.
// Space Complexity: O(m), storing nodes of listB in a set.
