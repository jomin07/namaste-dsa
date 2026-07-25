// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedKey = strs[i].split("").sort().join("");
    if (!map[sortedKey]) {
      map[sortedKey] = [strs[i]];
    } else {
      map[sortedKey].push(strs[i]);
    }
  }

  return Object.values(map);
};

// Time & Space Complexity
// Time Complexity: O(n·k·log k), where n is the number of strings and k is the average length of each string (due to sorting)
// Space Complexity: O(n·k), for storing grouped anagrams
