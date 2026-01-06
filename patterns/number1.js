// 1
// 12
// 123
// 1234
// 12345

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

printPattern(5);
