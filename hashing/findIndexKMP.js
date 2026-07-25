// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function (haystack, needle) {
  let h = haystack.length;
  let n = needle.length;
  let lps = [0];
  let i = 0;
  let j = 1;

  //building lps array
  while (j < n) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }

  //checking string with lps array
  i = j = 0;
  while (i < h) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }

    if (j === n) return i - j;
  }

  return -1;
};

// Approach
// Build LPS (Longest Prefix Suffix) Array for the needle:
// Helps in skipping repeated characters when a mismatch happens.
// lps[i] stores the length of the longest proper prefix which is also a suffix for needle[0...i].
// Search in haystack using LPS:
// Compare characters of haystack and needle.
// On mismatch, use the LPS array to shift the needle efficiently without rechecking characters.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(m)
