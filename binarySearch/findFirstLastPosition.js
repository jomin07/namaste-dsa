// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

var searchRange = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let start = 0;
  let end = arr.length - 1;
  let ans = [-1, -1];

  //starting point
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (arr[left] !== target) return ans;
  ans[0] = left;

  //end point
  while (start < end) {
    let mid = Math.ceil((start + end) / 2);
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }
  ans[1] = end;
  return ans;
};

const arr = [5, 7, 7, 8, 8, 10],
  target = 2;
console.log(searchRange(arr, target));

// Time & Space Complexity:
// Time Complexity: O(logn)

// Space Complexity: O(1)
