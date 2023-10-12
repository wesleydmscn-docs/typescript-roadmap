type User = {
  id: number
  name: string
  email: string
  phone: string
}

function omitPhone(user: User) {
  const newObj = {} as Omit<User, "phone">

  for (const property in user) {
    if (property !== "phone") {
      newObj[property] = user[property]
    }
  }

  return newObj
}

const result = omitPhone({
  id: 1,
  name: "Wesley",
  email: "test@email.com",
  phone: "0000000000",
})

console.log(result)
