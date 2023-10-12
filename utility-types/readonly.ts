interface Person {
  name: string
  age: number
  email: string
}

function freezeObject(object: Person) {
  const freeze: Readonly<Person> = object
  return freeze
}

const person: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
}

const frozenPerson = freezeObject(person)
