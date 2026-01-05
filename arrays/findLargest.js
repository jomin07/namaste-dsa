function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  return largest;
}

console.log(findLargest([2, 1, 5, 3]));
