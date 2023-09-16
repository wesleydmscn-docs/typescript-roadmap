/*

Exercise - Interface - Index Signatures

Problem description:

Create an interface called `Dictionary` that represents a dictionary, where keys are strings
and values ​​are numbers. Use an index signature to define this interface.

Next, create a function called `printDictionary` that accepts a parameter of type `Dictionary` 
and prints the dictionary keys and values ​​in the following format:

```
Key: [key]
Value: [value]
```

Inputs:

```
const myDictionary: Dictionary = {
  "key1": 42,
  "key2": 100,
  "key3": 7,
};
```

Expected Outputs:

```
Key: key1
Amount: 42

Key: key2
Amount: 100

Key: key3
Value: 7
```

Make sure your interface and function are configured correctly to handle dictionaries 
where the keys are strings and the values ​​are numbers.

*/

interface Dictionary {
  [key: string]: number
}

function printDictionary(dictionary: Dictionary) {
  for (const key in dictionary) {
    console.log(`Key: ${key}\nValue: ${dictionary[key]}\n`)
  }
}

const myDictionary: Dictionary = {
  key1: 42,
  key2: 100,
  key3: 7,
}

printDictionary(myDictionary)
