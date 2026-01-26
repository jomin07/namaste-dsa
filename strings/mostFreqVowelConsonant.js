// 3541. Find Most Frequent Vowel and Consonant

// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
// Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.

var maxFreqSum = function (s) {
  if (s.length === 0) return 0;

  let freq = {};
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  let maxV = (maxC = 0);

  for (let [key, value] of Object.entries(freq)) {
    if (
      key === "a" ||
      key === "e" ||
      key === "i" ||
      key === "o" ||
      key === "u"
    ) {
      if (value > maxV) maxV = value;
    } else {
      if (value > maxC) maxC = value;
    }
  }

  return maxV + maxC;
};

// Time & Space Complexity
// Time Complexity: O(n), where n = length of the string
// Space Complexity: O(k), where k = number of unique characters (at most 26 lowercase letters)

//T.C and S.C of this obj is O(1) because max time it can run is for 26  and max space it can take is 52
