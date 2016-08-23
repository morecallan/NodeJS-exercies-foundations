#!/usr/bin/env node
"use strict";

const { node: nodeV,  v8: v8V} = global.process.versions;

console.log(`Node.js version: ${nodeV}
V8 version: ${v8V}`);
