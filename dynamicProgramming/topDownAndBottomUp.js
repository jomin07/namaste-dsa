// Two ways to implement Dynamic Programming:
// 1. Bottom-Up (Tabulation): This approach uses iteration to solve the problem.

// 2. Top-Down (Memoization): This approach uses recursion along with memoization.>

// Top-Down Approach

// The image with fib(6) demonstrates the Top-Down approach using recursion and memoization.

// Where should we store the values?

// We can store them in an array, map, object, or other data structures. Fetching data from a map or object is generally very fast.

// Now, let’s solve the Fibonacci number problem using the Top-Down approach.

// Problem Statement
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1 F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

// Code:

//             let store = {}
//             var fib = function(n) {
//                 if(n <= 1) {
//                     return n;
//                 }
//                 if(!store[n]){
//                     store[n] = fib(n - 1) + fib(n - 2);
//                 }
//                 return store[n];
//             };

// Dry Run
// Input: n = 5

// Step 0: Start Function fib(5)
// store = {}

// fib(5):
// - n = 5 (not <= 1)
// - store[5] not present
// - Compute fib(4) + fib(3)

// fib(4):
// - n = 4
// - store[4] not present
// - Compute fib(3) + fib(2)

//   fib(3):
//   - n = 3
//   - store[3] not present
//   - Compute fib(2) + fib(1)

//     fib(2):
//     - n = 2
//     - store[2] not present
//     - Compute fib(1) + fib(0)

//       fib(1) = 1 (base case)
//       fib(0) = 0 (base case)
//       → store[2] = 1 + 0 = 1

//     fib(1) = 1 (base case)

//     → store[3] = fib(2) + fib(1) = 1 + 1 = 2

//   fib(2): Already in store → return 1

//   → store[4] = fib(3) + fib(2) = 2 + 1 = 3

// fib(3):
// - Already in store → 2

// → store[5] = fib(4) + fib(3) = 3 + 2 = 5

// Step 3: End
// Return store[5] = 5

// Output: 5

// Bottom Up Approach
// This approach uses iteration.

// E.g: Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13,. . .

// When we build the solution in this way, it is called the Bottom-Up approach.
// Basically, we move from 0 to n (instead of n to 0, which we use in the Top-Down recursive approach). For iteration, we typically use loops such as for or while.
// Problem Statement
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// Fib(i) = fib(i-1) + fib(i-2)

//     var fib = function(n) {
//         let dp = [0, 1];
//         for(let i=2; i<=n; i++){
//             dp[i] = dp[i-1] + dp[i-2];
//         }
//         return dp[n];
//     };

// This approach is known as Bottom-Up.

// Comparison of the Top-Down and Bottom-Up Approaches

// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//top-down
let dp = {};
var fib = function (n) {
  if (n < 2) return n;

  if (!dp[n]) {
    dp[n] = fib(n - 2) + fib(n - 1);
  }

  return dp[n];
};

//bottom-up
var fib = function (n) {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[n];
};
