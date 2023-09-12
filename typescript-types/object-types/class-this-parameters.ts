/*

Exercise - This Parameters

Problem description:

Create a class called `Counter` that represents a simple counter with the following properties and methods:

- Properties:
   - `value` (a number) - represents the current value of the counter.

- Methods:
   - `constructor` - a constructor that initializes the counter value to zero.

   - `increment` - a method that increments the counter value by 1.

   - `decrement` - a method that decrements the counter value by 1.

   - `getValue` - a method that returns the current value of the counter.

However, the challenge here is that you must use `this` parameters in methods to ensure that the correct context (the class instance) is used when accessing the `value` property. This should be done without needing to create an explicit `value` property in the constructor or elsewhere in the class.

Example:

```
const myCounter = new Counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue()); // Must print 2
myCounter.decrement();
console.log(myCounter.getValue()); // Must print 1
```

Make sure that the `Counter` class correctly uses the `this` parameters to access and modify the counter's internal value.

*/

class Counter {
  constructor(public value: number = 0) {}

  increment(this: Counter) {
    this.value++
  }

  decrement(this: Counter) {
    this.value--
  }

  getValue(this: Counter) {
    return this.value
  }
}

const myCounter = new Counter()

myCounter.increment()
myCounter.increment()

console.log(myCounter.getValue()) // 2

myCounter.decrement()

console.log(myCounter.getValue()) // 1
