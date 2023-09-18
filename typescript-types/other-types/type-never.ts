/*

Exercise - Type Never

Problem description:

Create a function called `throwError` that accepts a message as an argument and returns a value of type `never`
that throws an exception containing the given message.

Then call the `throwError` function with a message and print the result to the console.

Example:
```
const result = throwError("An error occurred!");
console.log(result); // Should throw an exception with the message "An error occurred!"
```

Remember that the `never` type is mainly used to indicate that something never occurs or that 
a function never returns normally. Therefore, when calling the `throwError` function, 
you should expect it to throw an exception and not return a normal value.

*/

function throwError(message: string): never {
  throw new Error(message)
}

const result = throwError("An error occurred!")

console.log(result) // "An error occurred!"
