class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class Dog extends Animal {
  breed: string

  constructor(name: string, breed: string) {
    super(name)
    this.breed = breed
  }
}

class Cat extends Animal {
  color: string

  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
}

function isDog(animal: object) {
  return animal instanceof Dog
}

const dog = new Dog("Buddy", "Golden Retriever")
const cat = new Cat("Whiskers", "Gray")

const result1 = isDog(dog) // true
const result2 = isDog(cat) // false
