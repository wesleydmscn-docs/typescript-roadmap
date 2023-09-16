/*

Exercise - Interface - readonly Properties

Problem description:

Create an interface called `Product` that has the following properties:

- `name` (a required string)
- `price` (a required number)
- `readonly id` (a read-only number)

Next, create a function called `displayProduct` that accepts a parameter of type `Product` and
prints the product information in the following format:

```
Name: [product name]
Price: [product price]
ID: [product id]
```

Make sure the `id` property is read-only and cannot be modified after the `Product` object is created.

Inputs:

```
const product1: Product = {
  name: "T-shirt",
  price: 25.99,
  id: 12345,
};

const product2: Product = {
  name: "Tennis",
  price: 89.99,
  id: 67890,
};

// Try modifying the id property after object creation
product1.id = 99999; // This should result in an error
```

Expected Outputs:

```
Name: T-shirt
Price: 25.99
ID: 12345

Name: Tennis
Price: 89.99
ID: 67890
```

Make sure the `id` property is really read-only and that you cannot modify it after object creation.

*/

interface Product {
  name: string
  price: number
  readonly id: number
}

function displayProduct(product: Product) {
  console.log(
    `Name: ${product.name}\nPrice: ${product.price}\nID: ${product.id}\n`
  )
}

const product1: Product = {
  name: "Camiseta",
  price: 25.99,
  id: 12345,
}

const product2: Product = {
  name: "Tênis",
  price: 89.99,
  id: 67890,
}

displayProduct(product1)
displayProduct(product2)
