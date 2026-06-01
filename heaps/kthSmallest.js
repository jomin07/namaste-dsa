// 378. Kth Smallest Element in a Sorted Matrix
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: matrix = [[-5]], k = 1
// Output: -5

var kthSmallest = function (matrix, k) {
  let n = matrix[0].length;
  let heap = new MinPriorityQueue((x) => x.val);

  for (let i = 0; i < n; i++) {
    heap.push({ val: matrix[i][0], row: i, col: 0 });
  }

  for (let count = 0; count < k - 1; count++) {
    let { val, row, col } = heap.pop();
    if (col + 1 < n)
      heap.push({ val: matrix[row][col + 1], row: row, col: col + 1 });
  }

  return heap.pop().val;
};

// Approach
// Treat each row of the sorted matrix like a sorted list.
// Use a min-heap to store the smallest available element from each row.
// Initially, push the first element of each of the first min(n, k) rows into the heap.
// Repeatedly pop the smallest element from the heap and, if possible, push the next element from the same row.
// After popping k-1 times, the top of the heap is the k-th smallest element.
// Time Complexity:
// Time Complexity = 0(min(n,k) log(min(n,k))) = O(n log n)

// Space Complexity:
// Space Complexity = 0(Min(n,k))
