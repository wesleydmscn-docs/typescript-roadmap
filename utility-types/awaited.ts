function fetchUserData(): Promise<{ name: string; age: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 30 })
    }, 1000)
  })
}

async function getUserData() {
  const userData = await fetchUserData()
  return userData
}

const user: Awaited<ReturnType<typeof getUserData>> = {
  name: "Bob",
  age: 25,
}
