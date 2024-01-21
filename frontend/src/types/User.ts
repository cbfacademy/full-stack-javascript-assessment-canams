import { SkinProfile } from "./SkinProfile"

export type User = {
  name: string
  email: string
  skinProfile?: SkinProfile
  password: string
}

