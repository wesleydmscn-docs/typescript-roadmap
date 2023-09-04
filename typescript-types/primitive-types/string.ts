/*

Exercise: Reverse a String

Create a TypeScript program that prompts the user to enter a word or phrase,
then reverses the entered string and displays it on the console.

Requirements:

1. Declare a variable called `inputString` to store the string entered by the user.
2. Use the `split` function to split the string into an array of characters.
3. Use the `reverse` function to reverse the order of characters in the array.
4. Use the `join` function to combine the array characters back into a single string.
5. Display the reversed string on the console with an informational message.

Example expected output:

```
Enter a word or phrase: Hello world!
The reverse string is: !odnum ,álO
```

Remember that you can use user input in Node.js by reading from standard input
(stdin). You can use the `readline` library for this.

```
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a word or phrase: ", (inputString: string) => {
    // Complete the exercise here

    rl.close();
});
```

Within the callback function, you can implement logic to reverse 
the string and display it on the console.

*/

import * as readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Enter a word or phrase: ", (inputString: string) => {
  const reversedString = inputString.split("").reverse().join("")

  console.log("The reverse string is:", reversedString)

  rl.close()
})
