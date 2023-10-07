class Animal {
  makeSound() {}
}

class Lion extends Animal {
  makeSound(): string {
    return "Roar!"
  }
}

class Elephant extends Animal {
  makeSound(): string {
    return "Trumpet!"
  }
}

class Monkey extends Animal {
  makeSound(): string {
    return "Ooh oo aa aa!"
  }
}

const lion = new Lion()
const elephant = new Elephant()
const monkey = new Monkey()

console.log(lion.makeSound()) // "Roar!"
console.log(elephant.makeSound()) // "Trumpet!"
console.log(monkey.makeSound()) // "Ooh oo aa aa!"
