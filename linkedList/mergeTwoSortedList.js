// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let start = new ListNode();
  let curr = start;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (!list1) curr.next = list2;
  if (!list2) curr.next = list1;

  return start.next;
};

// Approach:
// Use a dummy node to simplify handling of the head.
// Iterate through both lists and append the smaller value node to the merged list.
// Once one list is exhausted, append the remaining part of the other list.
// Return the merged list starting from dummy.next.
