/*

Exercise - Numeric Enums

Problem description:

Create a numeric enumeration called `Month` that represents the months of the year, 
starting with 1 for January and ending with 12 for December.

Then create a function called `getMonthName` that accepts an argument of type `Month` and 
returns the corresponding month name as a string.

Finally, create an instance of the `Month` enumeration, call the `getMonthName` 
function to get the month name, and print it to the console.

Example:

```
const month = Month.January;
const monthName = getMonthName(month);
console.log(monthName); // Must print "January"
```

Make sure you create the `Month` enumeration correctly, implement the `getMonthName` function, 
and make the appropriate call to get and print the month name.

*/

enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function getMonthName(month: Month) {
  return Month[month]
}

const month = Month.January
const monthName = getMonthName(month)

console.log(monthName) // "January"
