#!/usr/bin/node
// check for arguments

const message = process.argv;
if (message.length <= 2) {
  console.log('No argument');
} else if (message.length === 3) {
  console.log('Argument found');
} else { console.log('Arguments found'); }
