/*

Exercise - Classes in TypeScript

Problem description:

Create a class called `Person` that represents a person with the following characteristics:

- Properties:
  - `readonly name` (a read-only string)
  - `age` (a number)
  - `email` (a string)

- A constructor that takes a read-only name, age, and email as parameters and initializes the corresponding properties.

- A method called `printInfo` that prints the person's information in the following format:
  ```
  Name: [person's name]
  Age: [person's age]
  Email: [person's email]
  ```

- A getter called `isAdult` that returns `true` if the person is 18 or older, and `false` otherwise.

- A setter called `changeEmail` that accepts a new email string and assigns it to the `email` property. Make sure the email is a valid string.

- An index signature that allows adding extra properties to the `Person` object.

- Use the `super` keyword to call the parent class constructor inside the `Person` class constructor.

Inputs:

```
const person1 = new Person("Alice", 25, "alice@email.com");
person1.printInfo();
console.log(person1.isAdult);

person1.changeEmail = "newemail@email.com"
console.log(person1.email);

person1["extraProperty"] = "Some value"; // Add an extra property
console.log(person1["extraProperty"]);
```

Expected Output:

```
Name: Alice
Age: 25
Email: alice@email.com
true
newemail@email.com
Some value
```

*/

class Person {
  readonly name: string
  age: number
  email: string;

  [key: string]: string | number | boolean | (() => void)

  constructor(name: string, age: number, email: string) {
    this.name = name
    this.age = age
    this.email = email
  }

  printInfo() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.email}\n`)
  }

  get isAdult() {
    return this.age >= 18
  }

  set changeEmail(newEmail: string) {
    this.email = newEmail
  }
}

class Derived extends Person {
  constructor(name: string, age: number, email: string) {
    super(name, age, email)
  }
}

const person1 = new Person("Alice", 25, "alice@email.com")

person1.printInfo()
console.log(person1.isAdult)

person1.changeEmail = "newemail@email.com"
console.log(person1.email)

person1["extraProperty"] = "Some value"
console.log(person1["extraProperty"])
