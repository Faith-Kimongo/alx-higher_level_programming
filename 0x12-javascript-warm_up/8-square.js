#!/usr/bin/node
// print a square
const argument = process.argv[2];
if (isNaN(argument)) {
  console.log('Missing size');
} else {
  const argumentInt = parseInt(argument);
  if (argumentInt > 0) {
    let square = '';
    for (let row = 0; row < argumentInt; row++) {
      for (let cell = 0; cell < argumentInt; cell++) {
        square = square + 'X';
      }
      if (row < argumentInt - 1) {
        square = square + '\n';
      }
    }
    console.log(square);
  }
}
