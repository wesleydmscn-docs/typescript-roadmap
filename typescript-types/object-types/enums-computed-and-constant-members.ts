/*

Exercise - Enums - Computed and Constant Members

Problem description:

Create an enumeration called `Direction` that represents the cardinal directions 
(North, South, East, West) with the following associated values:

- `North` - with a numeric value of 0.
- `South` - with a numerical value of 180.
- `East` - with a numerical value of 90.
- `West` - with a numerical value of 270.

Additionally, create a function called `getOppositeDirection` that accepts an argument
of type `Direction` and returns the opposite direction as a string.

For example, if the input is `Direction.North`, the function should return "South". 
If the input is `Direction.East`, the function must return "West", and so on.

Finally, create instances of the `Direction` enumeration, call the `getOppositeDirection` 
function to get the opposite direction, and print it to the console.

Example:

```
const northDirection = Direction.North;
const oppositeDirection = getOppositeDirection(northDirection);
console.log(oppositeDirection); // Should print "South"
```

Make sure you create the `Direction` enumeration correctly with the associated values 
and implement the `getOppositeDirection` function to return the opposite direction based 
on the numeric value.

*/

enum Direction {
  North, // constant
  South = 180, // constant
  East = South / 2, // computed
  West = South + East, // computed
}

function getOppositeDirection(direction: Direction) {
  const oppositeDirections = {
    0: Direction[Direction.South],
    180: Direction[Direction.North],
    90: Direction[Direction.West],
    270: Direction[Direction.East],
  }

  return oppositeDirections[direction]
}

const northDirection = Direction.North
const oppositeDirection = getOppositeDirection(northDirection)

console.log(oppositeDirection) // "South"
