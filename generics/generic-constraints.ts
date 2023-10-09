interface Employee {
  id: number
  name: string
}

function findEmployeeById<T extends Employee, K extends T["id"]>(
  employees: T[],
  id: K
) {
  return employees.find((employee) => employee.id === id) || null
}

const employees: Employee[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]

const foundEmployee = findEmployeeById(employees, 2)

console.log(foundEmployee) // { id: 2, name: "Bob" }
