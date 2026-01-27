// 541. Reverse String II
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

var reverseStr = function (s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i = i + 2 * k) {
    let l = i;
    let r = i + k - 1;

    while (l < r) {
      let temp = s[l];
      s[l] = s[r];
      s[r] = temp;
      l++;
      r--;
    }
  }
  return s.join("");
};

// Time & Space Complexity
// Time Complexity: O(n), where n = length of the string. Not O(n^2) becuase loop is running only lesser time
// Space Complexity: O(1) in languages which string is mutable if in-place, else O(n) becuase need to create the array.

// var reverseStr = function (s, k) {
//     s = s.split("")

//     for (let x = 0; x < s.length; x = x + (2 * k)) {
//         let n = Math.min(k, s.length - x)
//         let mid = Math.floor(n / 2)
//         for (let i = 0; i < mid; i++) {
//             let temp = s[x + i]
//             s[x + i] = s[x + n - 1 - i]
//             s[x + n - 1 - i] = temp
//         }
//     }
//     return s.join("")
// };
