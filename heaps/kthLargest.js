// 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  return pq.front();
};

// Approach:
// Use a min-heap to store the largest k elements.
// Traverse each number in nums and push it into the heap.
// If the heap size exceeds k, remove the smallest element (heap root).
// After processing all elements, the heap’s top (smallest in the heap) will be the k-th largest in the array.
// Time Complexity:
// Time Complexity = O(n log k)

// Space Complexity:
// Space Complexity = O(K)

// Input: nums = [3, 2, 1, 5, 6, 4] k = 2

// State Transitions:

// Initialize: pq = MinPriorityQueue()

// i = 0 → nums[0] = 3
// → pq.enqueue(3) → pq = [3]

// i = 1 → nums[1] = 2
// → pq.enqueue(2) → pq = [2, 3]  (min-heap: 2 is root)

// i = 2 → nums[2] = 1
// → pq.enqueue(1) → pq = [1, 3, 2]
// → pq.size() = 3 > k (2) → pq.dequeue() removes smallest (1)
// → pq = [2, 3]

// i = 3 → nums[3] = 5
// → pq.enqueue(5) → pq = [2, 3, 5]
// → pq.size() = 3 > k → pq.dequeue() removes smallest (2)
// → pq = [3, 5]

// i = 4 → nums[4] = 6
// → pq.enqueue(6) → pq = [3, 5, 6]
// → pq.size() = 3 > k → pq.dequeue() removes smallest (3)
// → pq = [5, 6]

// i = 5 → nums[5] = 4
// → pq.enqueue(4) → pq = [4, 6, 5]
// → pq.size() = 3 > k → pq.dequeue() removes smallest (4)
// → pq = [5, 6]

// Final Output: 5

// Explanation: pq.front() returns the smallest in the heap → the 2nd largest element overall.
