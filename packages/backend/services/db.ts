import { MongoClient, ServerApiVersion } from "mongodb"
import { Express } from "express"

export default async function connectToDatabase(
  connectionString: string,
  app: Express
) {
  const client = new MongoClient(connectionString, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })
  try {
    await client.connect()
    app.locals.db = client.db("chi-skin")
    console.log("Connected to MongoDB")
  } catch (err) {
    await client.close()
    throw new Error("Database connection error.")
  }
}

