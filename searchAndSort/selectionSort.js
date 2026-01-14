function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([5, 3, 1, 6, 2]));

// Selection Sort
// Selection Sort is a simple comparison-based sorting algorithm.
// It divides the array into two parts: a sorted subarray and an unsorted subarray.
// Initially, the sorted part is empty, and the unsorted part is the entire array.
// In each iteration, it finds the minimum element from the unsorted part and moves it to the end of the sorted part.
// Example 1:
// Input: [4, 5, 1, 3, 9]

// Output: [1, 3, 4, 5, 9]

// Approach:
// Iterate over the array from index 0 to n-2.
// For each index i, assume the element at i is the minimum in the unsorted part.
// Run an inner loop from j = i+1 to n-1 to find the actual minimum element.
// If a smaller element is found, update the min index.
// After the inner loop, swap the element at i with the element at min (if they’re not the same).
// Repeat until the array is sorted.
// Time & Space Complexity:
// Time Complexity: O(n2) In all cases best, average and worst.

// Roughly n*(n-1)/2 comparisons are always performed.

// Space Complexity: O(1) Selection Sort is an in-place sorting algorithm, so it doesn’t require extra space.
