import admin from "firebase-admin"
import dotenv from "dotenv"
import { applicationDefault } from "firebase-admin/app"

dotenv.config()

const serviceAccount = JSON.parse(process.env.GOOGLE_CREDS)

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export default {
  auth: firebase.auth(),
}

