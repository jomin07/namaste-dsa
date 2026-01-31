// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let x = 0;

  while (x < strs[0].length) {
    let char = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][x] !== char || x === strs[i].length) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0];
};

Time & Space Complexity
Time Complexity: O(n·m), where n is the number of strings and m is the length of the shortest string
Space Complexity: O(1), as no extra space is used apart from variables