// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
//     - 4 is underlined in nums2 =[1, 2, 3, 4].There is no next greater element, so the answer is - 1.

var nextGreaterElement = function (arr1, arr2) {
  let stack = [];
  let ans = [];
  let map = {};
  let n = arr2.length;

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length) {
      if (arr2[i] < stack[stack.length - 1]) {
        map[arr2[i]] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) map[arr2[i]] = -1;
    stack.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    ans.push(map[arr1[i]]);
  }

  return ans;
};

//     Approach:
// Initialize an empty map to store each element’s next greater in nums2
// Use a stack to process nums2 from right to left.
// For each element:
// Pop smaller elements from the stack (they can't be NGE).
// If stack has a greater element, that’s the NGE.
// If not, NGE is -1.
// Push current element onto the stack.
// Build the answer by mapping elements from nums1 using the precomputed values from the map.
// Return the result array.

// Time Complexity:
// Time Complexity = O(n + m)

// Think of it like tickets

// Each element gets:

// One push ticket
// One pop ticket

// Example:

// [1,3,4,2]
// Element	Pushes	Pops
// 1	1	1
// 3	1	1
// 4	1	0
// 2	1	1

// Total operations:

// Pushes ≤ n
// Pops   ≤ n

// Therefore:

// 2n operations

// which simplifies to:

// O(n)
// When would it actually be O(n²)?

// If elements could be popped repeatedly.

// For example:

// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         // work
//     }
// }

// Here the inner loop runs n times for every outer iteration:

// n × n = n²

// But in your stack solution, once an element is popped:

// stack.pop();

// it's gone forever and can never be popped again.

// That's why the while loop is said to have amortized O(1) cost per element, making the whole monotonic-stack algorithm O(n) rather than O(n²).

// A common interview phrase is:

// "Each element is pushed onto the stack once and popped from the stack at most once, so the total number of stack operations is O(n)."

// Space Complexity:
// Space Complexity = O(n)
