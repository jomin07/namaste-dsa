function countDigits(n) {
  return String(n).length;
}

function countDigits2(n) {
  if (n === 0) return 1;
  if (n < 0) n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(123));
console.log(countDigits2(-986));
