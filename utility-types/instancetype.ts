class Product {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  items: Product[] = []

  addProduct(product: Product) {
    this.items.push(product)
  }

  calculateTotal() {
    return this.items.reduce((total, product) => total + product.price, 0)
  }
}

const cart: InstanceType<typeof ShoppingCart> = new ShoppingCart()

cart.addProduct(new Product("Dell XPS 13", 10000))
cart.addProduct(new Product("Raspberry PI 5", 1000))

cart.calculateTotal() // 11000
