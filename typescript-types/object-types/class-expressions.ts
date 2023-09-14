/*

Exercise - Class Expressions

Problem description:

Create an expression class called `Rectangle` that represents a rectangle with the following properties and methods:

- Properties:
   - `width` (a number) - represents the width of the rectangle.
   - `height` (a number) - represents the height of the rectangle.

- Methods:
   - `constructor` - a constructor that initializes the `width` and `height` properties.

   - `getArea` - a method that calculates and returns the area of the rectangle (width * height).
   - `getPerimeter` - a method that calculates and returns the perimeter of the rectangle (2 * width + 2 * height).

Additionally, create an instance of the `Rectangle` class, initialize its properties, and call the methods to calculate and print the area and perimeter of the rectangle.

Example:

```
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.getArea()); // Should print 50
console.log(myRectangle.getPerimeter()); // Should print 30
```

*/

const Rectangle = class {
  constructor(public width: number, public height: number) {}

  getArea() {
    return this.width * this.height
  }
  getPerimeter() {
    return this.width * 2 + this.height * 2
  }
}

const myRectangle = new Rectangle(5, 10)

console.log(myRectangle.getArea()) // 50
console.log(myRectangle.getPerimeter()) // 30
