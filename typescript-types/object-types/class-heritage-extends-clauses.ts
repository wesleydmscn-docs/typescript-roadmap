/*

Exercise - Class Heritage - extends Clauses

Problem description:

Create a class called `Animal` with the following properties and methods:

- Properties:
   - `name` (a required string) - represents the name of the animal.
   - `species` (a required string) - represents the species of the animal.
   - `age` (a mandatory number) - represents the age of the animal.

- Methods:
   - `makeSound()` - a method that takes no parameters and returns nothing. This method should print a message like "[Animal name] made a sound."

Now, create a class called `Dog` that extends the `Animal` class. The `Dog` class must add an additional property:

- `breed` (a required string) - represents the breed of the dog.

Additionally, the `Dog` class must override the `makeSound` method of the `Animal` 
class to print a dog-specific message, such as "[Dog's name] barked."

Make sure the `Dog` class has a constructor that takes `name`, `species`, `age`, and `breed`
as parameters and initializes the corresponding properties.

Inputs:

```
const myDog = new Dog("Rex", "Canine", 5, "Golden Retriever");
myDog.makeSound();
```

Expected Output:

```
Rex barked.
```

*/

class Animal {
  name: string
  species: string
  age: number

  constructor(name: string, species: string, age: number) {
    this.name = name
    this.species = species
    this.age = age
  }

  makeSound() {
    console.log(`${this.name} made a sound.`)
  }
}

class Dog extends Animal {
  breed: string

  constructor(name: string, species: string, age: number, breed: string) {
    super(name, species, age)

    this.name = name
    this.species = species
    this.age = age
    this.breed = breed
  }

  makeSound() {
    console.log(`${this.name} barked.`)
  }
}

const myDog = new Dog("Rex", "Canine", 5, "Golden Retriever")

myDog.makeSound()
