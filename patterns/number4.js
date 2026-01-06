// 1
// 10
// 101
// 1010
// 10101
// 101010

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        row += 0;
      } else {
        row += 1;
      }
    }
    console.log(row);
  }
}

printPattern(6);
