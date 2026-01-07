//Leetcode 9. Palindrome Number
function isPalindrome(n) {
  if (n < 0) return false;
  let num = n;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }

  return num === rev;
}

console.log(isPalindrome(122));
