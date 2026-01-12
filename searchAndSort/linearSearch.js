function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return "Not Found";
}

console.log(linearSearch([2, 1, 5, 4, 3], 33));
