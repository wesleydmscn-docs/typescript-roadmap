/*

Exercise: Null or Undefined Value Management

Create a TypeScript program that declares a variable that can contain a numeric value
or be `null` or `undefined`. Then create a function that checks the variable's type and value
and displays a corresponding message.

Requirements:

1. Declare a variable named `numberOrNull` and assign a numeric value to it.
2. Next, set the variable `numberOrNull` to `null` or `undefined` with a probability of 50%.
3. Create a function called `verifyValor` that accepts the variable `numberOuNulo` as a parameter.
4. Inside the `verifyValue` function, check the type and value of `numberOuNull` and display 
a message sent on the console, check if it is a number, `null` or `undefined`.

5. Call the function `verifyValue` with the variable `numberOuNull` as an argument.

Example expected output:

```
The variable is a number: 42
```

or

```
The variable is null.
```

or

```
The variable is undefined.
```

Remember that you can randomly generate the value `null` or `undefined` in the variable `numeroOuNulo` to make the exercise more dynamic.

*/

let numberOrNull: number | undefined | null = 10

numberOrNull = [10, undefined, null][Math.floor(Math.random() * 3)]

function verifyValue(numberOrNull: number | undefined | null) {
  console.log(
    `The variable is ${numberOrNull ? typeof numberOrNull : numberOrNull}.`
  )
}

verifyValue(numberOrNull)
