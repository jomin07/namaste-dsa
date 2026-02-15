// 34. Find First and Last Position of Element in Sorted Array

function searchRange(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let start = 0;
  let end = arr.length - 1;
  let res = [-1, -1];

  //starting point
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      res[0] = mid;
      right = mid - 1;
    } else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  if (arr[left] !== target) return res;

  //ending point
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      res[1] = mid;
      start = mid + 1;
    } else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return res;
}

const arr = [5, 7, 7, 8, 8, 10],
  target = 7;
console.log(searchRange(arr, target));

// Time Complexity: O(logn)
// Space Complexity: O(1)
