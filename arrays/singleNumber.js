// Leetcode 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

// Approach 1 (Brute-force Hash Map):
// Create an empty hash map to store counts of each element.
// Loop through the array, update the count for each element.
// Loop again to find the element with count 1 and return it.
// Time Complexity:
// Time Complexity = O(n) We traverse the array twice: once for counting and once for checking.

// Space Complexity:
// Space Complexity = O(n) The hash map may store counts for up to n elements in the worst case.

// var singleNumber = function(nums) {
//     let hash = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (!hash[nums[i]]) {
//             hash[nums[i]] = 1;
//         } else {
//             hash[nums[i]]++;
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]] === 1) {
//             return nums[i];
//         }
//     }
// };

// Approach 2 (Optimal using XOR):
// XOR of two same numbers is 0: a ^ a = 0.
// XOR of a number with 0 is the number itself: a ^ 0 = a
// So, if all elements occur twice except one, XOR-ing all gives that unique number.
// Time Complexity:
// Time Complexity = O(n) where n is the number of elements in the array.

// Space Complexity:
// Space Complexity = O(1) No extra space used.

var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
};

console.log(singleNumber([2, 2, 1]));
