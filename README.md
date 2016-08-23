# NodeJS Foundations Exercises
<p>Core concepts for the [NodeJS Foundations Curriculum](https://github.com/nashville-software-school/node-milestones/tree/master/01-foundations) at [Nashville Software School](https://github.com/nashville-software-school)

### [Cheers](https://github.com/morecallan/NodeJS-exercies-foundations/blob/master/00-introduction/CHEER.js)
>Create a Node.js program that performs a cheer.

> ###### Expected
```
$ node cheer.js John Doe
Give me a J!
Give me an O!
Give me an H!
Give me an N!
Give me a D!
Give me an O!
Give me an E!
What does that spell?
JOHN DOE!
Note: the 'a' vs. 'an'
```

### [03](https://github.com/morecallan/NodeJS-exercies-foundations/blob/master/00-introduction/03.js)
>Create a JavaScript file to act as a Node.js program named 03.js. The file should contain JavaScript code to output detailed version information of Node.js and the underlying V8 JavaScript engine to the terminal through the stdout stream. In addition, the program should be able to directly execute.

> ###### Expected:
```
$ ./03.js
Node.js version: v6.3.1
V8 version: 5.0.71.57
```

### [04](https://github.com/morecallan/NodeJS-exercies-foundations/blob/master/00-introduction/04.js)
>Create a JavaScript file to act as a Node.js program named 04.js. The file should be similar if not exactly the same as the previous exercise. However, run nvm use and change the Node.js version and make sure it works correctly in multiple versions.

> ###### Expected:
```
$ nvm use node
Now using node v6.3.1 (npm v3.10.5)
$ ./04.js
Node.js version: v6.3.1
V8 version: 5.0.71.57
$ nvm use v4
Now using node v4.4.7 (npm v3.10.5)
$ ./04.js
Node.js version: 4.4.7
V8 version: 4.5.103.36
```

### [05](https://github.com/morecallan/NodeJS-exercies-foundations/blob/master/00-introduction/05.js)
>Create a JavaScript file to act as a Node.js program named 05.js. This program should accept at least one number as a command-line argument. The arguments should be summed up into a single value.

>Don't worry about floating point rounding errors.

> ###### Expected:
```
$ ./05.js 1
1
$ ./05.js -.42 0 3.14
2.72
$ ./05.js .1 .2
0.30000000000000004
```

### [06](https://github.com/morecallan/NodeJS-exercies-foundations/blob/master/00-introduction/06.js)
>For this exercise we are going to use a popular Node.js module: chalk

>Create a JavaScript file to act as a Node.js program named 06.js. This program print out a red, white, and blue American flag in the terminal. The stars should be white bold text with a blue background, the red stripes should be spaces with a red background, and the white stripes should be spaces with a white background.

>Because of the limitations of the terminal, don't worry about getting all 50 stars exactly as they are on the official flag. However, make sure all 13 stripes are on the flag. Additionally make the flag 50 characters wide and have 1 space of padding before and after the stars.

>Use the following format below.

> ###### Expected:
```
$ ./06.js
```
<img src="https://camo.githubusercontent.com/e58df4f4e831626c5f86a76024fadcdd1de26e6a/687474703a2f2f692e696d6775722e636f6d2f444f4d787258552e706e67">

### [07](https://github.com/morecallan/NodeJS-exercies-foundations/blob/master/00-introduction/07.js)
>Create a JavaScript file to act as a Node.js program named 07.js. This program should accept a single argument which should be a file path. Executing the program will print the contents of that file onto the terminal though the stdout stream. Executing the program without an argument should simply return without printing anything. This functionality to be similar to the cat command.

>Optional: create a second file named 07.json for your program to read.

> ###### Example:
```
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```
> ###### Expected:
```
$ ./07.js 07.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```

### [09](https://github.com/morecallan/NodeJS-exercies-foundations/blob/master/00-introduction/09.js)
>Create a JavaScript file to act as a Node.js program named 09.js. This program should read a file 09.json and output to a file 09_Caps.json. Use the second command-line argument to declare the destination. You will not need to make your own Readable for this exercise. Simply use fs.createReadStream instead. In between, all letters should be capitalized with your own Transform stream. Then the data should be passed to your own Writable stream. The fs.appendFile will be helpful for this task.

>In addition, use some other method in the fs module make sure executing the program multiple times does not continue making a larger and larger 09.Caps.json file.

> ###### Expected:
```
$ cat 09.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
$ ./09.js 09_Caps.json
$ cat 09_Caps.json
{
  "LANGUAGES": {
    "JAVASCRIPT": "AWESOME",
    "C++": "DIFFICULT",
    "BASIC": "OLD"
  }
}
```
