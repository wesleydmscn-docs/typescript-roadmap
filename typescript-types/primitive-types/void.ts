/*

Exercise: Greeting Function

Create a TypeScript program that defines a greeting function that takes a person's name
as input and displays a personalized greeting on the console.

Requirements:

1. Create a function called `greeting` that accepts a `name` parameter of type `string`.
2. Within the role, create a custom greeting, for example, "Hello, [name]! Welcome!".
3. Display the greeting on the console.
4. Make sure that the `greeting` function does not return any value (use the `void` type to indicate this).

Example expected output:

```
greeting("Alice")
// Output: Hello Alice! Welcome!

greeting("Bob")
// Output: Hello Bob! Welcome!
```

Make sure that the `greeting` function does not have a `return` statement 
and use the `void` type to indicate that it does not return any value.

*/

function greeting(name: string): void {
  console.log(`Hello, ${name}! Welcome!`)
}

greeting("Wesley")
greeting("Elliot Alderson")
