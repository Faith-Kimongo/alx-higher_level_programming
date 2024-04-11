#!/usr/bin/node
// print c is fun the number of times in input
const argument = process.argv[2];
if (isNaN(argument)) {
  console.log('Missing number of occurrences');
} else {
  const argumentInt = parseInt(argument);
  for (let i = 0; i < argumentInt; i++) {
    console.log('C is fun');
  }
}
