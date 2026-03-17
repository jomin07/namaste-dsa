// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var characterReplacement = function (s, k) {
  let map = {};
  let i = 0;
  let maxFreq = 0;
  let maxL = 0;

  for (let j = 0; j < s.length; j++) {
    map[s[j]] = (map[s[j]] || 0) + 1;

    maxFreq = Math.max(maxFreq, map[s[j]]);

    while (j - i + 1 - maxFreq > k) {
      map[s[i]]--;
      i++;
    }

    maxL = Math.max(maxL, j - i + 1);
  }

  return maxL;
};

// ❗ BUT IMPORTANT

// Even if window is wrongly considered valid:

// 👉 That window size was already achieved earlier
// 👉 When maxFreq was correct

// So:

// we never record a fake larger answer
// 🧠 Golden Intuition

// 👉 The algorithm is not trying to validate every window perfectly

// 👉 It is trying to:

// find the maximum possible window length

// And for that:

// Slightly overestimating is OK

// Underestimating would be dangerous ❌

// 🚀 Why this trick works (Final clarity)

// maxFreq is:

// "maximum frequency we have EVER seen in the window while expanding"

// So any window size we accept:

// 👉 Was achievable at some earlier point
// 👉 Therefore valid answer exists

// 🔥 Final One-Line Understanding

// Even if maxFreq becomes incorrect, it only allows slightly larger windows, but those sizes were already achievable earlier, so the final answer remains correct.

// 🎯 Interview Gold Line

// If interviewer pushes hard:

// We allow maxFreq to be stale because it never causes an overestimation of the answer — it only delays shrinking, and any recorded window length must have been valid at some earlier stage.

// ✅ Time Complexity (TC)
// 👉 Answer:
// O(n)
// ❓ Why O(n) (even with while loop?)

// Your code:

// for (let j = 0; j < s.length; j++) {
//     while (...) {
//         i++;
//     }
// }

// Looks like nested loops → but it’s not O(n²).

// 🔥 Key Insight

// 👉 Both pointers move only forward

// j → moves from 0 → n-1

// i → also moves from 0 → n-1

// 💡 Total movements

// j runs n times

// i also runs at most n times

// So total operations:

// O(n + n) = O(n)
// 🎯 Intuition

// Each character is:

// added once (by j)

// removed once (by i)

// 👉 So work per element is constant.

// ❗ Important Interview Line

// Even though there is a nested loop, each pointer moves only forward, so the total number of operations is linear.

// ✅ Space Complexity (SC)
// 👉 Answer:
// O(1)
// ❓ Why O(1)?
// let map = {};

// This stores character frequencies.

// 🔥 Constraint

// The string contains:

// uppercase English letters (A–Z)

// So max size of map:

// 26
// 💡 Therefore
// O(26) ≈ O(1)

// Constant space.

// ⚠️ General Case

// If string had all Unicode characters:

// O(n)

// But for this problem:

// O(1)
// 🎯 Final Interview Answer
// Time Complexity:

// O(n), because both pointers move forward and each element is processed at most twice.

// Space Complexity:

// O(1), because we store frequencies of at most 26 uppercase characters.
