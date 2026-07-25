// 239. Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var maxSlidingWindow = function (arr, k) {
  let i = (j = 0);
  let q = [];
  let res = [];

  while (j < arr.length) {
    //pop elements from q smaller than the current j element coming from arr
    while (q.length && arr[j] > q[q.length - 1]) q.pop();

    q.push(arr[j]);

    if (j >= k - 1) {
      res.push(q[0]);
      //shift element from q if it is the ith element before moving i forward
      if (arr[i] === q[0]) q.shift();
      i++;
    }
    j++;
  }
  return res;
};

// Approach
// Initialize:
// res[] to store result.
// q[] to store elements in decreasing order (front always holds the max).
// Two pointers: i (window start) and j (window end).
// Traverse the array:
// Remove elements from the back of the queue if they are smaller than current (arr[j]), since they can't be max.
// Add arr[j] to the queue.
// When window size k is hit (j >= k - 1):
// Push the front of the queue to res (it's the current max).
// If the element going out of the window (arr[i]) is equal to the front of the queue, remove it (q.shift()).
// Move window ahead by incrementing i.
// Return the result array res.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(n)
