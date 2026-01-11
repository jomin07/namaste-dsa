//sum of odd numbers in an array
let arr = [2, 1, 3, 4, 5];
function sumArrayOdd(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n === 0) return isOdd ? arr[n] : 0;

  return (isOdd ? arr[n] : 0) + sumArrayOdd(n - 1);
}

console.log(sumArrayOdd(arr.length - 1));
