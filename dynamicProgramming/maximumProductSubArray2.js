// 152. Maximum Product Subarray
// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Note that the product of an array with a single element is the value of that element.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because[-2, -1] is not a subarray.

var maxProduct = function (arr) {
  if (arr.length === 1) return arr[0];
  let maxProduct = -Infinity;
  let leftToRight = 1;
  let rightToLeft = 1;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    leftToRight *= arr[i];
    maxProduct = Math.max(leftToRight, maxProduct);
    if (arr[i] === 0) leftToRight = 1;
  }

  for (let i = n - 1; i >= 0; i--) {
    rightToLeft *= arr[i];
    maxProduct = Math.max(rightToLeft, maxProduct);
    if (arr[i] === 0) rightToLeft = 1;
  }

  return maxProduct;
};

// Approach:
// Initialize Variables
// ltrProd = 1 → product when traversing left to right.
// rtlProd = 1 → product when traversing right to left.
// finalMax = -Infinity → to keep track of the maximum product found.
// Two-way traversal logic
// Since the maximum product subarray can break due to negative numbers and zeros, we handle it by multiplying in both directions:
// LTR (left-to-right): multiply each element into ltrProd.
// RTL (right-to-left): multiply each element from the back into rtlProd.
// Update maximum, After each step, check the maximum value among finalMax, ltrProd, and rtlProd.
// Handle zero reset
// If at any point the product becomes 0, reset it to 1.
// This is because any product involving 0 will be 0, but a new subarray can start after zero.
// After completing the single loop, finalMax will contain the maximum product subarray.
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(1)

// Dry Run
// Input: arr = [2, 3, -2, 4]

// Initial:
// n = 4
// ltrProd = 1, rtlProd = 1
// finalMax = -Infinity

// i = 0:
// ltrProd = 1 * 2 = 2
// rtlProd = 1 * arr[3] = 1 * 4 = 4
// finalMax = max(-∞, 2, 4) = 4

// i = 1:
// ltrProd = 2 * 3 = 6
// rtlProd = 4 * arr[2] = 4 * -2 = -8
// finalMax = max(4, 6, -8) = 6

// i = 2:
// ltrProd = 6 * -2 = -12
// rtlProd = -8 * arr[1] = -8 * 3 = -24
// finalMax = max(6, -12, -24) = 6

// i = 3:
// ltrProd = -12 * 4 = -48
// rtlProd = -24 * arr[0] = -24 * 2 = -48
// finalMax = max(6, -48, -48) = 6

// Loop ends
// Return finalMax = 6

// Output: 6
