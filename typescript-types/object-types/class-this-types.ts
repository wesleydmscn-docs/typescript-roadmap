/*

Exercise - This Types

Problem description:

Create a class called `Counter` that represents a counter with the following properties and methods:

- Properties:
  - `value` (a number) - represents the current value of the counter.

- Methods:
  - `constructor` - a constructor that initializes the counter value to zero.

  - `increment` - a method that increments the counter value by 1.

  - `decrement` - a method that decrements the counter value by 1.

  - `getValue` - a method that returns the current value of the counter.

Now, add a method called `add` to the `Counter` class that accepts a number as a parameter and adds that number to the current counter value.

Additionally, use the `this` type to ensure that the correct context (the class instance) is used when accessing the `value` property within the `add` method.

Example:

```
const myCounter = new Counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue()); // Must print 2
myCounter.decrement();
console.log(myCounter.getValue()); // Must print 1
myCounter.add(5);
console.log(myCounter.getValue()); // Must print 6
```

Make sure that the `add` method correctly uses the `this` type to access and modify the counter's internal value.

*/

class Counter {
  constructor(public value: number = 0) {}

  increment() {
    this.value++
  }
  decrement() {
    this.value--
  }
  getValue() {
    return this.value
  }

  add(value: number) {
    this.value += value
  }
}

const myCounter = new Counter()

myCounter.increment()
myCounter.increment()

console.log(myCounter.getValue()) // 2
myCounter.decrement()

console.log(myCounter.getValue()) // 1
myCounter.add(5)

console.log(myCounter.getValue()) // 6
