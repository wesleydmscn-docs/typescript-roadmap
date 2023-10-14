function createPerson(name: string, age: number) {
  return { name, age }
}

type Person = ReturnType<typeof createPerson>

const person: Person = { name: "Zuck", age: 20 }
