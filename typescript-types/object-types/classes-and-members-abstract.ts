/*

Exercise - Abstract Classes and Members

Problem description:

Create an abstract class called `Shape` that represents a geometric shape with the following functionalities:

- Abstract members:
   - `getArea` - an abstract method that must be implemented in subclasses to calculate the area of the shape.
   - `getPerimeter` - an abstract method that must be implemented in subclasses to calculate the perimeter of the shape.

- Properties:
   - `name` (a string) - represents the name of the shape.

Create two concrete subclasses of the `Shape` class:

1. `Rectangle`:
    - Must have `width` and `height` properties.
    - Implement the abstract methods `getArea` and `getPerimeter` to calculate the area and perimeter of a rectangle.
    - Set the `name` property to "Rectangle".

2. `Circle`:
    - Must have `radius` property.
    - Implement the abstract methods `getArea` and `getPerimeter` to calculate the area and perimeter of a circle.
    - Set the `name` property to "Circle".

Create instances of the `Rectangle` and `Circle` subclasses, initialize their properties, and call the `getArea` and `getPerimeter` methods to calculate and print the area and perimeter of each shape.

Example:

```
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.getArea()); // Must print the area of the rectangle
console.log(myRectangle.getPerimeter()); // Must print the perimeter of the rectangle

const myCircle = new Circle(7);
console.log(myCircle.getArea()); // Must print the area of the circle
console.log(myCircle.getPerimeter()); // Must print the perimeter of the circle
```

Make sure the `Shape` class is abstract and that the `Rectangle` and `Circle` subclasses implement the `getArea` and `getPerimeter` abstract methods.

*/

abstract class Shape {
  abstract getArea(): number
  abstract getPerimeter(): number

  constructor(public name: string) {}
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
    public name: string = "Rectangle"
  ) {
    super(name)
  }

  getArea(): number {
    return this.width * this.height
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height)
  }
}

class Circle extends Shape {
  constructor(public radius: number, public name: string = "Circle") {
    super(name)
  }

  getArea(): number {
    return Math.PI * this.radius ** 2
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius
  }
}

const myRectangle = new Rectangle(5, 10)

console.log(myRectangle.getArea()) // 50
console.log(myRectangle.getPerimeter()) // 30

const myCircle = new Circle(7)

console.log(myCircle.getArea()) // 153.93804002589985
console.log(myCircle.getPerimeter()) // 43.982297150257104
