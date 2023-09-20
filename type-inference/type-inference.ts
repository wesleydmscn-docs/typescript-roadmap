type Task = {
  id: number
  title: string
  completed: boolean
  dueDate: Date
  [key: string]: number | string | boolean | Date
}

function filterTasks<T>(
  taskList: Task[],
  propertiesToSearch: { [key: string]: T }
) {
  const target = Object.keys(propertiesToSearch)

  return taskList.filter((task) =>
    target.every((property) => task[property] === propertiesToSearch[property])
  )
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
    dueDate: new Date("2023-09-30"),
  },
  {
    id: 2,
    title: "Pay bills",
    completed: true,
    dueDate: new Date("2023-09-15"),
  },
  {
    id: 3,
    title: "Estudor TypeScript",
    completed: false,
    dueDate: new Date("2023-09-25"),
  },
]

const filter = { title: "Buy groceries", completed: true }
const filteredTasks = filterTasks(tasks, filter)

console.log(filteredTasks) // []
