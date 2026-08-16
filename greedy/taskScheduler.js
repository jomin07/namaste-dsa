// 621. Task Scheduler

// You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

// Return the minimum number of CPU intervals required to complete all tasks.

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2

// Output: 8

// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

// After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

// Example 2:

// Input: tasks = ["A","C","A","B","D","B"], n = 1

// Output: 6

// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

// With a cooling interval of 1, you can repeat a task after just one other task.

// Example 3:

// Input: tasks = ["A","A","A", "B","B","B"], n = 3

// Output: 10

// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

// There are only two types of tasks, A and B, which need to be separated by 3 intervals.This leads to idling twice between repetitions of these tasks.

// Approach:
// Count frequency of each task (A–Z).
// Find the maximum frequency (maxFreq) — the most repeated task.
// Count how many tasks have this maximum frequency (countOfMaxFreqCharacters).
// Compute the ideal cycles needed to schedule these most frequent tasks with cooldowns:
// -> (n+1)×(maxFreq−1)+countOfMaxFreqCharacters
// (n+1) → each group of task + cooldown.
// (maxFreq - 1) → groups formed except last one.
// countOfMaxFreqCharacters → handles ties of max frequency tasks
// The result is the maximum of:
// arr.length (if enough tasks to fill gaps)
// cycles (if idle slots are unavoidable)
// Time & Space Complexity:
// Time Complexity: O(arr.length)

// Space Complexity: O(1)
