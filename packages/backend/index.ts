import express from "express"
import helmet from "helmet"
import cors from "cors"
import userRouter from "./controllers/user"
import dotenv from "dotenv"
import connectToDatabase from "./services/db"

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

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// })

// await client.connect()
const PORT = process.env.PORT || 5000

connectToDatabase(uri, app)
  .then(() => {
    app.use("/user", userRouter)

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`)
    })
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error)
    process.exit()
  })

// app.get("/", (req, res) => {
//   res.send("Hello from the CBF Academy backend!")
// })

// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`)
// })

