/*

Exercise - Interface - Extending Types

Problem description:

Create an interface called `Person` with the following properties:

- `name` (a required string)
- `age` (an optional number)
- `email` (an optional string)

Now, create a new interface called `Employee` that extends the `Person` interface and adds the following property:

- `employeeId` (a required number)

Next, create a function called `printEmployee` that accepts a parameter of type `Employee` 
and prints the employee information in the following format:

```
Name: [employee name]
Age: [employee's age, or "Unspecified" if age is not defined]
Email: [employee email, or "Unspecified" if email is not defined]
Employee ID: [employeeId of employee]
```

Remember that the `Employee` interface extends the `Person` interface, so it must include
all the properties of `Person` plus the `employeeId`.

Inputs:

```
const employee1: Employee = {
  Name: "Carlos",
  age: 35,
  email: "carlos@email.com",
  Employee ID: 1234,
};

const employee2: Employee = {
  name: "Anna",
  Employee ID: 5678,
};
```

Expected Outputs:

```
Name: Carlos
Age: 35
Email: carlos@email.com
Employee ID: 1234

Name: Anna
Age: Not specified
Email: Not specified
Employee ID: 5678
```

*/

interface Person {
  name: string
  age?: number
  email?: string
}

interface Employee extends Person {
  employeeId: number
}

function printEmployee({ name, age, email, employeeId }: Employee) {
  console.log(
    `Name: ${name}\nAge: ${age || "Unspecified"}\nEmail: ${
      email || "Unspecified"
    }\nEmployee ID: ${employeeId}\n`
  )
}

const employee1: Employee = {
  name: "Carlos",
  age: 35,
  email: "carlos@email.com",
  employeeId: 1234,
}

const employee2: Employee = {
  name: "Anna",
  employeeId: 5678,
}

printEmployee(employee1)
printEmployee(employee2)
