// 62. Unique Paths

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

var uniquePaths = function (m, n) {
  let dp = Array.from({ length: m }, () => Array(n).fill(-1));
  function fn(x, y) {
    if (x === 0 || y === 0) return 1;
    if (x < 0 || y < 0) return -1;
    if (dp[x][y] !== -1) return dp[x][y];
    dp[x][y] = fn(x - 1, y) + fn(x, y - 1);
    return dp[x][y];
  }
  return fn(m - 1, n - 1);
};

// Approach:
// DP Definition: Let dp[i][j] represent the number of unique paths to reach cell (i,j)
// Bases cases are like this:
// First row → Only one way (all moves right).
// First column → Only one way (all moves down).
// Transition: To reach (i,j), you can come from:
// Above: (i-1, j)
// Left: (i, j-1)
// Final result is at bottom-right cell → dp[m-1][n-1].
// Time & Space Complexity:
// Time Complexity: O(m * n)

// Space Complexity: O(m * n)

// Dry Run
// Input: m = 3, n = 3

// Initial dp matrix (all -1):
// [[-1, -1, -1],
//  [-1, -1, -1],
//  [-1, -1, -1]]

// Step 1: Fill first column with 1
// [[1, -1, -1],
//  [1, -1, -1],
//  [1, -1, -1]]

// Step 2: Fill first row with 1
// [[1, 1, 1],
//  [1, -1, -1],
//  [1, -1, -1]]

// Step 3: Fill remaining cells using dp[i][j] = dp[i-1][j] + dp[i][j-1]

//  i = 1, j = 1:
//    dp[1][1] = dp[0][1] + dp[1][0] = 1 + 1 = 2
//    [[1, 1, 1],
//     [1, 2, -1],
//     [1, -1, -1]]

//  i = 1, j = 2:
//    dp[1][2] = dp[0][2] + dp[1][1] = 1 + 2 = 3
//    [[1, 1, 1],
//     [1, 2, 3],
//     [1, -1, -1]]

//  i = 2, j = 1:
//    dp[2][1] = dp[1][1] + dp[2][0] = 2 + 1 = 3
//    [[1, 1, 1],
//     [1, 2, 3],
//     [1, 3, -1]]

//  i = 2, j = 2:
//    dp[2][2] = dp[1][2] + dp[2][1] = 3 + 3 = 6
//    [[1, 1, 1],
//     [1, 2, 3],
//     [1, 3, 6]]

// Final dp matrix:
// [[1, 1, 1],
//  [1, 2, 3],
//  [1, 3, 6]]

// Answer = dp[m-1][n-1] = dp[2][2] = 6

// Output: 6
