/*

Exercise - Assertions with `as type`

Problem description:

Create a function called `parseCoordinates` that accepts a string containing 
coordinates in the format "x,y" and returns an object with the properties `x` and `y`, both as numbers.

The function must use an "assertion" with `as type` to guarantee that the result 
is of type `{ x: number, y: number }`. Make sure you handle any parsing errors appropriately.

Then call the `parseCoordinates` function with multiple coordinate strings in valid and invalid 
format and print the results to the console.

Example:
```
const validCoordinates = parseCoordinates("3,4");
console.log(validCoordinates); // Should print { x: 3, y: 4 }

const invalidCoordinates = parseCoordinates("abc");
console.log(invalidCoordinates); // Should print a runtime error
```

Be sure to use "assertions" with `as type` to ensure that the result is of the expected type 
and that the function handles errors appropriately when the input string is not in the correct format.

*/

function parseCoordinates(coordinates: string) {
  if (coordinates.split(",").length !== 2) {
    throw new Error("Is not valid coordinate 'x,y'")
  }

  const [x, y] = coordinates.split(",")
  const parsingCoordinates = {
    x: Number(x),
    y: Number(y),
  } as { x: number; y: number }

  return parsingCoordinates
}

const validCoordinates = parseCoordinates("3,4")
console.log(validCoordinates) // { x: 3, y: 4 }

const invalidCoordinates = parseCoordinates("abc")
console.log(invalidCoordinates) // runtime error
