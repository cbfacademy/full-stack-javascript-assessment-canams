import mongoose from "mongoose"

const skinProfileSchema = new mongoose.Schema({
  user_id: String,
  type: String,
  concerns: String,
  sensitivities: String,
  budget: String,
  complexity: String,
})
skinProfileSchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export const skinProfileModel = mongoose.model("SkinProfile", skinProfileSchema)

