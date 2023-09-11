/*

Exercise - Member Visibility - protected

Problem description:

Create a class called `Person` that represents a person with the following properties and methods:

- Properties:
   - `name` (a required string) - represents the person's name.
   - `age` (a mandatory number) - represents the person's age.

- Methods:
   - `constructor` - a constructor that takes `name` and `age` as parameters and initializes the corresponding properties.

   - `getDetails()` - a method that takes no parameters and returns an object with the person's information, containing the `name` and `age` properties.

Now, create a class called `Employee` that extends the `Person` class. The `Employee` class must add an additional property:

- `employeeId` (a required number) - represents the employee ID.

Additionally, create a protected method called `getEmployeeDetails()` in the `Employee` class that calls the `getDetails()` method of the `Person` class and returns an object with the employee's information, including the employee's ID. (`employeeId`).

Finally, create an instance of the `Employee` class with an employee's information and call the `getEmployeeDetails()` method to get the employee's details.

Inputs:

```
const myEmployee = new Employee("Alice", 30, 12345);
console.log(myEmployee.getEmployeeDetails());
```

Expected Output:

```
{ name: 'Alice', age: 30, employeeId: 12345 }
```

*/

class Person {
  constructor(public name: string, public age: number) {}

  getDetails() {
    return { name: this.name, age: this.age }
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public employeeId: number) {
    super(name, age)
  }

  protected getEmployeeDetails() {
    return { ...this.getDetails(), employeeId: this.employeeId }
  }

  /**
   * public method to access protected method -> getEmployeeDetails
   */
  getDetailsWithEmployeeId() {
    return this.getEmployeeDetails()
  }
}

const myEmployee = new Employee("Alice", 30, 12345)

console.log(myEmployee.getDetailsWithEmployeeId())
