// 322. Coin Change

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < n; j++) {
      let remAmount = dp[i - coins[j]];
      if (remAmount >= 0) {
        dp[i] = Math.min(dp[i], 1 + remAmount);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

// Approach:
// dp[x] = minimum coins required to make amount x.
// Initialize dp with Infinity (unreachable state) except dp[0] = 0 (0 coins for amount 0).
// Transition:
// For each amount rem from 1 → amount:
// For each coin c: If rem - c ≥ 0, then:
// dp[rem] = min(dp[rem], 1 + dp[rem - c])
// If dp[amount] is still Infinity, return -1 (not possible).
// Otherwise, return dp[amount].
// Time & Space Complexity:
// Time Complexity: O(n x amount)

// Space Complexity: O(amount)
