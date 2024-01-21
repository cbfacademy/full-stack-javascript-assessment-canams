import firebaseAdmin from "../config/firebase"
import { Request, Response, NextFunction } from "express"

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1]

    let firebaseUser
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken)
    }

    if (!firebaseUser) {
      // Unauthorized
      console.log("firebase")

      return res.sendStatus(401)
    }

    const usersCollection = req.app.locals.db.collection("user")

    const user = await usersCollection.findOne({
      firebaseId: firebaseUser.user_id,
    })

    if (!user) {
      // Unauthorized
      console.log("mongo")

      return res.sendStatus(401)
    }

    req.body = { ...req.body, user: user }

    next()
  } catch (err) {
    console.log(err)
    //Unauthorized
    res.sendStatus(401)
  }
}

