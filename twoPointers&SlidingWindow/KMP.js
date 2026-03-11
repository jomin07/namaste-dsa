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
  let i = 0;
  let j = 1;
  let lps = [0];

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

    if (j === n) return i - n;
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

// Time Complexity = O(n)
// Space Complexity = O(m)

// Dry Run
// Input: haystack = "hello", needle = "ll"

// Step 1: Build LPS (Longest Prefix Suffix) array for needle = "ll"

// needle = "ll"
// Initialize: lps = [0]
// i = 0, j = 1

// Compare needle[1] === needle[0] → 'l' === 'l' → match
// → lps[1] = i + 1 = 1
// → i = 1, j = 2

// End of loop → Final LPS = [0, 1]

// Step 2: Search needle in haystack using KMP

// haystack = "hello", needle = "ll"
// n = 5, m = 2

// Initialize: i = 0, j = 0

// Compare haystack[0] = 'h', needle[0] = 'l' → mismatch
// → j == 0 → i++ → i = 1

// Compare haystack[1] = 'e', needle[0] = 'l' → mismatch
// → j == 0 → i++ → i = 2

// Compare haystack[2] = 'l', needle[0] = 'l' → match
// → i++, j++ → i = 3, j = 1

// Compare haystack[3] = 'l', needle[1] = 'l' → match
// → i++, j++ → i = 4, j = 2

// Now j == m → full match found
// → return i - m = 4 - 2 = 2
