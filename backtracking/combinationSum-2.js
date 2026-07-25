// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

var combinationSum2 = function (arr, target) {
  let res = [];
  arr.sort((a, b) => a - b);

  function backtrack(remSum, path, start) {
    if (remSum < 0) return;
    if (remSum === 0) res.push([...path]);
    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i - 1] === arr[i]) continue;
      path.push(arr[i]);
      backtrack(remSum - arr[i], path, i + 1);
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
