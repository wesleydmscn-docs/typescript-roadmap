interface TaskList {
  title: string
  tasks: Record<string, boolean>
}

const sampleTaskList: TaskList = {
  title: "My Task List",
  tasks: {
    "Task 1": true,
    "Task 2": false,
    "Task 3": true,
  },
}
