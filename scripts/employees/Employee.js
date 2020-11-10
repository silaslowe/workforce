export const Employee = (employeeObj, computerObj) => {
  const { firstName, lastName, age } = employeeObj
  const { model, year } = computerObj
  return `
    <p>${firstName} ${lastName}</p>
    <p>${age}</p>
    <p>${model}</p>
    <p>${year}</p>
    `
}
