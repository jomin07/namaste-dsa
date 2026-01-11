// 485. Max Consecutive Ones

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else count = 0;
    if (count > maxCount) maxCount = count;
  }
  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
