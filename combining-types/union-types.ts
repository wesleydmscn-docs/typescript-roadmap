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

function printItem(item: Product | Service) {
  if ("price" in item) {
    console.log(`${item.name} - Price: $${item.price}`)
  } else {
    console.log(`${item.name} - Hourly Rate: $${item.hourlyRate}`)
  }
}

const product: Product = { id: 1, name: "Product 1", price: 10 }
const service: Service = { id: 2, name: "Service 1", hourlyRate: 15 }

printItem(product) // "Product 1 - Price: $10"
printItem(service) // "Service 1 - Hourly Rate: $15"
