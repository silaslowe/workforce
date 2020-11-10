let computers = []

export const useComputers = () => {
  return [...computers]
}

export const getComputers = () => {
  return fetch("http://localhost:8088/computers")
    .then((res) => res.json())
    .then((parsedComputers) => {
      computers = parsedComputers
    })
}
