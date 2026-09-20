// 322. Coin Change

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = {};

  function fn(remAmount) {
    if (remAmount === 0) return 0;
    if (remAmount < 0) return -1;
    if (dp[remAmount]) return dp[remAmount];

    let minCoins = Infinity;
    for (let i = 0; i < n; i++) {
      let res = fn(remAmount - coins[i]);
      if (res !== -1) {
        minCoins = Math.min(minCoins, 1 + res);
      }
    }

    dp[remAmount] = minCoins === Infinity ? -1 : minCoins;
    return dp[remAmount];
  }

  return fn(amount);
};

// Approach:
// Use recursion (fn(remAmount)) to try reducing the amount by picking each coin.
// Base cases:
// If remAmount == 0, no coins are needed → return 0.
// If remAmount < 0, invalid case → return -1.
// Store already-computed results in a memo (dp) to avoid re-computation.
// For each coin, recursively compute the minimum coins needed for remAmount - coin.
// If result is valid (!= -1), update the minimum.
// Save the best result in dp[remAmount].
// Final answer is fn(amount) → the minimum number of coins or -1 if impossible.
// Time & Space Complexity:
// Time Complexity: O(amount x n)

// Space Complexity: O(amount)

// Let's dry run the full code with coins = [1, 2], amount = 2. Expected answer: 1 (one 2-coin).

// Setup: n = 2, dp = {}. Call fn(2).

// CALL 1: fn(2)

// remAmount = 2. Not 0, not < 0, not in dp (empty). Proceed.
// minCoins = Infinity
// i=0, coins[0] = 1 → res = fn(2 - 1) = fn(1) → go deeper, pause here

// CALL 2: fn(1)

// remAmount = 1. Not 0, not < 0, not in dp. Proceed.
// minCoins = Infinity
// i=0, coins[0] = 1 → res = fn(1 - 1) = fn(0)
// fn(0): remAmount === 0 → base case, returns 0 instantly.
// res = 0. Since res != -1: minCoins = Math.min(Infinity, 1+0) = 1
// i=1, coins[1] = 2 → res = fn(1 - 2) = fn(-1)
// fn(-1): remAmount < 0 → base case, returns -1 instantly.
// res = -1. Since res == -1: skip, minCoins unchanged (1)
// Loop ends (i reached n=2). minCoins = 1, not Infinity.
// dp[1] = 1. fn(1) returns 1. dp is now {1: 1}.

// (back to CALL 1, fn(2), resuming i=0)

// res = 1 (just returned from fn(1)). Since res != -1: minCoins = Math.min(Infinity, 1+1) = 2
// i=1, coins[1] = 2 → res = fn(2 - 2) = fn(0)
// fn(0): remAmount === 0 → base case, returns 0 instantly.
// res = 0. Since res != -1: minCoins = Math.min(2, 1+0) = 1
// Loop ends. minCoins = 1, not Infinity.
// dp[2] = 1. fn(2) returns 1. dp is now {1: 1, 2: 1}.

// Final return value: 1.

// Summary table:

// Call	Coin tried	Sub-problem	res	Cost (1+res)	Best so far
// fn(1), i=0	1	fn(0)	0	1	1
// fn(1), i=1	2	fn(-1)	-1	skip	1
// fn(1) result	—	—	—	—	1
// fn(2), i=0	1	fn(1)=1	1	2	2
// fn(2), i=1	2	fn(0)	0	1	1
// fn(2) result	—	—	—	—	1

// Why the answer is 1: fn(2) compared two options — "use a 1, then solve for 1 more" (total cost 2) vs. "use a 2, done" (total cost 1) — and correctly picked the cheaper one, 1.
