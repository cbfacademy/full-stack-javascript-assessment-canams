import { SkinProfile } from "../types/SkinProfile"
import { createToken } from "./firebase"

export const updateUserProfile = async (newProfile: SkinProfile) => {
  const headers = await createToken()
  return fetch("/api/profile", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(newProfile),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
}

export const getUserRoutine = async (type: string, concern: string) => {
  const params = new URLSearchParams({
    type: type,
    concern: concern,
  })
  const headers = await createToken()
  return fetch(`/api/profile/routine?${params}`, {
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
}

