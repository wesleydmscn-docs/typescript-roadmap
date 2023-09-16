/*

Exercise - Generic Classes

Problem description:

Create a generic class called `Box` that represents a box that can contain a value of any type. The `Box` class must have the following functionalities:

- A constructor that initializes the value of the box.
- A method called `getValue` that returns the current value in the box.
- A method called `setValue` that accepts a new value and assigns it to the box.

Additionally, create an instance of the `Box` class to store different types of values (e.g. numbers, strings, objects) and demonstrate the class's ability to handle values of different types.

Example:
```
const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // Should print 42
numberBox.setValue(100);
console.log(numberBox.getValue()); // Should print 100

const stringBox = new Box<string>("Hello, TypeScript!");
console.log(stringBox.getValue()); // Should print "Hello, TypeScript!"
stringBox.setValue("Updated value");
console.log(stringBox.getValue()); // Must print "Updated value"
```

Make sure the `Box` class is generic enough to accommodate values of any type.

*/

class Box<Type> {
  constructor(public value: Type) {}

  getValue() {
    return this.value
  }

  setValue(newValue: Type) {
    this.value = newValue
  }
}

const numberBox = new Box<number>(42)
console.log(numberBox.getValue()) // 42

numberBox.setValue(100)
console.log(numberBox.getValue()) // 100

const stringBox = new Box<string>("Hello, TypeScript!")
console.log(stringBox.getValue()) // "Hello, TypeScript!"

stringBox.setValue("Updated value")
console.log(stringBox.getValue()) // "Updated value"
