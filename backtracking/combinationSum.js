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

// Dry Run
// Input: arr = [2, 3, 6, 7], target = 7

// Step 0: Start Function combinationSum([2, 3, 6, 7], 7)

// Initialize:
// result = []
// path = []

// Call backtrack(7, [], 0)

// Loop i = 0 → arr[0] = 2
// path.push(2) → path = [2]
// Call backtrack(5, [2], 0)

//   Loop i = 0 → arr[0] = 2
//   path.push(2) → path = [2, 2]
//   Call backtrack(3, [2, 2], 0)

//     Loop i = 0 → arr[0] = 2
//     path.push(2) → path = [2, 2, 2]
//     Call backtrack(1, [2, 2, 2], 0)
//       remainingSum > 0 but next choice will exceed → return
//     path.pop() → path = [2, 2]

//     Loop i = 1 → arr[1] = 3
//     path.push(3) → path = [2, 2, 3]
//     Call backtrack(0, [2, 2, 3], 1)
//       remainingSum == 0 → result.push([2, 2, 3])
//     path.pop() → path = [2, 2]

//   Loop ends
//   path.pop() → path = [2]

//   Loop i = 1 → arr[1] = 3
//   path.push(3) → path = [2, 3]
//   Call backtrack(2, [2, 3], 1)
//     further exploration doesn’t hit 0 → backtrack
//   path.pop() → path = [2]

//   Loop i = 2 → arr[2] = 6
//   path.push(6) → path = [2, 6]
//   Call backtrack(-1, [2, 6], 2)
//     remainingSum < 0 → return
//   path.pop() → path = [2]

//   Loop i = 3 → arr[3] = 7
//   path.push(7) → path = [2, 7]
//   Call backtrack(-2, [2, 7], 3)
//     remainingSum < 0 → return
//   path.pop() → path = [2]

// Loop ends
// path.pop() → path = []

// Loop i = 1 → arr[1] = 3
// path.push(3) → path = [3]
// Call backtrack(4, [3], 1)

//   Loop i = 1 → arr[1] = 3
//   path.push(3) → path = [3, 3]
//   Call backtrack(1, [3, 3], 1)
//     no valid combination → return
//   path.pop() → path = [3]

//   Loop i = 2 → arr[2] = 6
//   path.push(6) → path = [3, 6]
//   Call backtrack(-2, [3, 6], 2)
//     remainingSum < 0 → return
//   path.pop() → path = [3]

//   Loop i = 3 → arr[3] = 7
//   path.push(7) → path = [3, 7]
//   Call backtrack(-3, [3, 7], 3)
//     remainingSum < 0 → return
//   path.pop() → path = [3]

// Loop ends
// path.pop() → path = []

// Loop i = 2 → arr[2] = 6
// path.push(6) → path = [6]
// Call backtrack(1, [6], 2)
//   no valid combination → return
// path.pop() → path = []

// Loop i = 3 → arr[3] = 7
// path.push(7) → path = [7]
// Call backtrack(0, [7], 3)
//   remainingSum == 0 → result.push([7])
// path.pop() → path = []

// Loop ends

// Step 3: End
// Return result = [[2, 2, 3], [7]]

// Output: [[2, 2, 3], [7]]

// Explanation: The backtracking algorithm explores all possible combinations by adding numbers repeatedly (reuse is allowed). Only the paths where the sum exactly equals target are stored in result.
