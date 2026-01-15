// 912. Sort an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let leftArray = sortArray(nums.slice(0, mid));
  let rightArray = sortArray(nums.slice(mid));

  return merge(leftArray, rightArray);
};

function merge(leftArray, rightArray) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      res.push(leftArray[i]);
      i++;
    } else {
      res.push(rightArray[j]);
      j++;
    }
  }

  return [...res, ...leftArray.slice(i), ...rightArray.slice(j)];
}

let arr = [5, 1, 2, 3, 4];
console.log(sortArray(arr));

// Merge Sort
// Merge Sort is a popular divide-and-conquer sorting algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves into one sorted result.
// It is an example of a stable sort that guarantees O(n log n) performance in all cases — best, worst, and average.
// Approach:
// Divide: Split the array into two halves.
// Conquer: Recursively sort each half using merge sort.
// Combine: Merge the two sorted halves into one sorted array.
// Key Concept: Merge Step
// The key step is merging two sorted arrays efficiently into one sorted array.
// This is done using a two-pointer approach, comparing elements from both arrays and adding the smaller one into a new result array.
// Time & Space Complexity:
// Time Complexity: O(n log n) Divide takes log n steps and merging takes linear time.

// Space Complexity: O(n) Additional space is needed to store the merged arrays.

// Dry Run
// Input: nums = [4, 5, 1, 3, 9]

// Step 1: sortArray([4, 5, 1, 3, 9])
// mid = 2
// left = sortArray([4, 5])
// right = sortArray([1, 3, 9])

// ---
// Step 2: sortArray([4, 5])
// mid = 1
// left = sortArray([4]) → [4]  (base case)
// right = sortArray([5]) → [5] (base case)
// merge([4], [5]) → [4, 5]

// ---
// Step 3: sortArray([1, 3, 9])
// mid = 1
// left = sortArray([1]) → [1]  (base case)
// right = sortArray([3, 9])

// Step 4: sortArray([3, 9])
// mid = 1
// left = sortArray([3]) → [3]  (base case)
// right = sortArray([9]) → [9] (base case)
// merge([3], [9]) → [3, 9]

// merge([1], [3, 9]) → [1, 3, 9]

// ---
// Step 5: merge([4, 5], [1, 3, 9])
// Compare 4 and 1 → take 1 → [1]
// Compare 4 and 3 → take 3 → [1, 3]
// Compare 4 and 9 → take 4 → [1, 3, 4]
// Compare 5 and 9 → take 5 → [1, 3, 4, 5]
// Remaining → [9] → [1, 3, 4, 5, 9]

// Final Sorted Array: [1, 3, 4, 5, 9]

// Output: [1, 3, 4, 5, 9]

//                     sortArray([4,1,3,2])
//                            ⬇️
//             ┌────────────────────────────┐
//             ⬇️                            ⬇️
//      sortArray([4,1])              sortArray([3,2])
//             ⬇️                            ⬇️
//        ┌─────────┐                   ┌─────────┐
//        ⬇️        ⬇️                   ⬇️        ⬇️
// sortArray([4]) sortArray([1])   sortArray([3]) sortArray([2])
//      ⬆️              ⬆️                ⬆️              ⬆️
//    return [4]     return [1]        return [3]     return [2]
//        └───────────⬆️                    └───────────⬆️
//             merge([4],[1]) → [1,4]          merge([3],[2]) → [2,3]
//                     ⬆️                            ⬆️
//             return [1,4]                  return [2,3]
//                         └──────────────⬆️──────────────┘
//                        merge([1,4],[2,3]) → [1,2,3,4]
//                                    ⬆️
//                            return [1,2,3,4]
