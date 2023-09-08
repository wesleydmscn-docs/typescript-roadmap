/*

Exercise - Interface - Types of Tuples

Problem description:

Create an interface called `Point` that represents a point on the Cartesian plane.
This interface must be a tuple type with two properties:

- `x` (a required number)
- `y` (a required number)

Next, create a function called `calculateDistance` that accepts two parameters of
type `Point` and calculate the Euclidean distance between these two points using the formula:

```
distance = √((x2 - x1)² + (y2 - y1)²)
```

The function must return the calculated distance as a number.

Inputs:

```
const point1: Point = [0, 0];
const point2: Point = [3, 4];
```

Expected Output:

```
const distance: number = calculateDistance(point1, point2);
console.log(distance); // Must print 5
```

*/

type Point = [number, number]

function calculateDistance(point1: Point, point2: Point) {
  const [x1, y1] = point1
  const [x2, y2] = point2

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

const point1: Point = [0, 0]
const point2: Point = [3, 4]

const distance: number = calculateDistance(point1, point2)

console.log(distance)
