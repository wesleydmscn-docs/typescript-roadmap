interface ProductProps {
  id: number
  name: string
  price: number
}

class Product {
  id: number
  name: string
  price: number

  constructor(id: number, name: string, price: number)
  constructor(props: ProductProps)
  constructor(idOrProps: number | ProductProps, name?: string, price?: number) {
    if (
      typeof idOrProps === "number" &&
      name !== undefined &&
      price !== undefined
    ) {
      this.id = idOrProps
      this.name = name
      this.price = price
    } else if (typeof idOrProps === "object") {
      this.id = idOrProps.id
      this.name = idOrProps.name
      this.price = idOrProps.price
    } else {
      throw new Error("Invalid arguments")
    }
  }
}

const product1 = new Product({ id: 1, name: "Product A", price: 10 })
const product2 = new Product(2, "Product B", 20)

console.log(product1.id, product1.name, product1.price) // 1 'Product A' 10
console.log(product2.id, product2.name, product2.price) // 2 'Product B' 20
