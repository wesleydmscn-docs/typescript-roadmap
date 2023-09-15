/*

Exercise - Heterogeneous Enums

Problem description:

Create a heterogeneous enumeration called `UserRole` that represents different user 
roles on a system, including:

- `Admin` - with an associated number of 1.
- `User` - with an associated number of 2.
- `Guest` - no associated number.

Then create a function called `getUserRole` that accepts an argument of type `UserRole` 
and returns a string representing the user's role.

Finally, create instances of the `UserRole` enumeration, call the `getUserRole` function 
to get the user role, and print it to the console.

Example:

```
const adminRole = UserRole.Admin;
const userRole = UserRole.User;
const guestRole = UserRole.Guest;

console.log(getUserRole(adminRole)); // Must print "Admin"
console.log(getUserRole(userRole)); // Must print "User"
console.log(getUserRole(guestRole)); // Must print "Guest"
```

Make sure you create the `UserRole` enumeration correctly with different types of 
associated values and implement the `getUserRole` function to return the string 
representation of the user role.

*/

enum UserRole {
  Admin = 1,
  User = 2,
  Guest,
}

/* Enum not Recommended:

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
 
-------------------- */

function getUserRole(role: UserRole) {
  return UserRole[role]
}

const adminRole = UserRole.Admin
const userRole = UserRole.User
const guestRole = UserRole.Guest

console.log(getUserRole(adminRole)) // "Admin"
console.log(getUserRole(userRole)) // "User"
console.log(getUserRole(guestRole)) // "Guest"
