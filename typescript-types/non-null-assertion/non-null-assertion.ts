interface Product {
  id: number
  name: string
  price: number
}

interface CartItem {
  product: Product
  quantity: number
}

interface Order {
  id: number
  items: CartItem[]
  total: number
}

function calculateOrderTotal(order: Order) {
  return order!.items.reduce(
    (acc, curr) => curr!.product.price * curr!.quantity + acc,
    0
  )
}

const product1: Product = { id: 1, name: "Product 1", price: 10 }
const product2: Product = { id: 2, name: "Product 2", price: 20 }

const item1: CartItem = { product: product1, quantity: 3 }
const item2: CartItem = { product: product2, quantity: 2 }

const order: Order = { id: 123, items: [item1, item2], total: 0 }

const total = calculateOrderTotal(order)

console.log(total) // 70 (10 * 3 + 20 * 2)
