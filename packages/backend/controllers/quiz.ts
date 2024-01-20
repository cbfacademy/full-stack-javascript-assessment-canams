import express from "express"
import SkinProfile from "../models/SkinProfile"
import authenticate from "../middleware/authenticate"

const router = express.Router()

// TODO: implement
// router.get(
//   "/",
//   authenticate,
//   async (req: express.Request, res: express.Response) => {
//     const { user } = req.body
//     console.log(user)
//     res.status(200).send({
//       name: user.name,
//       email: user.email,
//       skinProfile: user.skin_profile ?? null,
//     })
//   }
// )

router.post("/", authenticate, async (req, res) => {
  const { type, concerns, prevRoutine, complexity, budget, user } = req.body

  if (!type || !concerns || !prevRoutine || !complexity || !budget) {
    return res.status(400).json({
      error:
        "Invalid request body. Must contain type, concerns, prevRoutine, complexity and budget.",
    })
  }

  const profile = new SkinProfile({
    type: type,
    concerns: concerns,
    prevRoutine: prevRoutine,
    complexity: complexity,
    budget: budget,
  })

  try {
    const filter = { _id: user._id }
    const userCollection = req.app.locals.db.collection("user")
    await userCollection.updateOne(
      filter,
      { $set: { skin_profile: profile } },
      (err: Error) => {
        if (err) throw err
        console.log("1 document updated")
      }
    )

    return res.status(200).json({ success: "New skin profile added" })
  } catch (err: any) {
    console.error(err.message)
    return res.status(500).json({ error: "Server error. Please try again" })
  }
})

export default router

