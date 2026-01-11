//sum of first n numbers
function findSum(n) {
  if (n === 0) return 0;

  return n + findSum(n - 1);
}

console.log(findSum(3));
