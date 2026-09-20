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
  let currProd = arr[0];
  let maxProdSoFar = arr[0];
  let minProdSoFar = arr[0];
  let totalMaxProd = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let maxProdCopy = maxProdSoFar;
    maxProdSoFar = Math.max(
      arr[i],
      arr[i] * maxProdSoFar,
      arr[i] * minProdSoFar,
    );
    minProdSoFar = Math.min(
      arr[i],
      arr[i] * maxProdCopy,
      arr[i] * minProdSoFar,
    );
    totalMaxProd = Math.max(maxProdSoFar, totalMaxProd);
  }

  return totalMaxProd;
};

// Approach:
// Start with the first element as:
// maxProdSoFar → maximum product ending at current index.
// minProdSoFar → minimum product ending at current index (important because multiplying with a negative can flip it).
// totalMax → overall maximum product.
// Iterate through the array:
// For each element arr[i] (from index 1 to end):
// Store the previous maxProdSoFar in a temporary variable (maxProdSoFarCopy).
// Update maxProdSoFar as the maximum among:
// Current element alone (arr[i])
// Product of current element with previous max product (maxProdSoFar * arr[i])
// Product of current element with previous min product (minProdSoFar * arr[i])
// Update minProdSoFar as the minimum among the same three values.
// Update totalMax as the maximum between current totalMax and maxProdSoFar.
// After traversing the whole array, totalMax holds the maximum product of any subarray.
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(1)

// Dry Run
// Input: arr = [2, 3, -2, 4]

// Step 0: Start Function maxProduct([2, 3, -2, 4])
// Initialize:
// maxProdSoFar = minProdSoFar = totalMax = arr[0] = 2

// Iteration i = 1, arr[1] = 3
// - maxProdSoFarCopy = maxProdSoFar = 2
// - maxProdSoFar = Math.max( arr[1], maxProdSoFar * arr[1], minProdSoFar * arr[1] )
//                = Math.max( 3, 2 * 3 = 6, 2 * 3 = 6 ) = 6
// - minProdSoFar = Math.min( arr[1], maxProdSoFarCopy * arr[1], minProdSoFar * arr[1] )
//                = Math.min( 3, 2 * 3 = 6, 2 * 3 = 6 ) = 3
// - totalMax = Math.max(totalMax, maxProdSoFar) = Math.max(2, 6) = 6

// State after i=1:
// maxProdSoFar = 6, minProdSoFar = 3, totalMax = 6

// Iteration i = 2, arr[2] = -2
// - maxProdSoFarCopy = maxProdSoFar = 6
// - maxProdSoFar = Math.max( -2, 6 * (-2) = -12, 3 * (-2) = -6 ) = -2
// - minProdSoFar = Math.min( -2, 6 * (-2) = -12, 3 * (-2) = -6 ) = -12
// - totalMax = Math.max(6, -2) = 6

// State after i=2:
// maxProdSoFar = -2, minProdSoFar = -12, totalMax = 6

// Iteration i = 3, arr[3] = 4
// - maxProdSoFarCopy = maxProdSoFar = -2
// - maxProdSoFar = Math.max( 4, -2 * 4 = -8, -12 * 4 = -48 ) = 4
// - minProdSoFar = Math.min( 4, -2 * 4 = -8, -12 * 4 = -48 ) = -48
// - totalMax = Math.max(6, 4) = 6

// State after i=3:
// maxProdSoFar = 4, minProdSoFar = -48, totalMax = 6

// Step 3: End
// Return totalMax = 6

// Output: 6 (Maximum product subarray is [2,3] → 6)
