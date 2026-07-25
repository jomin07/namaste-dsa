// 205. Isomorphic Strings
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "f11", t = "b23"

// Output: false

// Explanation:

// The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]] && !map2[t[i]]) {
      map1[s[i]] = t[i];
      map2[t[i]] = s[i];
    }
    if (map1[s[i]] !== t[i] || map2[t[i]] !== s[i]) return false;
  }

  return true;
};

// Time & Space Complexity
// Time Complexity: O(n), where n is the length of the strings
// Space Complexity: O(1), as the mappings are bounded by character set size
