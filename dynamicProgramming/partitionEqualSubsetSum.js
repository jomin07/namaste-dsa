var canPartition = function (arr) {
  // Add up all the numbers in the array
  let total = arr.reduce((acc, curr) => acc + curr, 0);

  // Odd total can't be split into two equal halves
  if (total % 2 !== 0) return false;

  // Each half must sum to this value
  // So we only need to find ONE subset that sums to target
  let target = total / 2;

  // dp[i] = true means "sum i can be made using some of the numbers seen so far"
  // target + 1 slots because indexes run from 0 to target
  let dp = new Array(target + 1).fill(false);

  // Sum 0 is always possible (pick nothing)
  // This is the seed that all other true values grow from
  dp[0] = true;

  // Take each number one at a time
  for (let num of arr) {
    // Go from target DOWN to num
    // Down: each number is used only once (dp[i - num] still holds the old value)
    // Stop at num: below that, i - num would be negative
    for (let i = target; i >= num; i--) {
      // Sum i is reachable if:
      //   1. it was already reachable (skip this num), OR
      //   2. i - num was reachable, so adding num gets us to i (use this num)
      dp[i] = dp[i] || dp[i - num];
    }
  }

  // true -> a subset sums to target, so the leftover also sums to target
  return dp[target];
};

// Brief explanation

// Goal: Can the array be split into two groups with equal sums?

// Idea: If the total is odd, it's impossible. Otherwise each group must sum to target = total / 2. So we only check whether some numbers add up to target. The leftover numbers then automatically sum to target too.

// How:

// dp[i] means "sum i can be made."
// Start with dp[0] = true.
// For each number, go through sums from target down to num.
// Mark dp[i] = true if it already was, or if dp[i - num] is true.
// Return dp[target].
// Dry run: arr = [3, 1, 5, 9, 12]
// total = 30 (even), so continue
// target = 15

// I'll track only the reachable sums (the true positions in dp).

// After processing	Reachable sums (≤ 15)
// start	{0}
// num = 3	{0, 3}
// num = 1	{0, 1, 3, 4}
// num = 5	{0, 1, 3, 4, 5, 6, 8, 9}
// num = 9	{0, 1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15}
// num = 12	same, no new sums

// Detail for num = 5 (old reachable {0, 1, 3, 4}): add 5 to each old sum, giving 5, 6, 8, 9. Keep the old ones too.

// Detail for num = 9 (old reachable {0, 1, 3, 4, 5, 6, 8, 9}): add 9 to each, giving 9, 10, 12, 13, 14, 15, then 17 and 18 are beyond target, so ignored. Now dp[15] becomes true (6 + 9 = 15).

// num = 12: 12 is already reachable (3 + 9), and 12 + anything small goes past 15 or lands on sums already marked. Nothing new.

// Result
// return dp[15];  // true

// Split: [3, 12] (sum 15) and [1, 5, 9] (sum 15).

// Time and space complexity

// Let n = number of elements and target = total / 2.

// 	Complexity	Why
// Time	O(n × target)	Outer loop runs n times, inner loop runs up to target times, each step is O(1)
// Space	O(target)	One dp array of target + 1 slots

// Going downward in the inner loop lets us reuse a single 1D array instead of a 2D table, which keeps space at O(target) instead of O(n × target).
