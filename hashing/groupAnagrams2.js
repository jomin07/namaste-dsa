var groupAnagrams = function (arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let freqArr = Array(26).fill(0);
    let mapKey = "";

    for (let j = 0; j < arr[i].length; j++) {
      let index = arr[i][j].charCodeAt() - "a".charCodeAt();
      freqArr[index]++;
    }

    for (let k = 0; k < 26; k++) {
      mapKey = mapKey + String.fromCharCode(k) + freqArr[k]; //a0b2 etc or use # for #0#2 etc
    }

    if (!map[mapKey]) {
      map[mapKey] = [arr[i]];
    } else {
      map[mapKey].push(arr[i]);
    }
  }
  return Object.values(map);
};

// Steps
// Initialize a hashmap to store grouped anagrams.
// For each word in the input array:
// Create an array of size 26 to count frequency of each letter.
// Convert that frequency array into a unique string key (like “#1#0#2…”).
// Use this string as a hash key to group anagrams.
// Return all the grouped values.

// Time & Space Complexity
// Time Complexity: O(n·k), where n = number of strings, k = average length of strings (no sorting)
// Space Complexity: O(n·k), for storing frequency map and result
