/*

Exercise - Interface - Intersection Types

Problem description:

Create two interfaces, `Person` and `Employee`, with the following properties:

Person:

- `name` (a required string)
- `age` (an optional number)
- `email` (an optional string)

Employee:

- `employeeId` (a required number)
- `position` (a required string)

Now, create a third interface called `PersonEmployee` that is an intersection between `Person` 
and `Employee`, i.e. it should include all the properties of both interfaces.

Next, create a function called `printPersonEmployee` that accepts a parameter of type `PersonEmployee`
and prints out the employee information in the following format:

```
Name: [employee person's name]
Age: [age of employee, or "Unspecified" if age is not specified]
Email: [employee person's email, or "Unspecified" if email is not defined]
Employee ID: [employeeId of employee person]
Position: [position of the employee]
```

Inputs:

```
const personEmployee1: PersonEmployee = {
  name: "Carla",
  age: 28,
  email: "carla@email.com",
  employeeId: 12345,
  position: "Manager",
};

const personEmployee2: PersonEmployee = {
  name: "Peter",
  employeeId: 67890,
  position: "Developer",
};
```

Expected Outputs:

```
Name: carla
Age: 28
Email: carla@email.com
Employee ID: 12345
Position: Manager

Name: Pedro
Age: Not specified
Email: Not specified
Employee ID: 67890
Position: Developer
```

*/

interface Person {
  name: string
  age?: number
  email?: string
}

interface Employee {
  employeeId: number
  position: string
}

type PersonEmployee = Person & Employee

function printPersonEmployee({
  name,
  age,
  email,
  employeeId,
  position,
}: PersonEmployee) {
  console.log(`Name: ${name}\nAge: ${age || "Unspecified"}`)
  console.log(`Email: ${email || "Unspecified"}\nEmployee ID: ${employeeId}`)
  console.log(`Position: ${position}\n`)
}

const personEmployee1: PersonEmployee = {
  name: "Carla",
  age: 28,
  email: "carla@email.com",
  employeeId: 12345,
  position: "Manager",
}

const personEmployee2: PersonEmployee = {
  name: "Peter",
  employeeId: 67890,
  position: "Developer",
}

printPersonEmployee(personEmployee1)
printPersonEmployee(personEmployee2)
