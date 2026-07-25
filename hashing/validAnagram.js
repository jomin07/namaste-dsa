// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) return false;
    map[t[i]]--;
  }
  return true;
};

// Time & Space Complexity
// Time Complexity: O(n), where n is the length of the strings
// Space Complexity: O(1), since the character set is limited to 26 lowercase letters
