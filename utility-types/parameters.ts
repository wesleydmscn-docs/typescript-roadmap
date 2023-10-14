function greet(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`)
}

type GreetParams = Parameters<typeof greet>

const params: GreetParams = ["Alice", 30]
