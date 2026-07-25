// 39. Combination Sum

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

var combinationSum = function (arr, target) {
  let res = [];
  function backtrack(remSum, path, start) {
    if (remSum === 0) res.push([...path]);
    if (remSum < 0) return;
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(remSum - arr[i], path, i);
      path.pop();
    }
  }
  backtrack(target, [], 0);
  return res;
};

// Approach:
// Sort the array → ensures duplicates are adjacent and helps in skipping them.
// Use backtracking to explore all possible combinations:
// Keep reducing the remainingSum.
// If it becomes 0, add the current path to result.
// If it becomes negative, stop exploring further.
// Skip duplicates → when iterating, if the current number is the same as the previous (arr[i] === arr[i-1]) and not at the starting index of the loop, continue to next iteration.
// Move forward (use i+1) because each element can only be used once.
// Time Complexity:
// Time Complexity = O(2n * n)

// Space Complexity:
// Space Complexity = O(2n * n) (output) + O(n) (stack)
