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
  let set = new Set(jewels);
  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
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

//T.C for search in set is O(1) whereas in array it is O(n)

//Set wont contain duplicates and hence max set length here is 26 * 2 = 52 alphabets(small & capital)

//if it is an array of numbers, S.C would be O(n) as it can have upto any numbers.
//if it is string, use set if possible.
