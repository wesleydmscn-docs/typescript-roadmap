/*

Exercise: Creating Interface for Products

Create a TypeScript program that handles product information.
You must define an interface to represent a product and then create functions
to add and list products.

Requirements:

1. Create an interface called `Product` with the following properties:
   - `name` (string): the name of the product.
   - `price` (number): the price of the product.
   - `description` (string): a brief description of the product.
2. Declare an array called `catalog` which will store objects of type `Product`.
3. Create a function called `addProduct` that accepts an object of type `Product` 
as a parameter and adds it to the `catalog` array.

4. Create a function called `listProducts` that iterates through the `catalog`
array and displays the information for each product in the console, including name, price and description.

Example of use:

```typed
const product1: Product = {
  name: "Smartphone",
  price: 999.99,
  description: "An advanced smartphone with a high-resolution camera."
};

const product2: Product = {
  name: "laptop",
  price: 1499.99,
  description: "A powerful laptop with a fast processor."
};

addProduct(product1);
addProduct(product2);

listProducts();
```

Example expected output:

```
Product list:
Product: smartphone
Price: $999.99
Description: An advanced smartphone with a high-resolution camera.

Product: Laptop
Price: $1,499.99
Description: A powerful laptop with a fast processor.
```

This exercise should demonstrate the use of interfaces to create objects 
of type `Product` and the functions `addProduct` and `listProducts` to 
manipulate these objects.

*/

interface Product {
  name: string
  price: number
  description: string
}

type Catalog = Product[]

const catalog: Catalog = []

const product1: Product = {
  name: "Smartphone",
  price: 999.99,
  description: "An advanced smartphone with a high-resolution camera.",
}

const product2: Product = {
  name: "laptop",
  price: 1499.99,
  description: "A powerful laptop with a fast processor.",
}

function addProduct(product: Product, catalog: Catalog) {
  catalog.push(product)
}

function listProduct(catalog: Catalog) {
  for (const { name, price, description } of catalog) {
    console.log(
      `Product list:\nProduct: ${name}\nPrice: $${price}\nDescription: ${description}\n`
    )
  }
}

addProduct(product1, catalog)
addProduct(product2, catalog)

listProduct(catalog)
