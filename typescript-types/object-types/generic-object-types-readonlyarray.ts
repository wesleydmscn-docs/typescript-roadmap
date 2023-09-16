/*

Exercise - Interface - The ReadonlyArray Type

Problem description:

Create an interface called `Person` with the following properties:

- `name` (a required string)
- `age` (a required number)
- `email` (an optional string)

Now, create a function called `filterAdults` that accepts a parameter of
type `ReadonlyArray<Person>` (that is, a read-only array of `Person` objects) and returns
a new array containing only people whose age is equal or greater to 18 years.

Inputs:

```
const people: ReadonlyArray<Person> = [
  { name: "Alice", age: 25, email: "alice@email.com" },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30, email: "charlie@email.com" },
];
```

Expected Outputs:

```
const adults: ReadonlyArray<Person> = filterAdults(people);
console.log(adults);
```

Expected output for the example above:

```
[
  { name: "Alice", age: 25, email: "alice@email.com" },
  { name: "Charlie", age: 30, email: "charlie@email.com" }
]
```

*/

interface Person {
  name: string
  age: number
  email?: string
}

function filterAdults(adults: ReadonlyArray<Person>) {
  return adults.filter((adult) => adult.age >= 18)
}

const people: ReadonlyArray<Person> = [
  { name: "Alice", age: 25, email: "alice@email.com" },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30, email: "charlie@email.com" },
]

const adults: ReadonlyArray<Person> = filterAdults(people)

console.log(adults)
