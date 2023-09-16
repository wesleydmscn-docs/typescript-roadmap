/*

Exercise - String Enums

Problem description:

Create a string enumeration called `Color` that represents primary colors, 
such as "Red", "Green", and "Blue".

Then create a function called `getColorCode` that accepts an argument of type `Color` 
and returns the corresponding hexadecimal code for that color as a string.

Finally, create an instance of the `Color` enumeration, call the `getColorCode` function 
to get the hex code of the color, and print it to the console.

Example:

```
const color = Color.Red;
const colorCode = getColorCode(color);
console.log(colorCode); // Should print "#FF0000"
```

Make sure you create the `Color` enumeration correctly, implement the `getColorCode` function, 
and make the appropriate call to get and print the color's hex code.

*/

enum Color {
  Red = "#FF0000",
  Green = "#008000",
  Blue = "#0000FF",
}

function getColorCode(code: Color) {
  return code
}

const color = Color.Red
const colorCode = getColorCode(color)

console.log(colorCode) // "#FF0000"
