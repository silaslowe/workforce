let departments = []

export const useDepartments = () => {
  return [...departments]
}

export const getDepartments = () => {
  return fetch("http://localhost:8088/departments")
    .then((res) => res.json())
    .then((parsedDepartments) => {
      departments = parsedDepartments
    })
}
