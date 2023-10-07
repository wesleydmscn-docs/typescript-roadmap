class Media {
  constructor(public title: string, public author: string) {}

  getInfo(): object {
    return { title: this.title, author: this.author }
  }
}

class Book extends Media {
  constructor(
    public title: string,
    public author: string,
    public isbn: string,
    public numberOfPages: number
  ) {
    super(title, author)
  }

  getInfo(): object {
    return { isbn: this.isbn, numberOfPages: this.numberOfPages }
  }
}

class CD extends Media {
  constructor(
    public title: string,
    public author: string,
    public numberOfTracks: number,
    public playTime: string
  ) {
    super(title, author)
  }

  getInfo(): object {
    return { numberOfTracks: this.numberOfTracks, playTime: this.playTime }
  }
}

class DVD extends Media {
  constructor(
    public title: string,
    public author: string,
    public lengthInMinutes: number,
    public language: string
  ) {
    super(title, author)
  }

  getInfo(): object {
    return { lengthInMinutes: this.lengthInMinutes, language: this.language }
  }
}

const book = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "1234567890",
  224
)
const cd = new CD("Abbey Road", "The Beatles", 17, "47:27")
const dvd = new DVD("Inception", "Christopher Nolan", 148, "English")

console.log(book.getInfo())
console.log(cd.getInfo())
console.log(dvd.getInfo())
