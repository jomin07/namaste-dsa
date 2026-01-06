// 1
// 01
// 010
// 1010
// 10101

function printPattern(n) {
  let toggle = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += toggle;
      toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
  }
}

printPattern(5);
