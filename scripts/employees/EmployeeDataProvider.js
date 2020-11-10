let employees = []

export const useEmployees = () => {
  return [...employees]
}

export const getEmployees = () => {
  return fetch("http://localhost:8088/employees")
    .then((res) => res.json())
    .then((parsedEmployees) => {
      employees = parsedEmployees
    })
}
