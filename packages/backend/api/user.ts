import express from "express"
import authenticate from "../middleware/authenticate"
import firebaseAdmin from "../config/firebase"

const router = express.Router()

// TODO: implement
router.get(
  "/",
  authenticate,
  async (req: express.Request, res: express.Response) => {
    res.status(200).json(req)
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
      await userCollection.insertOne({
        email,
        name,
        firebaseId: newFirebaseUser.uid,
      })
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

