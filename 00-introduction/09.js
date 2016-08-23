#!/usr/bin/env node
"use strict";

const fs = require('fs');
const { Readable, Writable, Transform } = require('stream')

const [,, ...args] = process.argv


const ToUpper = Transform()
ToUpper._transform = (buffer, UTF8, cb) => (
  cb(null, `${buffer}`.toUpperCase())
)

const writeStream = Writable()
writeStream._write = (buffer, UTF8, cb) => {
  fs.appendFile(args[1], buffer, (err) => {
    if (err) throw err;
    console.log(`Yo, I appended ${buffer} to ${args[1]}`)
  })
}

const fileContentStream = fs.createReadStream(args[0]) // `Readable` stream
  .pipe(ToUpper) // `Transform` stream
  .pipe(writeStream) //  `Write` stream
