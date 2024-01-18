import { User } from "../types/User"

export const createUser = (newUser: User) =>
  fetch("http://localhost:8080/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })

