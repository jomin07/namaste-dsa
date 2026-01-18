// 234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

var isPalindrome = function (head) {
  //find mid
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //check for palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.val !== secondList.val) return false;
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};

// Approach 1:
// Traverse the linked list and store values in an array.
// Check whether the array is a palindrome by comparing elements from start and end moving towards the center.
// Time and Space Complexity:
// Time Complexity: O(n), where n is the number of nodes.
// Space Complexity: O(n), for the array storage.

// var isPalindrome = function (head) {
//   let arr = [];
//   let curr = head;
//   while (curr !== null) {
//     arr.push(curr.val);
//     curr = curr.next;
//   }
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     if (arr[left++] !== arr[right--]) return false;
//   }
//   return true;
// };

// Approach 2:
// Use two pointers (slow and fast) to find the middle of the linked list.
// Reverse the second half of the list.
// Compare the first and second halves node by node.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)
