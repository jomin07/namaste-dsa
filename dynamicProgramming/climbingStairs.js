// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Problem Statement:
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2

// Output: 2

// Explanation: There are two ways to climb to the top.

// 1 step + 1 step
// 2 steps
// Example 2:
// Input: n = 3

// Output: 3

// Explanation: There are three ways to climb to the top.

// 1 step + 1 step + 1 step
// 1 step + 2 steps
// 2 steps + 1 step
// Constraints
// 1 <= n <= 45

//bottom up
var climbStairs = function (n) {
  let dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};
// Approach:
// Identify the recurrence relation:
// To reach step n, there are only two possibilities:
// You came from step n-1 (taking 1 step).
// You came from step n-2 (taking 2 steps).
// So, the total ways to reach step n is:
// dp[n] = dp[n-1] + dp[n-2]

// Base cases:
// dp[1] = 1 → Only 1 way to climb 1 step.
// dp[2] = 2 → Either take two 1-steps or one 2-step.
// DP array construction:
// We create an array dp where dp[i] represents the number of ways to reach step i.
// Start from i = 3 and use the recurrence relation to fill the array.
// Return dp[n], which contains the number of ways to reach the nth step.
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(n)

// Both solve the same problem two different ways. Let's trace both on cost = [10,15,20] (top = index 3).

// Bottom-up (array, loop)

let dp = [0, 0];
for (let i = 2; i <= cost.length; i++) {
  dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
}
return dp[cost.length];

// Starts from the base cases and builds forward, filling dp[2], then dp[3], in order.

// i	dp[i-2]+cost[i-2]	dp[i-1]+cost[i-1]	dp[i]
// 2	dp[0]+cost[0] = 0+10 = 10	dp[1]+cost[1] = 0+15 = 15	10
// 3	dp[1]+cost[1] = 0+15 = 15	dp[2]+cost[2] = 10+20 = 30	15

// Return dp[3] = 15.

// Top-down (recursion + memo)

function dp(i) {
  if (i < 2) return 0;
  if (!(i in memo)) {
    memo[i] = Math.min(dp(i - 2) + cost[i - 2], dp(i - 1) + cost[i - 1]);
  }
  return memo[i];
}
return dp(3);

// Starts from the answer you want (dp(3)) and recurses backward until it hits base cases, caching as it goes.

// Call tree:

// dp(3)
// ├── dp(1) → i<2 → returns 0
// └── dp(2)
//     ├── dp(0) → i<2 → returns 0
//     └── dp(1) → i<2 → returns 0
//     → memo[2] = min(0+10, 0+15) = 10
// → memo[3] = min(dp(1)+cost[1], dp(2)+cost[2]) = min(0+15, 10+20) = 15

// Both return 15. Same values, same recurrence — bottom-up computes dp[2] before dp[3] because it has to; top-down computes dp(2) before dp(3) finishes because dp(3) asks for it along the way.
