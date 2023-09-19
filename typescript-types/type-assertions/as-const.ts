/*

Exercise - Literals with `as const`

Problem description:

Create a constant called `weekdays` that represents the days of the week as 
string literals using the `as const` keyword.

Then create a function called `isWeekend` that accepts a day as an argument and returns 
`true` if the day is a weekend (Saturday or Sunday) and `false` otherwise.

Use the `typeof` type to create a type that represents the literals of the days of the week
and use it to type the argument of the `isWeekend` function.

Finally, call the `isWeekend` function with different days of the week and print the results to the console.

Example:
```
const isSunday = isWeekend(weekdays.Sunday);
console.log(isSunday); // Must print true

const isTuesday = isWeekend(weekdays.Tuesday);
console.log(isTuesday); // Must print false
```

Make sure to use the constant `weekdays` with string literals `as const` to represent the days 
of the week and perform the correct check in the `isWeekend` function.

*/

const weekdays = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7,
} as const

function isWeekend(day: number) {
  return day > 5 && day <= 7
}

const isSunday = isWeekend(weekdays.Sunday)
console.log(isSunday) // true

const isTuesday = isWeekend(weekdays.Tuesday)
console.log(isTuesday) // false
