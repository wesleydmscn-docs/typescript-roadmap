/*

Exercise - Class Heritage - implements Clauses

Problem description:

Create an interface called `Vehicle` that represents a vehicle with the following properties:

- `brand` (a required string)
- `year` (a required number)
- `start` (a method that takes no parameters and returns nothing)

Now, create a class called `Car` that implements the `Vehicle` interface. 
The `Car` class must have an additional property:

- `model` (a required string)

Additionally, implement the `start` method in the `Car` class so that, when called, 
it prints the following message:

```
The [car brand] [car model] is on.
```

Make sure the `Car` class has a constructor that takes `brand`, `model` and `year`
as parameters and initializes the corresponding properties.

Appetizer:
```
const myCar = new Car("Toyota", "Camry", 2023);
myCar.start();
```

Expected Output:
```
The Toyota Camry is on.
```

*/

interface Vehicle {
  brand: string
  year: number
  start: () => void
}

class Car implements Vehicle {
  brand: string
  year: number
  model: string

  constructor(brand: string, model: string, year: number) {
    this.brand = brand
    this.year = year
    this.model = model
  }

  start() {
    console.log(`The ${this.brand} ${this.model} is on.`)
  }
}

const myCar = new Car("Toyota", "Camry", 2023)

myCar.start()
