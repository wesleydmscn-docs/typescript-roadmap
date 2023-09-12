/*

Exercise - Static Members

Problem description:

Create a class called `MathUtils` with the following static members:

- A static method called `calculateCircleArea` that accepts the radius of a circle as a parameter and returns the area of the circle (π * radius²).

- A static method called `calculateRectangleArea` that accepts the width and height of a rectangle as parameters and returns the area of the rectangle (width * height).

- A static method called `calculateTriangleArea` that accepts the base and height of a triangle as parameters and returns the area of the triangle (base * height / 2).

Create a program that uses these static methods to calculate and print the area of a circle, a rectangle, and a triangle with the following values:

- Circle: radius of 5 units
- Rectangle: width of 10 units and height of 6 units
- Triangle: base of 8 units and height of 4 units

Expected Output:

```
Circle Area: 78.53981633974483
Rectangle Area: 60
Triangle Area: 16
```

Be sure to use the static members of the `MathUtils` class to calculate the areas.

*/

class MathUtils {
  static calculateCircleArea(radius: number) {
    return Math.PI * radius ** 2
  }
  static calculateRectangleArea(width: number, height: number) {
    return width * height
  }
  static calculateTriangleArea(base: number, height: number) {
    return (base * height) / 2
  }
}

console.log(MathUtils.calculateCircleArea(5))
console.log(MathUtils.calculateRectangleArea(10, 6))
console.log(MathUtils.calculateTriangleArea(8, 4))
