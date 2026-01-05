function findAnElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }

  return -1;
}

console.log(findAnElement([1, 2, 3, 4, 5], 22));
