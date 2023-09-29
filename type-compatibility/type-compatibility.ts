interface Person {
  name: string
  age: number
}

interface Customer {
  name: string
  age: number
  email: string
}

function assignPerson(person: Person, customer: Customer) {
  const isCompatible = Object.keys(person).every((prop) =>
    Object.keys(customer).includes(prop)
  )

  if (isCompatible) {
    return Object.assign(person, customer) && true
  }

  return false
}

const person: Person = { name: "Alice", age: 30 }
const customer: Customer = { name: "Bob", age: 25, email: "bob@example.com" }

const result1 = assignPerson(person, customer) // Must assign customer to person

console.log(result1) // true
console.log(person) // { name: 'Bob', age: 25, email: 'bob@example.com' }

const result2 = assignPerson(person, { name: "Charlie", age: 35 }) // Should fail due to lack of email

console.log(result2) // false
