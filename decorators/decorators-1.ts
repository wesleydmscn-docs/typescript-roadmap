type Constructor<T> = new (...args: any[]) => T

function TrackProduct<T extends Constructor<Product>>(Base: T) {
  return class extends Base {
    public tracked: boolean

    constructor(...args: any[]) {
      super(...args)
      this.tracked = true
    }
  }
}

function AnalyzeProduct<T extends Constructor<Product>>(Base: T) {
  return class extends Base {
    public analytics: object

    constructor(...args: any[]) {
      super(...args)
      this.analytics = {}
    }
  }
}

function TrackSomeEvent(event: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = target[propertyKey]
    let count = 1

    descriptor.value = function (...args: any[]) {
      this.analytics[event] = count++

      originalMethod.apply(this, args)
    }
  }
}

@TrackProduct
@AnalyzeProduct
class Product {
  constructor(public name: string) {}

  @TrackSomeEvent("view")
  viewProduct() {
    console.log(`Viewed product: ${this.name}`)
  }

  @TrackSomeEvent("purchase")
  purchaseProduct() {
    console.log(`Purchased product: ${this.name}`)
  }
}

class IntermediateProduct extends TrackProduct(AnalyzeProduct(Product)) {}

type ModifiedProduct = Product & IntermediateProduct
const ModifiedProductClass = IntermediateProduct as Constructor<ModifiedProduct>

const myProduct = new ModifiedProductClass("Widget")

console.log(myProduct.tracked) // true
console.log(myProduct.analytics) // {}

myProduct.viewProduct()
myProduct.viewProduct()
myProduct.purchaseProduct()

console.log(myProduct.analytics) // { view: 2, purchase: 1 }
