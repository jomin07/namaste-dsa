// 1094. Car Pooling

// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true

var carPooling = function (trips, capacity) {
  let arr = Array(1000).fill(0);
  let used = 0;

  for (let i = 0; i < trips.length; i++) {
    let [people, from, to] = trips[i];
    arr[from] += people;
    arr[to] -= people;
  }

  for (let i = 0; i < 1000; i++) {
    used += arr[i];
    if (used > capacity) return false;
  }

  return true;
};

// Approach:
// Create an array loc[1001] to track passenger changes at each location.
// At pickup point from, add +passengers.
// At drop point to, subtract -passengers.
// Traverse loc while maintaining usedCapacity.
// Keep adding changes at each location.
// If usedCapacity ever exceeds carCapacity, return false.
// If the loop completes without exceeding capacity, return true.
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(1)

// Input: arr = [[2,1,5],[3,3,7]], carCapacity = 4

// Step 0: Start Function: carPooling(arr, carCapacity)
// arr = [[2,1,5], [3,3,7]]
// carCapacity = 4
// loc = Array(1001).fill(0)
// usedCapacity = 0

// Step 1: Process trips
// Iteration (i = 0): arr[0] = [2,1,5]
// - passengers = 2, from = 1, to = 5
// - loc[1] = loc[1] + 2 → loc[1] = 2
// - loc[5] = loc[5] - 2 → loc[5] = -2

// Iteration (i = 1): arr[1] = [3,3,7]
// - passengers = 3, from = 3, to = 7
// - loc[3] = loc[3] + 3 → loc[3] = 3
// - loc[7] = loc[7] - 3 → loc[7] = -3

// Final loc changes (only relevant indices):
// loc[1] = 2, loc[3] = 3, loc[5] = -2, loc[7] = -3

// Step 2: Iterate over loc to check capacity
// i = 0: usedCapacity = 0 + loc[0] = 0
// i = 1: usedCapacity = 0 + 2 = 2 → (≤ 4, OK)
// i = 2: usedCapacity = 2 + 0 = 2 → (≤ 4, OK)
// i = 3: usedCapacity = 2 + 3 = 5 → (> 4, exceeds capacity)

// Condition triggered → return false

// Step 3: End
// Function returns false because at i = 3, usedCapacity exceeded carCapacity
