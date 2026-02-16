// 540. Single Element in a Sorted Array
// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

var singleNonDuplicate = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let m = Math.floor((left + right) / 2);
    //m is the non duplicate
    if (arr[m - 1] !== arr[m] && arr[m + 1] !== arr[m]) return arr[m];

    //mid pair in left side
    if (arr[m - 1] === arr[m]) {
      let leftCount = m - 1 - left;

      //left side count is odd
      if (leftCount % 2 !== 0) {
        right = m - 2;
      } else {
        //right side count is odd
        left = m + 1;
      }
    } else {
      //mid pair in right side
      let rightCount = right - (m + 1);

      //right side count is odd
      if (rightCount % 2 !== 0) {
        left = m + 2;
      } else {
        //left side count is odd
        right = m - 1;
      }
    }
  }

  return arr[left];
};

// Approach:
// Use binary search between left (l) and right (r).
// At each mid (m):
// If arr[m] === arr[m - 1], count elements on the left.
// If that count is odd → single lies left → r = m - 2.
// If count is even → single lies right → l = m + 1.
// Same logic applies if arr[m] === arr[m + 1].
// If neither left nor right match → return arr[m].
// Time & Space Complexity:
// Time Complexity: O(logn)

// Space Complexity: O(1)
