#!/usr/bin/env node
"use strict";

const [,, ...args] = process.argv

if (args.length > 0) {
  const allCaps = args.map(arg => arg.toUpperCase())

  count = 0;

  const aOrAn = (char) =>
    /[AEFHILMNORSX]/.test(char) ? 'an' : 'a';


  [...allCaps.join('')].forEach((char, i) => {
    count ++;
    setTimeout(function(){console.log(`Give me ${aOrAn(char)} ${char}!`)}, 2000*i)
  })

  setTimeout(function(){console.log('What does that spell?')}, (2000*count)+2000);
  setTimeout(function(){console.log(`${allCaps.join(' ')}!`)}, (2000*count)+4000);


} else {
  console.log('you dummy.');
}
