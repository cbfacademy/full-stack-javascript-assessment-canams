import mongoose from "mongoose"
import { skinProfileModel } from "./SkinProfile"

const userSchema = new mongoose.Schema({
  name: String,
  firebaseId: String,
  email: String,
  skin_profile: { type: mongoose.Schema.Types.ObjectId, ref: "SkinProfile" },
  //   routine: String,
  //   progress: String,
})
userSchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model("User", userSchema)

