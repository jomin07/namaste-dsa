// 518. Coin Change II

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The final answer is guaranteed to fit into a signed 32-bit integer.

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

//Object version
var change = function (amount, arr) {
  let n = arr.length;

  // dp is a plain object: key = "start-remSum", value = answer for fn(remSum, start)
  const dp = {};

  function fn(remSum, start) {
    if (remSum === 0) return 1; // exact match -> 1 valid combination
    if (remSum < 0) return 0; // overshot -> invalid

    // Unique key for this state. The "-" separator avoids collisions
    // like (1, 23) vs (12, 3). Safe because neither value is negative here.
    const key = `${start}-${remSum}`;

    // Already solved this state? Return the saved answer.
    // Use `in`, not `if (dp[key])`, because a saved 0 is a valid answer.
    if (key in dp) return dp[key];

    let res = 0;
    for (let i = start; i < n; i++) {
      res += fn(remSum - arr[i], i); // stay at i: coin can be reused
    }

    // Save before returning so the next visit is instant
    dp[key] = res;
    return res;
  }

  return fn(amount, 0);
};
//but this will give tle error in leet code

//2d version
var change = function (amount, coins) {
  let n = coins.length;

  // dp[remS][start] = combinations to make remS using coins[start..n-1]
  // -1 = "not computed yet"
  let dp = Array.from({ length: amount + 1 }, () => Array(n).fill(-1));
  //                   ^^^^^^^^^^^^^^^^^^     ^^^^^^^^^^^^^^^^^^^
  //                   outer array: how many   each row: how many
  //                   rows (amount + 1)       columns (n)

  let fn = (remS, start) => {
    if (remS === 0) return 1; // exact match -> 1 combination
    if (remS < 0) return 0; // overshot -> invalid

    // already solved? return saved answer
    if (dp[remS][start] != -1) return dp[remS][start];

    let combinations = 0;

    // try each coin from `start` onward (never earlier -> no permutations)
    for (let i = start; i < n; i++) {
      // pass `i`, not i + 1: a coin can be reused
      combinations += fn(remS - coins[i], i);
    }

    // save and return
    return (dp[remS][start] = combinations);
  };

  return fn(amount, 0);
};

// Approach:
// Recursion with Memoization
// Define a function fn(remS, start) → number of ways to make remS using coins from index start onward.
// Use dp[remS][start] to cache results and avoid recomputation.
// Base cases are:
// If remS == 0 → found 1 valid combination → return 1.
// If remS < 0 → no valid way → return 0.
// From index start to end, try picking each coin: combinations += fn(remS - coins[i], i) // i instead of i+1 because coins[i] can be reused
// At last, Call fn(amount, 0) → total number of unique combinations to make amount.
// Time & Space Complexity:
// Time Complexity: O(amount * n)

// Space Complexity: O(amount * n)

// Dry Run
// Input: amount = 5, coins = [1, 2, 5]

// Initial:
//  n = 3
//  dp rows 0..5 × cols 0..2 initialized to -1

// Call fn(remS = 5, start = 0)

// fn(5,0):
//  combinations = 0
//  i = 0 → call fn(4,0)
//  i = 1 → call fn(3,1)
//  i = 2 → call fn(0,2)

// fn(4,0):
//  combinations = 0
//  i = 0 → fn(3,0)
//  i = 1 → fn(2,1)
//  i = 2 → fn(-1,2) = 0

//  fn(3,0):
//   combinations = 0
//   i = 0 → fn(2,0)
//   i = 1 → fn(1,1)
//   i = 2 → fn(-2,2) = 0

//   fn(2,0):
//    combinations = 0
//    i = 0 → fn(1,0)
//    i = 1 → fn(0,1) = 1
//    i = 2 → fn(-3,2) = 0

//    fn(1,0):
//     combinations = 0
//     i = 0 → fn(0,0) = 1
//     i = 1 → fn(-1,1) = 0
//     i = 2 → fn(-4,2) = 0
//     → combinations = 1
//     dp[1][0] = 1
//     return 1

//    Back in fn(2,0):
//    - from i=0 got 1 (fn(1,0))
//    - from i=1 got 1 (fn(0,1))
//    → combinations = 1 + 1 = 2
//    dp[2][0] = 2
//    return 2

//   Back in fn(3,0):
//   - from i=0 got 2 (fn(2,0))
//   - fn(1,1) next:

//   fn(1,1):
//    i = 1 → fn(-1,1) = 0
//    i = 2 → fn(-4,2) = 0
//    → combinations = 0
//    dp[1][1] = 0
//    return 0

//   → fn(3,0) combinations = 2 + 0 + 0 = 2
//   dp[3][0] = 2
//   return 2

//  fn(2,1):
//   i = 1 → fn(0,1) = 1
//   i = 2 → fn(-3,2) = 0
//   → combinations = 1
//   dp[2][1] = 1
//   return 1

//  Back in fn(4,0):
//  - from i=0 → fn(3,0) = 2
//  - from i=1 → fn(2,1) = 1
//  - i=2 → 0
//  → combinations = 2 + 1 = 3
//  dp[4][0] = 3
//  return 3

// fn(3,1) (from fn(5,0) i=1):
//  check dp[3][1] — not set
//  i=1 → fn(1,1) = 0 (from earlier)
//  i=2 → fn(-2,2) = 0
//  → combinations = 0
//  dp[3][1] = 0
//  return 0

// fn(0,2) (from fn(5,0) i=2):
//  remS === 0 → return 1

// Back in fn(5,0):
//  - from i=0 → fn(4,0) = 3
//  - from i=1 → fn(3,1) = 0
//  - from i=2 → fn(0,2) = 1
//  → combinations = 3 + 0 + 1 = 4
//  dp[5][0] = 4
//  return 4

// Some dp entries filled:
//  dp[1][0] = 1
//  dp[2][0] = 2
//  dp[3][0] = 2
//  dp[1][1] = 0
//  dp[2][1] = 1
//  dp[3][1] = 0
//  dp[4][0] = 3
//  dp[5][0] = 4

// Final:
//  fn(5,0) = 4
//  (combinations: [1+1+1+1+1], [1+1+1+2], [1+2+2], [5])

// Output: 4
