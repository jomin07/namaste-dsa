// 69. Sqrt(x)
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// Time & Space Complexity:
// Time Complexity: O(logx)

// Space Complexity: O(1)

var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (Math.pow(mid, 2) === x) return mid;

    if (Math.pow(mid, 2) > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

//if left and right are large numbers, in some languages it can overflow;not in js.
//let m = l + Math.floor((r - l) / 2);//solution
//same as m = (l + r) / 2;
