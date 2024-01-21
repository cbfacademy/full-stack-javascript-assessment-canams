import express from "express"
import helmet from "helmet"
import cors from "cors"
import userRouter from "./controllers/user"
import quizRouter from "./controllers/quiz"
import dotenv from "dotenv"
import connectToDatabase from "./services/db"
import path from "path"

dotenv.config()
const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

// mongo set up
let uri = ""
if (process.env.MONGO_URI) {
  uri = process.env.MONGO_URI
} else {
  throw new Error("Mongo URI not set")
}

const PORT = process.env.PORT || 8080

connectToDatabase(uri, app)
  .then(() => {
    app.use("/api/user", userRouter)
    app.use("/api/profile", quizRouter)
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "staging"
    ) {
      app.use(express.static("client/build"))
      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
      })
    }

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`)
    })
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error)
    process.exit()
  })

