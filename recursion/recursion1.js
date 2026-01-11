function printNumbers(n) {
  if (n <= 0) return; //base case - when to stop calling itself

  console.log(n);
  printNumbers(--n); //recursive case - part where function calls itself
}

printNumbers(5);
