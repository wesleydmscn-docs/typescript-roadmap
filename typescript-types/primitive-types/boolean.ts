/*

Exercise GPT: Voting Eligibility Check

Create a TypeScript program that determines whether a person is eligible to vote based on their age.
Ask the user to enter their age as input, then use the boolean primitive type to determine whether
the person is eligible to vote.

Requirements:

1. Create a function called `checkVoteEligibility` that accepts age as a parameter and returns
a boolean value indicating whether the person is eligible to vote.

2. The minimum voting age is 16 years old.
3. Ask the user to enter their age.
4. Use the `checkVoteEligibility` function to determine if the person is eligible.
5. Display a message indicating whether the person is eligible to vote or not.

Example expected output:

```
Enter your age: 18
You are eligible to vote.
```

```
Enter your age: 15
You are not eligible to vote.
```

Remember to set the return type of the `checkVoteEligibility` function to boolean and do 
the appropriate age check within the function. Good luck!

*/

function checkVoteEligibility(age: number): boolean {
  return age >= 16
}

const isEligibility = checkVoteEligibility(16)

console.log(
  isEligibility ? "You are eligible to vote." : "You are not eligible to vote."
)
