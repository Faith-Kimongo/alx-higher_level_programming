#!/usr/bin/node
// converts argument into interger if it cannot be converted it prints not a number
let firstArg = process.argv[2];
if (!isNaN(firstArg)) {
  firstArg = parseInt(firstArg);
  console.log('My number:' + ' ' + firstArg);
} else {
  console.log('Not a number');
}
