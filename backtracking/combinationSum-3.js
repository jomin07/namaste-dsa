// 216. Combination Sum III

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

var combinationSum3 = function (k, n) {
  let res = [];

  function backtrack(remSum, path, start) {
    if (remSum < 0) return;
    if (path.length === k && remSum !== 0) return;
    if (remSum === 0 && path.length !== k) return;
    if (remSum === 0 && path.length === k) res.push([...path]);
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(remSum - i, path, i + 1);
      path.pop();
    }
  }

  backtrack(n, [], 1);
  return res;
};

// Approach:
// We need to find all combinations of k numbers (from 1 to 9) that sum up to n.
// Use backtracking:
// Keep track of the current path (path) and remaining sum (remainingSum).
// Stop if the path size reaches k. If remainingSum == 0, record the path.
// Iterate numbers from start to 9 to avoid reuse and ensure ascending order.
// Add the number, recurse with updated sum and next start, then remove (backtrack).

// How many levels?

// Since numbers are from 1 to 9, the deepest path is:

// [1,2,3,4,5,6,7,8,9]

// So maximum recursion depth:

// 9

// Therefore:

// Space = O(9)

// Time Complexity

// Think of it this way:

// For each number:

// 1 → choose or don't choose
// 2 → choose or don't choose
// 3 → choose or don't choose
// ...
// 9 → choose or don't choose

// Each number has 2 possibilities.

// So total possibilities:

// 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2

// =

// 2^9 = 512

// Therefore:

// TC = O(2^9)
// Another way to see it

// Your code is generating combinations from:

// {1,2,3,4,5,6,7,8,9}

// How many subsets can 9 elements have?

// Formula:

// 2^n

// So:

// 2^9 = 512

// That's why we say:

// Time Complexity = O(2^9)
// Interview Answer

// For this exact problem:

// TC = O(2^9)
// SC = O(9)

// Since 9 is fixed, some interviewers may even say:

// TC = O(1)
// SC = O(1)

// because 512 is a constant.

// But for learning backtracking, write:

// TC = O(2^9)
// SC = O(9)

// because it shows you understand the recursion tree.

// The important thing: don't count the loop as 9^9 or 9!. The algorithm is exploring subsets/combinations of 9 numbers, and the number of subsets of 9 elements is 2^9.
