//     *
//    **
//   ***
//  ****
// *****

function printStar(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (j > n - i) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

printStar(5);
