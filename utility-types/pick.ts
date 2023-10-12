function pickProperties<T extends {}, K extends keyof T>(
  source: T,
  keys: string[]
): Pick<T, K> {
  const pickedProperties = {} as Pick<T, K>

  for (const key of keys) {
    if (key in source) {
      pickedProperties[key] = source[key]
    }
  }

  return pickedProperties
}

const source = {
  id: 1,
  name: "John Doe",
  age: 30,
  email: "john@example.com",
}

const keys = ["name", "email"]

console.log(pickProperties(source, keys))
