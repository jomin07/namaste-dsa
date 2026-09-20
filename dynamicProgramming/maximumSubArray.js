// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray[5, 4, -1, 7, 8] has the largest sum 23.

var maxSubArray = function (arr) {
  if (arr.length === 1) return arr[0];
  let currSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};

// Approach:
// Use Kadane’s Algorithms
// Initialize two variables:
// currSum = arr[0] → keeps track of the maximum subarray sum ending at the current index.
// maxSum = arr[0] → keeps track of the global maximum subarray sum found so far.
// Iterate through the array starting from index 1:
// For each element arr[i]:
// Decide whether to extend the previous subarray (currSum + arr[i]) or start a new subarray from this element (arr[i]). → currSum = Math.max(currSum + arr[i], arr[i]);
// Update the global maximum:
// After updating currSum, compare it with the global maximum and update if larger: → maxSum = Math.max(maxSum, currSum);
// After traversing the entire array, maxSum will contain the largest sum of any contiguous subarray.

// Time & Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

// Dry Run
// Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Step 0: Start Function maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// currSum = arr[0] = -2
// maxSum  = arr[0] = -2

// Iteration i = 1, arr[1] = 1
// currSum = Math.max(currSum + 1, 1)
//         = Math.max(-2 + 1, 1)
//         = Math.max(-1, 1) = 1
// maxSum  = Math.max(1, -2) = 1

// Iteration i = 2, arr[2] = -3
// currSum = Math.max(1 + (-3), -3)
//         = Math.max(-2, -3) = -2
// maxSum  = Math.max(-2, 1) = 1

// Iteration i = 3, arr[3] = 4
// currSum = Math.max(-2 + 4, 4)
//         = Math.max(2, 4) = 4
// maxSum  = Math.max(4, 1) = 4

// Iteration i = 4, arr[4] = -1
// currSum = Math.max(4 + (-1), -1)
//         = Math.max(3, -1) = 3
// maxSum  = Math.max(3, 4) = 4

// Iteration i = 5, arr[5] = 2
// currSum = Math.max(3 + 2, 2)
//         = Math.max(5, 2) = 5
// maxSum  = Math.max(5, 4) = 5

// Iteration i = 6, arr[6] = 1
// currSum = Math.max(5 + 1, 1)
//         = Math.max(6, 1) = 6
// maxSum  = Math.max(6, 5) = 6

// Iteration i = 7, arr[7] = -5
// currSum = Math.max(6 + (-5), -5)
//         = Math.max(1, -5) = 1
// maxSum  = Math.max(1, 6) = 6

// Iteration i = 8, arr[8] = 4
// currSum = Math.max(1 + 4, 4)
//         = Math.max(5, 4) = 5
// maxSum  = Math.max(5, 6) = 6

// Step 3: End
// Return maxSum = 6

// Output: 6 (Maximum subarray is [4, -1, 2, 1])
