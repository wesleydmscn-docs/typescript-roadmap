/*

Exercise - Class - Parameter Properties (public, private, protected, readonly)

Problem description:

Create a class called `Person` that represents a person with the following properties and functionalities:

- Properties:
   - `name` (a required string)
   - `age` (a required number)
   - `email` (an optional string)
   - `isAdult` (a Boolean property that indicates whether the person is of legal age)

- Methods:
   - `constructor` - a constructor that initializes the `name`, `age` and `email` properties.
   - `printInfo` - a method that prints the person's information in the following format:
     ```
     Name: [person's name]
     Age: [person's age]
     Email: [person's email]
     Is Adult: [true if you are of legal age, false otherwise]
     ```

   - `getAge` - a method that returns the person's age.
   - `setEmail` - a method that accepts a new string as a parameter and assigns this string to the `email` property. Make sure this property is of type `private` to ensure it cannot be accessed directly from outside the class.

   - `setIsAdult` - a method that checks whether the person is of legal age based on their age (age >= 18) and assigns the result to the `isAdult` property. Make sure this property is of type `private` to ensure it cannot be accessed directly from outside the class.

   - `incrementAge` - a method that increases the person's age by 1 unit.

Additionally, set the `isAdult` property to `readonly` so that it cannot be modified after the object is created.

Create an instance of the `Person` class, initialize its properties and call the methods to print the person's information, define the email, check if they are of legal age and increment the age.

Example:

```
const person = new Person("Alice", 25);
person.setEmail("alice@example.com");
console.log(person.getAge()); // Should print 25
person.printInfo();
console.log(person.isAdult); // Must print true
person.incrementAge();
console.log(person.getAge()); // Should print 26
```

*/

class Person {
  private readonly _isAdult: boolean

  constructor(public name: string, public age: number, private email?: string) {
    this._isAdult = this.setIsAdult()
  }

  printInfo() {
    console.log(
      `Name: ${this.name}\nAge: ${this.age}\nEmail: ${
        this.email ? this.email : "Not Specified."
      }\nIs Adult: ${this._isAdult}`
    )
  }

  get isAdult() {
    return this._isAdult
  }

  getAge() {
    return this.age
  }

  setEmail(newEmail: string) {
    this.email = newEmail
  }

  setIsAdult() {
    return this.age >= 18
  }

  incrementAge() {
    this.age++
  }
}

const person = new Person("Alice", 25)

person.setEmail("alice@example.com")
console.log(person.getAge()) // 25

person.printInfo()
console.log(person.isAdult) // true

person.incrementAge()
console.log(person.getAge()) // 26
