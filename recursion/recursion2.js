//print 1 to n using recursion;
let n = 5;
function recursion(i) {
  if (i > n) return;

  console.log(i);
  recursion(++i);
}

recursion(1, 5);
