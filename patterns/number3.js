// 12345
// 1234
// 123
// 12
// 1

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += j;
    }
    console.log(row);
  }
}

printPattern(5);
