#!/usr/bin/env node
"use strict";

let chalk = require('chalk');
let emoji = require('node-emoji').emoji;

let starPart = chalk.bgBlue.white.bold;
let redStripe = chalk.bgRed;
let whiteStripe = chalk.bgWhite;

let flag = "";
let starChar = starPart(`${emoji.star}  `);
let starSpaceChar = starPart(`   `);
let redStripeChar = redStripe(` `);
let whiteStripeChar = whiteStripe(` `);

let lineA = `${starChar}${starSpaceChar}`.repeat(3) + starChar + redStripeChar.repeat(29) + `\n`;
let lineB = `${starSpaceChar}${starChar}`.repeat(3) + starSpaceChar + whiteStripeChar.repeat(29)+ `\n`;
let lineC = whiteStripeChar.repeat(50)+ `\n`;
let lineD = redStripeChar.repeat(50)+ `\n`;

flag += `${lineA + lineB}`.repeat(3);
flag += `${lineA}`;
flag += `${lineC + lineD}`.repeat(3);

console.log(flag);
