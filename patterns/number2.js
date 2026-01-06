// 1
// 22
// 333
// 4444
// 55555

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += i + 1;
    }
    console.log(row);
  }
}

printPattern(5);
