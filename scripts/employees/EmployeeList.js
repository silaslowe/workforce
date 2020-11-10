import { getComputers, useComputers } from "../computers/ComputerDataProvider.js"
import { Employee } from "./Employee.js"
import { getEmployees, useEmployees } from "./EmployeeDataProvider.js"

const employeeTarget = document.querySelector("#container")

export const employeeList = () => {
  return getComputers()
    .then(getEmployees)
    .then(() => {
      const employees = useEmployees()
      const computers = useComputers()
      console.log("LIST", employees, computers)
      render(employees, computers)
    })
}

const render = (employeeArray, computerArray) => {
  employeeTarget.innerHTML = `<section>
  ${employeeArray
    .map((employee) => {
      const computerRelationship = computerArray.filter(
        (assignedComp) => assignedComp.id === employee.computerId
      )[0]
      console.log(computerRelationship)
      return Employee(employee, computerRelationship)
    })
    .join("")}
  </section>`
}
