0
// //We need to print all the arguments past the first 2... how?
//
// //For Loop: Scott hates forLoops
// for (let i = 2; i < process.argv.length; i++) {
//   console.log(process.argv[i]);
// }
//
// //For Each
// process.argv.forEach((arg, i) => {
//   i > 1 && console.log(arg);
// })
//
// //Filter and For Each
// process.argv
//   .filter((_arg, i) => i > 1)
//   .forEach(console.log)

//For Each with rest parameter
// const[nodePath, filePath, ...args] = process.argv
//
// [...args.join('')].forEach(char =>
//   console.log(`Give me a ${char.toUpperCase()}!`))
//
// args.forEach((arg, i) => {
//   [...arg].forEach(char =>
//     console.log(`Give me a ${char.toUpperCase()}!`));
// })
//
// console.log("What's that spell?");
// console.log(args.join(' ') + "!");

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
