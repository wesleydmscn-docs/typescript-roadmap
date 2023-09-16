/*

Exercise - Objects vs Enums - as const

Problem description:

First, create an object called `Colors` that represents primary colors with the 
following properties and values:

- `Red` - with the value "#FF0000".
- `Green` - with the value "#008000".
- `Blue` - with the value "#0000FF".

Then create an enumeration called `ColorsEnum` that also represents the same 
primary colors with the following members and values:

- `Red` - with the value "#FF0000".
- `Green` - with the value "#008000".
- `Blue` - with the value "#0000FF".

Now, create a function called `getColor` that accepts an argument of type `Colors` or `ColorsEnum` 
and returns the color value as a string.

Finally, create instances of the `Colors` object and `ColorsEnum` enumeration, call the `getColor`
function to get the color value, and print it to the console.

Example:

```
const colorFromObject = getColor(Colors.Red);
console.log(colorFromObject); // Should print "#FF0000"

const colorFromEnum = getColor(ColorsEnum.Green);
console.log(colorFromEnum); // Should print "#008000"
```

Make sure you create the `Colors` object and `ColorsEnum` enumeration correctly and implement 
the `getColor` function to return the color value based on the argument provided.

*/

const Colors = {
  Red: "#FF0000",
  Green: "#008000",
  Blue: "#0000FF",
} as const

enum ColorsEnum {
  Red = "#FF0000",
  Green = "#008000",
  Blue = "#0000FF",
}

function getColor(color: string | ColorsEnum) {
  return color
}

const colorFromObject = getColor(Colors.Red)
console.log(colorFromObject) // "#FF0000"

const colorFromEnum = getColor(ColorsEnum.Green)
console.log(colorFromEnum) // "#008000"
