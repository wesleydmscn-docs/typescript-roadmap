type User = {
  id: number
  name: string
  email: string
}

function updateUser(user: User, updates: Partial<User>): User {
  const userCopy = { ...user }

  for (const key in updates) {
    if (key in user) {
      userCopy[key] = updates[key]
    }
  }

  return userCopy
}

const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
}

const updates: Partial<User> = {
  name: "John Doe",
}

console.log(updateUser(user, updates)) // { id: 1, name: "John Doe", email: "john@example.com" }
