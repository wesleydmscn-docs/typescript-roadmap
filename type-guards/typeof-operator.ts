interface Product {
  id: number
  name: string
  price: number
}

function getProductInfo(product: any): string {
  if (typeof product === "object" && product !== null) {
    const keys = Object.keys(product)
    if (
      keys.includes("id") &&
      keys.includes("name") &&
      keys.includes("price")
    ) {
      return "Product"
    }
  }
  return "Not a Product"
}

const product: Product = { id: 1, name: "Product 1", price: 10 }
const nonProduct = { name: "Not a Product" }

const result1 = getProductInfo(product) // "Product"
const result2 = getProductInfo(nonProduct) // "Not a Product"
