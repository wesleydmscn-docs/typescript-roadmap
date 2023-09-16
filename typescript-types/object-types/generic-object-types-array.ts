/*

Exercise - Generic Object Types - The Array Type

Problem description:

Create a generic function called `reverseArray` that accepts an array of any type and returns the reversed array. 
Be sure to use a generic type to make the function flexible to work with different types of arrays.

Inputs:

```
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d"];
```

Expected Outputs:

```
const reversedArr1: number[] = reverseArray(arr1); // [5, 4, 3, 2, 1]
const reversedArr2: string[] = reverseArray(arr2); // ["d", "c", "b", "a"]
```

*/

function reverseArray<Type>(array: Type[]) {
  return [...array].reverse()
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = ["a", "b", "c", "d"]

console.log(reverseArray(arr1))
console.log(reverseArray(arr2))
