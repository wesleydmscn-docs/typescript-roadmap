type OriginalObject = {
  name: string
  age: number
  isAdmin: boolean
}

type ReadOnly<T> = {
  readonly [Property in keyof T]: T[Property]
}

const readOnlyObject: ReadOnly<OriginalObject> = {
  name: "Alice",
  age: 30,
  isAdmin: true,
}

// Now try assigning a new value to a property of the readOnlyObject object
// readOnlyObject.name = "Bob" // This should generate a compilation error
