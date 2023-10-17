type LinkedList<T> = {
  value: T
  next: LinkedList<T> | null
}

type ListValues = number | number[] | string | boolean

const list: LinkedList<ListValues> = {
  value: "Hello Recursive Types!",
  next: {
    value: 1 + 1,
    next: {
      value: false,
      next: {
        value: [1, 2, 3],
        next: null,
      },
    },
  },
}
