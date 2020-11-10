export const Employee = (employeeObj, computerObj, departmentObj) => {
  const { firstName, lastName, age } = employeeObj
  const { model, year } = computerObj
  const { name } = departmentObj
  return `
  <div class="employee">
  <header class="employee__name">
    <h1>
      ${firstName} ${lastName}
    </h1>
  </header>
  <p>Age: ${age}</p>
  <section class="employee__computer">
    Currently using a ${year} ${model}
  </section>
  <section class="employee__department">Works in the ${name} department</section>
</div>
    `
}
