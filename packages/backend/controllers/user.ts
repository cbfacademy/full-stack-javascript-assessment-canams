import express from "express"
import authenticate from "../middleware/authenticate"
import firebaseAdmin from "../config/firebase"
import User from "../models/User"

const router = express.Router()

router.get(
  "/",
  authenticate,
  async (req: express.Request, res: express.Response) => {
    const { user } = req.body
    res.status(200).send({
      name: user.name,
      email: user.email,
      skinProfile: user.skin_profile ?? null,
    })
  }
)

router.post("/", async (req, res) => {
  const { email, name, password } = req.body

  if (!email || !name || !password) {
    return res.status(400).json({
      error:
        "Invalid request body. Must contain email, password, and name for user.",
    })
  }

  try {
    const newFirebaseUser = await firebaseAdmin.auth.createUser({
      email,
      password,
    })

    if (newFirebaseUser) {
      const userCollection = req.app.locals.db.collection("user")
      const newUser = new User({
        name: name,
        email: email,
        firebaseId: newFirebaseUser.uid,
      })

      await userCollection.insertOne(newUser)
    }
    return res
      .status(200)
      .json({ success: "Account created successfully. Please sign in." })
  } catch (err: any) {
    if (err.code === "auth/email-already-exists") {
      return res
        .status(400)
        .json({ error: "User account already exists at email address." })
    }
    if (err.code === "auth/invalid-email") {
      return res.status(400).json({
        error:
          "The email address provided is invalid. Please check and try again.",
      })
    }
    if (err.code === "auth/invalid-password") {
      return res.status(400).json({
        error: "Password must be at least 6 characters",
      })
    }
    console.error(err.message)
    return res.status(500).json({ error: "Server error. Please try again" })
  }
})

export default router

