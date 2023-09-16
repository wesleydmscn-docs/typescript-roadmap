/*

Exercise - Member Visibility - public

Problem description:

Create a class called `Book` that represents a book with the following properties and methods:

- Properties:
   - `title` (a required string) - represents the title of the book.
   - `author` (a required string) - represents the author of the book.
   - `year` (a mandatory number) - represents the year of publication of the book.

- Methods:
   - `constructor` - a constructor that takes `title`, `author` and `year` as parameters and initializes the corresponding properties.

   - `printInfo()` - a method that takes no parameters and prints book information in the following format:
     ```
     Title: [book title]
     Author: [book author]
     Year of Publication: [year of publication of the book]
     ```

Create an instance of the `Book` class with information from a book and call the `printInfo()` method to print the book details.

Inputs:

```
const myBook = new Book("The Art of War", "Sun Tzu", 500 BC);
myBook.printInfo();
```

Expected Output:

```
Title: The Art of War
Author: Sun Tzu
Year of Publication: 500 BC
```

*/

class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number
  ) {}

  printInfo() {
    console.log(
      `Title: ${this.title}\nAuthor: ${this.author}\nYear of Publication: ${this.year}`
    )
  }
}

const myBook = new Book("The Art of War", "Sun Tzu", 500)

myBook.printInfo()
