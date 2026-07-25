// 47. Permutations II

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//     [2, 1, 1]]

// Example 2:

// Input: nums = [1,2,3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

var permuteUnique = function (nums) {
  if (nums.length === 1) return [nums];
  let res = [];
  nums.sort((a, b) => a - b);

  function backtrack(path, choices) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < choices.length; i++) {
      if (i > 0 && choices[i] === choices[i - 1]) continue;

      path.push(choices[i]);
      backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);
      path.pop();
    }
  }
  backtrack([], nums);
  return res;
};

// Approach
// Sort the array → so duplicates are adjacent.
// Use backtracking
// Maintain a path (current permutation being built).
// At each step, iterate over remaining choices.
// Skip duplicates If the current number is the same as the previous (choices[i] === choices[i-1]) → continue.
// Pick choices[i], recurse with the rest of the elements, then backtrack.
// When path.length === arr.length, store it in result.
// Time Complexity
// Time Complexity = O(n * n!)

// Space Complexity
// Space Complexity = O(n * n!)
