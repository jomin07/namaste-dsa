var removeOuterParentheses = function (s) {
  let counter = 0;
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      counter++;
      res += counter > 1 ? s[i] : "";
    } else {
      res += counter > 1 ? s[i] : "";
      counter--;
    }
  }

  return res;
};

// Time Complexity = O(n)
// Space Complexity = O(1)
//res would take O(n) because strings in js is immutable so we cant directly modify.
//Therefor extra space is O(1)
