// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

var permute = function (arr) {
  let res = [];
  function backtrack(path) {
    if (path.length === arr.length) res.push([...path]);
    for (let i = 0; i < arr.length; i++) {
      if (!path.includes(arr[i])) {
        path.push(arr[i]);
        backtrack(path);
        path.pop();
      }
    }
  }
  backtrack([]);
  return res;
};

//Optimised
var permute = function (arr) {
  let res = [];
  let used = new Set();
  function backtrack(path) {
    if (path.length === arr.length) res.push([...path]);
    for (let i = 0; i < arr.length; i++) {
      if (!used.has(arr[i])) {
        path.push(arr[i]);
        used.add(arr[i]);
        backtrack(path);
        path.pop();
        used.delete(arr[i]);
      }
    }
  }
  backtrack([]);
  return res;
};
// Approach 1:
// Maintain a path array for the current permutation.
// At each step, try adding an unused element from arr.
// If path length equals n, push a copy to result.
// Backtrack by removing the last element and trying the next option.
// Time Complexity:
// Time Complexity = O(n × n!)

// Namaste DSA's Analysis

// He is likely saying:

// Total permutations = n!
// Length of each permutation = n

// To output/store each permutation:

// res.push([...path]);

// takes:

// O(n)

// and happens:

// n! times

// Therefore:

// O(n × n!)

// This is the standard answer you'll see in most DSA courses and interviews.

// Where does O(n² × n!) come from?

// If we analyze your exact code:

// if (!path.includes(arr[i]))

// includes() itself costs O(n).

// So we're adding extra work beyond generating the permutations.

// Technically:

// Permutation generation cost: O(n × n!)
// Membership checks: O(n² × n!)

// So a strict analysis gives:

// O(n² × n!)
// Why do many teachers still say O(n × n!)?

// Because factorial dominates everything:

// n!

// grows enormously fast.

// For backtracking problems, people often focus on:

// Number of solutions × cost to build one solution

// which gives:

// O(n × n!)

// and ignore the implementation detail of whether membership checking is O(1) or O(n).

// Space Complexity:
// Space Complexity = O(n) for recursion + O(n!) output storage.

//Optimised

// Original Code
// if (!path.includes(arr[i]))
// Set Version
// if (!used.has(arr[i]))

// The time complexity improves, but the space complexity stays the same.

// Why is TC better?
// Original
// path.includes(arr[i])

// To check whether 3 is in:

// [1,2,3]

// JavaScript may scan the whole array.

// O(n)

// for each check.

// Set Version
// used.has(arr[i])

// Hash lookup:

// O(1)

// average case.

// So:

// Original: O(n² × n!)
// Set:      O(n × n!)
// Why is SC still O(n)?

// Let's look at what each solution stores during recursion.

// Original
// path = [1,2,3]

// Maximum size:

// n

// Recursion depth:

// n

// So:

// O(n)

// auxiliary space.

// Set Version

// Now we have:

// path = [1,2,3]
// used = {1,2,3}

// Maximum sizes:

// path -> n
// used -> n

// Total:

// n + n = 2n

// In Big-O:

// O(2n) = O(n)

// because constants are ignored.

// Example: n = 4

// Original:

// path = [1,2,3,4]

// Memory ≈ 4 elements

// Set version:

// path = [1,2,3,4]
// used = {1,2,3,4}

// Memory ≈ 8 elements

// But Big-O sees:

// 4  -> O(n)
// 8  -> O(n)

// Both grow linearly with n.

// Intuition

// You improved lookup speed by spending a little extra memory.

// This is a classic tradeoff:

// More memory → Faster lookups

// But since both memory usages grow linearly:

// Original: O(n)
// Set:      O(n)

// the asymptotic space complexity remains the same.

// That's why interviewers would say:

// Version	Time	Space
// path.includes()	O(n² × n!)	O(n)
// Set.has()	O(n × n!)	O(n)
