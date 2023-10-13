type Data = string | null
type Numbers = number | null | undefined

interface ValidPerson {
  name: NonNullable<Data>
  age: NonNullable<Numbers>
  email: string
}

const person: ValidPerson = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
}
