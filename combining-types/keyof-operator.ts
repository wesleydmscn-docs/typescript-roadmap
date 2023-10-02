interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

function getProperty(task: Task, key: keyof Task) {
  return task[key]
}

const task: Task = {
  id: 1,
  title: "Complete Assignment",
  description: "Finish the TypeScript assignment.",
  completed: false,
}

const title = getProperty(task, "title") // "Complete Assignment"
const completed = getProperty(task, "completed") // false
