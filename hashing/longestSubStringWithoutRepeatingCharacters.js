// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  let i = (maxL = 0);
  let map = {};

  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
      map[s[j]] = j;
    } else {
      maxL = Math.max(j - i + 1, maxL);
      map[s[j]] = j;
    }
  }

  return maxL;
};

// Approach
// Using two pointers i and j to form a sliding window that keeps track of the current substring without repeating characters.

// A hash map map stores the most recent index of each character.
// If we encounter a repeating character that’s within the current window, we move the start pointer i just after its last occurrence.
// At each step, we calculate the window size and update the maximum length maxWS.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
