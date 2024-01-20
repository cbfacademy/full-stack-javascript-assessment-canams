import { User } from "../types/User"
import { createToken } from "./firebase"

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

export const getUser = async () => {
  const headers = await createToken()
  return fetch("http://localhost:8080/user", { headers: headers })
}

