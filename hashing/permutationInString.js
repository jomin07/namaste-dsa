// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

var checkInclusion = function (s1, s2) {
  let n = s1.length;
  let s = s2.length;

  let hashW = Array(26).fill(0);
  let hashS = Array(26).fill(0);

  let i = 0;
  let j = n - 1;

  for (let i = 0; i < n; i++) {
    hashW[s1.charCodeAt(i) - 97]++;
    hashS[s2.charCodeAt(i) - 97]++;
  }

  while (j < s) {
    if (isSame(hashS, hashW)) {
      return true;
    } else {
      hashS[s2.charCodeAt(i) - 97]--;
      i++;
      j++;
      hashS[s2.charCodeAt(j) - 97]++;
    }
  }

  return false;
};

function isSame(hash1, hash2) {
  for (let i = 0; i < 26; i++) {
    if (hash1[i] !== hash2[i]) return false;
  }

  return true;
}

// Approach
// Use two frequency arrays hashS and hashW of size 26 to count character occurrences (assuming lowercase English letters).
// Fill both arrays with frequencies from s1 and the first window of s2 of length equal to s1.
// Slide the window across s2 one character at a time:
// At each step, compare the two frequency arrays using isHashSame().
// If they match, it means a permutation of s1 is present in s2, so return true.
// Otherwise, update the window by removing the leftmost character and adding the next character.
// If no match is found till the end, return false.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(1)
