/*

Exercise - Type Unknown

Problem description:

Create a function called `safeSum` that accepts two arguments of type `unknown` and 
returns the sum of these two values only if they are both numbers. Otherwise, the function must return `NaN`.

The `safeSum` function must do the necessary type checks to ensure that both arguments are numbers 
before performing the sum operation. Use TypeScript's type checking functions such as `typeof` or `instanceof`
to perform these checks.

Then, create some calls to the `safeSum` function with different types of values as arguments, 
including numbers, strings, and other types, and print the results to the console.

Example:
```
const result1 = safeSum(5, 10);
console.log(result1); // Should print 15

const result2 = safeSum("Hello, ", "world!");
console.log(result2); // Must print NaN

const result3 = safeSum(true, false);
console.log(result3); // Must print NaN
```

Be sure to do proper type checks to ensure only numbers are added, avoiding runtime errors.

*/

function safeSum(value1: unknown, value2: unknown) {
  if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 + value2
  }

  return NaN
}

const result1 = safeSum(5, 10)
console.log(result1) // 15

const result2 = safeSum("Hello, ", "world!")
console.log(result2) // NaN

const result3 = safeSum(true, false)
console.log(result3) // NaN
