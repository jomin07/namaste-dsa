function findSecondLargest(arr) {
  if (arr.length < 2) return null;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest)
      secondLargest = arr[i];
  }

  return secondLargest;
}

console.log(findSecondLargest([2, 11, 7, 11, 8]));
