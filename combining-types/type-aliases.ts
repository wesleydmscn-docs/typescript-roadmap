interface Employee {
  id: number
  name: string
  role: string
}

interface Payroll {
  employee: Employee
  salary: number
}

type EmployeeWithSalary = Employee & Pick<Payroll, "salary">

function printEmployeeWithSalary({ name, role, salary }: EmployeeWithSalary) {
  console.log(`Name: ${name}, Role: ${role}, Salary: $${salary}`)
}

const employee: Employee = { id: 1, name: "John", role: "Developer" }
const payroll: Payroll = { employee, salary: 50000 }

const employeeWithSalary: EmployeeWithSalary = {
  ...employee,
  salary: payroll.salary,
}

printEmployeeWithSalary(employeeWithSalary) // "Name: John, Role: Developer, Salary: $50000"
