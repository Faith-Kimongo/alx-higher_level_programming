#!/usr/bin/node
// second biggest
const argv = process.argv;
const argvLength = argv.length;
if (argvLength < 4) {
  console.log(0);
} else {
  const list = [];
  for (let i = 2; i < argvLength; i++) {
    list[i - 2] = parseInt(argv[i]);
  }
  const sortListDesc = list.sort(function (a, b) { return b - a; });
  console.log(sortListDesc[1]);
}
