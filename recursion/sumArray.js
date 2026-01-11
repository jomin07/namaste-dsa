let arr = [2, 1, 3, 4];

function sumArray(n) {
  if (n === 0) return arr[0];
  return arr[n] + sumArray(--n);
}

console.log(sumArray(arr.length - 1));
