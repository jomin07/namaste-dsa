// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = "2"
// Output: ["a", "b", "c"]

var letterCombinations = function (digits) {
  let res = [];
  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backtrack(path, index) {
    if (path.length === digits.length) {
      res.push([...path].join(""));
      return;
    }
    let curr = letters[digits[index]];
    for (let i = 0; i < curr.length; i++) {
      path.push(curr[i]);
      backtrack(path, index + 1);
      path.pop();
    }
  }
  backtrack([], 0);
  return res;
};

// Approach
// Mapping digits → letters (like on a phone keypad).
// Use backtracking to build all possible strings:
// At each digit, try every possible letter.
// Add the letter to the current path, recurse for the next digit.
// When the path length equals the number of digits → add to result.
// Return the collected results.
// Time Complexity
// Time Complexity = O(3N * 4M)

// Space Complexity
// Space Complexity = O(N) (output) + O(n) (stack)
