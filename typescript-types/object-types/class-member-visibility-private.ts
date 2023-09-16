/*

Exercise - Member Visibility - private

Problem description:

Create a class called `BankAccount` that represents a bank account with the following properties and methods:

- Properties:
   - `accountNumber` (a private string) - represents the bank account number.
   - `balance` (a private number) - represents the bank account balance.

- Methods:
   - `constructor` - a constructor that takes `accountNumber` as a parameter and initializes the `accountNumber` and `balance` properties. The initial balance must be zero.

   - `deposit` - a method that accepts a value (a number) as a parameter and adds that value to the account balance.

   - `withdraw` - a method that accepts a value (a number) as a parameter and subtracts this value from the account balance, as long as the balance is sufficient. Otherwise, you must not make the withdrawal and must print a message informing you that the balance is insufficient.

- Add a public method called `getBalance` that returns the account balance.

The `BankAccount` class must ensure that the account number and balance are private and not directly accessible from outside the class.

Create an instance of the `BankAccount` class, perform some deposit and withdrawal operations and check the balance using the `getBalance` method.

Example:
```
const myAccount = new BankAccount("123456");
myAccount.deposit(1000);
console.log(myAccount.getBalance()); // Should print 1000
myAccount.withdraw(500);
console.log(myAccount.getBalance()); // Should print 500
myAccount.withdraw(700); // Should print "Insufficient balance."
```

*/

class BankAccount {
  constructor(private accountNumber: string, private balance: number = 0) {}

  deposit(value: number) {
    this.balance += value
  }
  withdraw(value: number) {
    this.balance < value
      ? console.log("Insufficient balance")
      : (this.balance -= value)
  }

  getBalance() {
    return this.balance
  }
}

const myAccount = new BankAccount("123456")

myAccount.deposit(1000)
console.log(myAccount.getBalance()) // 1000

myAccount.withdraw(500)
console.log(myAccount.getBalance()) // 500

myAccount.withdraw(700) // "Insufficient balance."
