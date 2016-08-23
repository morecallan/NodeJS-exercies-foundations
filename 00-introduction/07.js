#!/usr/bin/env node

"use strict";

const [,, ...args] = process.argv

/* File System Object */
var fs = require('fs');

/* Read File */
args.forEach((arg) => {fs.readFile(arg, read)});

function read (err, data) {
  /* If an error exists, show it, otherwise show the file */
  err ? Function("error","throw error")(err) : console.log(`${data}`);
};

console.log(`${fs.readFileSync(args[0])}`);
