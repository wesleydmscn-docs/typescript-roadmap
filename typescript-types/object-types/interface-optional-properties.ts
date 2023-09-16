/*

Exercise - Interface - Optional Properties

Problem description:

Create an interface called `Person` that has the following properties:

- `name` (a required string)
- `age` (an optional number)
- `email` (an optional string)

Next, create a function called `printPerson` that accepts a parameter of type `Person` and prints out the person's information in the following format:

```
Name: [person's name]
Age: [person's age, or "Unspecified" if age is not defined]
Email: [person's email, or "Unspecified" if email is not defined]
```

Remember that the `age` and `email` properties are optional, so your function must handle cases where these properties may or may not be present.

Inputs:

```
const person1: Person = {
  name: "John",
  age: 30,
  email: "joao@email.com",
};

const person2: Person = {
  name: "Mary",
  age: undefined,
  email: "maria@email.com",
};

const person3: Person = {
  name: "Peter",
};
```

Expected Outputs:

```
Name: John
Age: 30
Email: joao@email.com

Name: Maria
Age: Not specified
Email: maria@email.com

Name: Pedro
Age: Not specified
Email: Not specified
```

*/

interface Person {
  name: string
  age?: number
  email?: string
}

function printPerson(person: Person) {
  console.log(
    `Name: ${person.name}\nAge: ${person.age || "Not specified"}\nEmail: ${
      person.email || "Not specified"
    }\n`
  )
}

const person1: Person = {
  name: "John",
  age: 30,
  email: "joao@email.com",
}

const person2: Person = {
  name: "Mary",
  age: undefined,
  email: "maria@email.com",
}

const person3: Person = {
  name: "Peter",
}

printPerson(person1)
printPerson(person2)
printPerson(person3)
