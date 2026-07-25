// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0, 1]

// Approach 1 (Brute-force: Two Pointers)
// Loop through all pairs of elements in the array using two nested loops.
// For each pair (i, j), check if nums[i] + nums[j] === target.
// If yes, return the indices [i, j].
// Time Complexity:
// Time Complexity = O(n2)

// Space Complexity:
// Space Complexity = O(1)

var twoSum = function (nums, target) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

// Optimal Approach: HashMap

// Store all elements with their indices in a map (map[nums[i]] = i).
// Iterate through the array again to find the complement (target - nums[i]).
// Check if the complement exists in the map and is not the same index.
// Return the pair of indices [i, map[complement]] as the result.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)

var twoSum = function (nums, target) {
  let n = nums.length;
  let map = {};

  for (let i = 0; i < n; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    let pairToFind = target - nums[i];
    if (pairToFind in map && map[pairToFind] !== i) {
      return [i, map[pairToFind]];
    }
  }
};

//one iteration solution
var twoSum = function (arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];

    if (map.has(compliment)) return [map.get(compliment), i];
    map.set(arr[i], i);
  }
};
