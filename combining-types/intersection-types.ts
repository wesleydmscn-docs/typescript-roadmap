interface Product {
  id: number
  name: string
  price: number
}

interface Service {
  id: number
  name: string
  hourlyRate: number
}

function combineProductAndService(
  product: Product,
  service: Service
): Product & Service {
  return { ...product, ...service }
}

const product: Product = { id: 1, name: "Product 1", price: 10 }
const service: Service = { id: 2, name: "Service 1", hourlyRate: 15 }

const combined = combineProductAndService(product, service)

console.log(combined)
