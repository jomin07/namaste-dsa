// 139. Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

var wordBreak = function (s, wordDict) {
  let dp = {};
  function fn(remS) {
    if (remS in dp) return dp[remS];
    if (remS === "") return true;
    let res = false;
    let n = remS.length;

    for (let i = 0; i < n; i++) {
      if (
        wordDict.includes(remS.substring(0, i + 1)) &&
        fn(remS.substring(i + 1))
      ) {
        res = true;
        break;
      }
    }

    dp[remS] = res;
    return res;
  }

  return fn(s);
};

// Approach:
// Use recursion to try breaking the string s into valid dictionary words.
// At each step, check all prefixes of the remaining string.
// If the prefix is in wordDict, recursively check the rest of the string.
// Use a memoization map dp to store results for substrings to avoid repeated works.
// If any split leads to the entire string being segmented into valid words, return true; otherwise return false.
// Time & Space Complexity:
// Time Complexity: O(n2)

// Space Complexity: O(n)

// Dry Run
// fn("leetcode")   // remS = "leetcode", n = 8
//   "leetcode" in dp? → no
//   remS === ""?      → no
//   res = false

//   i=0: substring(0,1) = "l"
//        includes("l")? → false
//        skip

//   i=1: substring(0,2) = "le"
//        includes("le")? → false
//        skip

//   i=2: substring(0,3) = "lee"
//        includes("lee")? → false
//        skip

//   i=3: substring(0,4) = "leet"
//        includes("leet")? → true
//        → evaluate fn("code"):

//        ┌─ fn("code")   // remS = "code", n = 4
//        │    "code" in dp? → no
//        │    remS === ""?  → no
//        │    res = false
//        │
//        │    i=0: "c"   → includes? false → skip
//        │    i=1: "co"  → includes? false → skip
//        │    i=2: "cod" → includes? false → skip
//        │    i=3: "code"
//        │         includes("code")? → true
//        │         → evaluate fn(""):
//        │              remS === "" → return true
//        │         condition true && true → enter if:
//        │              res = true
//        │              break            ← loop exits right here, i never reaches 4 (moot anyway, n=4)
//        │
//        │    dp["code"] = true          ← single write
//        │    return true
//        └─ fn("code") returns true

//        back in fn("leetcode"), i=3:
//        includes("leet")=true && fn("code")=true → enter if:
//          res = true
//          break                         ← loop exits here — i=4,5,6,7 NEVER RUN

//   dp["leetcode"] = true                ← single write
// return true
