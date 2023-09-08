/*

Exercise - Readonly Tuple Types

Problem description:

Create an type called `ReadOnlyPair` that represents a pair of values,
where both values ​​are readonly. This type must be a tuple type with two index:

- `0` (a read-only number)
- `1` (a read-only number)

Next, create a function called `printPair` that accepts a pair of values ​​of type `ReadOnlyPair`
and prints those values ​​in the following format:

```
Value 1: [first value]
Value 2: [second value]
```

Inputs:

```
const pair: ReadOnlyPair = [42, 78];
```

Expected Output:

```
printPair(pair);
```

Expected output for the example above:

```
Value 1: 42
Value 2: 78
```

*/

type ReadOnlyPair = readonly [number, number]

function printPair(pair: ReadOnlyPair) {
  for (let i = 0; i < pair.length; i++) {
    console.log(`Value ${i + 1}: ${pair[i]}`)
  }
}

const pair: ReadOnlyPair = [42, 78]

printPair(pair)
