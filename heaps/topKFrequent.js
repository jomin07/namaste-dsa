// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

var topKFrequent = function (arr, k) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }

  let pq = new MinPriorityQueue((x) => x.freq);
  for (let key in map) {
    pq.push({ value: key, freq: map[key] });
    if (pq.size() > k) pq.pop();
  }

  return pq.toArray().map((x) => Number(x.value));
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
