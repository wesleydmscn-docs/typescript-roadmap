function calculateTotal(values: number[]): number
function calculateTotal(...values: number[]): number

function calculateTotal(...args: any[]): number {
  if (args.length === 1 && Array.isArray(args[0])) {
    return args[0].reduce((acc, curr) => acc + curr, 0)
  } else {
    return args.reduce((acc, curr) => acc + curr, 0)
  }
}

const invoice1 = [10, 20, 30, 40, 50]

const total1 = calculateTotal(invoice1)
const total2 = calculateTotal(10, 20, 30, 40, 50)
