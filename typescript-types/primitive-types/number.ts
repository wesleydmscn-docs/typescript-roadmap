/*

Exercise: Grade Average Calculation

Create a TypeScript program that calculates the average of three student grades
and displays the result on the console.

Requirements:

1. Declare three variables to store student grades, for example: `grade1`, `grade2` and `grade3`.
2. Assign values ​​to grade variables with numerical values, for example: `grade1 = 7.5`, `grade2 = 8.0`, `grade3 = 9.0`.
3. Calculate the average of the grades and store the result in a variable called `average`. 
The average can be calculated by the formula `(grade1 + grade2 + grade3) / 3`.

4. Display the average grades on the console with an informational message.

Example expected output:

```
Student grades are: 7.5, 8.0, 9.0
The average grade is: 8.17
```

Make sure that the variables `grade1`, `grade2` and `grade3` contain numerical values ​
and that the average is calculated correctly before displaying it in the console.

*/

const grade1: number = 7.5,
  grade2: number = 8.0,
  grade3: number = 9.0

const average: number = (grade1 + grade2 + grade3) / 3

console.log("Student grades are:", [grade1, grade2, grade3].join(", "))
console.log("The average grade is:", average.toFixed(2))
