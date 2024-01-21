import admin from "firebase-admin"
import dotenv from "dotenv"
import { applicationDefault } from "firebase-admin/app"

dotenv.config()

const firebase = admin.initializeApp({
  credential: applicationDefault(),
})

export default {
  auth: firebase.auth(),
}

