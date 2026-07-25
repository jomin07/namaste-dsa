// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        ++count;
        break;
      }
    }
  }
  return count;
};

// Approach 1 :
// Use two nested loops: Outer loop over stones, inner loop over jewels.
// If a character in stones matches any in jewels, increment the count.
// Break inner loop once matched to avoid redundant checks.
// Time and Space Complexity:
// Time Complexity: O(m × n) — where m is the length of stones and n is the length of jewels.
// Space Complexity: O(1) — constant extra space. //max 52 English letters

var numJewelsInStones = function (jewels, stones) {
  let jSet = new Set(jewels);
  let count = 0;
  for (let c of stones) {
    if (jSet.has(c)) count++;
  }
  return count;
};

// Approach:
// Use a Set (or hash set) to store all characters from jewels.
// Loop through each character in stones.
// Increment a counter for every character found in the jewels set.
// Time and Space Complexity:
// Time Complexity: O(n + m), where n is the length of jewels and m is the length of stones.
// Space Complexity: O(1) for storing unique characters from jewels.
