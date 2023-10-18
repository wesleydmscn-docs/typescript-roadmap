import { add } from "./external-modules-a"

import { Parameters } from "./external-modules-a"

function printSum({ x, y }: Parameters) {
  const sum = add({ x, y })
  console.log(sum)
}

printSum({ x: 10, y: 10 })
