// 278. First Bad Version

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1

// Approach:
// Initialize pointers: l = 1 and r = n.
// While l < r:
// Compute mid: m = l + floor((r - l) / 2).
// If isBadVersion(m) is false → move right (l = m + 1).
// Else (true) → move left or stay (r = m).
// Loop ends when l == r, which is the first bad version.
// Return r.
// Time & Space Complexity:
// Time Complexity: O(logn)

// Space Complexity: O(1)

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

// 3 Versions of Binary Search:

// 1)
// while (l <= r) {
//     mid = Math.floor((left + right) / 2);
//     l = mid + 1;
//     r = mid - 1;
// }

// 2)

// while (l < r) {
//     mid = Math.floor((left + right) / 2);
//     l = mid + 1;
//     r = mid;
// }

// 3)
// while (l < r -1 ) {
//     mid = Math.floor((left + right) / 2);
//     l = mid;
//     r = mid;
// }
