/*

Exercise - Type Any

Problem description:

Create a function called `sumNumbers` that accepts two arguments of type `any` 
and returns the sum of these two values. The function must be able to accept values of any 
type and perform the sum operation.

Then create some calls to the `sumNumbers` function with different types of values as arguments, 
including numbers, strings, and other types, and print the results to the console.

Example:
```
const result1 = sumNumbers(5, 10);
console.log(result1); // Should print 15

const result2 = sumNumbers("Hello, ", "world!");
console.log(result2); // Should print "Hello, world!"

const result3 = sumNumbers(true, false);
console.log(result3); // Must print 1
```

Remember that the use of `any` should be avoided whenever possible in TypeScript code, 
as it removes compile-time type checking and can lead to difficult-to-track down errors. 
However, this exercise is designed to illustrate the concept of type `any`.

*/

function sumNumbers(value1: any, value2: any) {
  return value1 + value2
}

const result1 = sumNumbers(5, 10)
console.log(result1) // 15

const result2 = sumNumbers("Hello, ", "world!")
console.log(result2) // "Hello, world!"

const result3 = sumNumbers(true, false)
console.log(result3) // 1
