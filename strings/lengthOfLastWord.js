// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

var lengthOfLastWord = function (s) {
  let flag = false;
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
      flag = true;
    } else {
      if (flag) return count;
    }
  }

  return count;
};

// Approach using single loop:
//     var lengthOfLastWord = function(s) {
//     let n = s.length-1;
//     let count = 0;
//     while(n >= 0){
//         if(s[n] !== " "){
//             count++;
//         }else if(count > 0) return count;
//         n--;
//     }

//     return count;
// };
// Start from the end and skip trailing spaces.
// Count characters until the next space or beginning of string.
// This gives the length of the last word efficiently.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

// Approach using 2 loops:
// Start from the end of the string and skip any trailing spaces.
// Count the number of characters in the last word until a space or the beginning of the string is reached.
// This ensures we efficiently find the last word without extra space.
// Time and Space Complexity:
// Time Complexity: O(n) — Traverse the string once from the end.
// Space Complexity: O(1) — No extra space used apart from counters.

// var lengthOfLastWord = function(s) {
//     let n = s.length - 1;
//     while (n >= 0 && s[n] === ' ') n--;

//     let count = 0;
//     while (n >= 0 && s[n] !== ' ') {
//         count++;
//         n--;
//     }

//     return count;
// };
