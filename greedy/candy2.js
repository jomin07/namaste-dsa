var candy = function (arr) {
  if (arr.length < 2) return 1;
  let res = arr.length;
  let i = 1;

  while (i < arr.length) {
    if (arr[i] === arr[i - 1]) {
      i++;
      continue;
    }

    //up side
    let up = 0;
    while (arr[i] > arr[i - 1]) {
      up++;
      res += up;
      i++;
    }

    //down side;
    let down = 0;
    while (arr[i] < arr[i - 1]) {
      down++;
      res += down;
      i++;
    }

    res -= Math.min(up, down);
  }

  return res;
};

// Approach:
// Every child must get at least 1 candy → start with ans = n.
// Traverse the ratings array and look for increasing and decreasing slopes.
// Increasing slope (up): When arr[i] > arr[i-1], keep incrementing up. Add candies accordingly.
// Decreasing slope (down): When arr[i] < arr[i-1], keep incrementing down. Add candies accordingly.
// To avoid double-counting the peak (where up and down meet), subtract Math.min(up, down).
// Continue until the end and return ans.
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(1)
