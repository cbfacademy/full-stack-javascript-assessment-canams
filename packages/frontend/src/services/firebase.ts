import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDFmT3rKLRTpE_dzmzCjNbLOPRoHszHv_Q",
  authDomain: "chi-skin.firebaseapp.com",
  projectId: "chi-skin",
  storageBucket: "chi-skin.appspot.com",
  messagingSenderId: "505933346548",
  appId: "1:505933346548:web:4872bb274ac552ca1050a1",
  measurementId: "G-33Z2XWKFW0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth()

export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    if (error.code === "auth/invalid-email") {
      throw "The email provided is invalid, please check and try again."
    }
    if (error.code === "auth/invalid-password") {
      throw "The password provided is invalid, please check and try again."
    }
    if (error.code === "auth/invalid-credential") {
      throw "The username or password provided is invalid, please check and try again."
    }
    throw "There was an error signing in. Please try again later."
  })

export const logOut = () => signOut(auth)

export const createToken = async () => {
  const user = auth.currentUser
  const token = user && (await user.getIdToken())
  const payloadHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  return payloadHeader
}

export default {
  auth,
}

