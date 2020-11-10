import { getComputers, useComputers } from "../computers/ComputerDataProvider.js"
import { getDepartments, useDepartments } from "../departments/DepartmentProvider.js"
import { Employee } from "./Employee.js"
import { getEmployees, useEmployees } from "./EmployeeDataProvider.js"

const employeeTarget = document.querySelector("#container")

export const employeeList = () => {
  return getComputers()
    .then(getEmployees)
    .then(getDepartments)
    .then(() => {
      const employees = useEmployees()
      const computers = useComputers()
      const departments = useDepartments()
      console.log("LIST", employees, computers, departments)
      render(employees, computers, departments)
    })
}

const render = (employeeArray, computerArray, departmentArray) => {
  employeeTarget.innerHTML = employeeArray
    .map((employee) => {
      const computerRelationship = computerArray.filter(
        (assignedComp) => assignedComp.id === employee.computerId
      )[0]
      const departmentRelationship = departmentArray.filter(
        (department) => department.id === employee.departmentId
      )[0]
      return Employee(employee, computerRelationship, departmentRelationship)
    })
    .join("")
}
