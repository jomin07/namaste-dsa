// Dry Run
// Input 1: "race a car"

// Lowercase: "race a car"
// Compare ‘r’ and ‘r’ → match
// Compare ‘a’ and ‘a’ → match
// Compare ‘c’ and ‘c’ → match
// Compare ‘e’ and ‘a’ → mismatch
// Return false
// Input 2: "A man, a plan, a canal: Panama"

// Lowercase: "a man, a plan, a canal: panama"
// All alphanumeric characters match from start and end
// Return true
// Time & Space Complexity
// Time Complexity: O(n), where n is the length of the string
// Space Complexity: O(1), since no extra space is used beyond pointers

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!s[left].match(/[a-z0-9]/i)) {
      left++;
    } else if (!s[right].match(/[a-z0-9]/i)) {
      right--;
    } else if (s[left] !== s[right]) {
      return false;
    } else if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
