// 2942. Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
// Example 3:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []
// Explanation: "z" does not occur in any of the words. Hence, we return an empty array.

var findWordsContaining = function (words, x) {
  if (words.length === 0) return [];
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }

  return res;
};

// Approach:
// Use two nested loops: Outer loop for each word, inner loop for each character in the word.
// If character x is found in a word, push its index to the result array and break.
// Time and Space Complexity:
// Time Complexity: O(m × n) — where m is the number of words, and n is the max length of a word.
// Space Complexity: O(1) — constant extra space (excluding result array).
