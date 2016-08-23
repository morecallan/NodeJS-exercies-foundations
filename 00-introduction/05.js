#!/usr/bin/env node
"use strict";

const [,, ...args] = process.argv

let isANum = function(input) {
  return input > 0 | input < 0 | input === 0;
}

let mathyArgs = args.map(arg => parseInt(arg)).filter(isANum);

mathyArgs.filter(isANum).forEach(function(arg){
  console.log(arg);
})

let sum = (mathyArgs.length > 0) ? mathyArgs.reduce((a, b) => a + b) : 0;
console.log(`Hey, if you add 'em all up, you get ${sum}!`);
