#!/usr/bin/node
const value = process.argv;
if (!value[2]) {
  console.log('No argument');
} else if (value[2]) {
  console.log(value[2]);
}
