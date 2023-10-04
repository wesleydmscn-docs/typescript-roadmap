interface Employee {
  id: number
  name: string
  role: string
}

function isManager(employee: Employee) {
  return employee.role === "Manager"
}

const employee1: Employee = { id: 1, name: "John", role: "Manager" }
const employee2: Employee = { id: 2, name: "Alice", role: "Developer" }

const result1 = isManager(employee1) // true
const result2 = isManager(employee2) // false
