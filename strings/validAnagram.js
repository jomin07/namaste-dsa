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
  let freq = {};

  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (!freq[t[j]] || freq[t[j]] === 0) return false;
    freq[t[j]]--;
  }

  for (let count of Object.values(freq)) {
    if (count !== 0) return false;
  }

  return true;
};

// Time Complexity: O(n), where n is the length of the strings
// Space Complexity: O(1), since the character set is limited to 26 lowercase letters
