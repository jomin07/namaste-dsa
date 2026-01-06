// *****
// ****
// ***
// **
// *

function printStar(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printStar(5);
