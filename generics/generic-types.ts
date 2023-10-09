class GenericStorage<T> {
  public storage: T[] = []

  addItem(item: T): void {
    this.storage.push(item)
  }

  getItem(): T | null {
    const lastItem = this.storage.length - 1
    return this.storage[lastItem]
  }
}

const numberStorage = new GenericStorage<number>()

numberStorage.addItem(10)
console.log(numberStorage.getItem()) // 10

const stringStorage = new GenericStorage<string>()

stringStorage.addItem("Hello")
console.log(stringStorage.getItem()) // "Hello"

const objectStorage = new GenericStorage<object>()

objectStorage.addItem({ name: "John" })
console.log(objectStorage.getItem()) // { name: "John" }
